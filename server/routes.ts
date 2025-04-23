import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";
import { z } from "zod";
import { insertContactMessageSchema } from "@shared/schema";

// Extend the schema with additional validation
const contactFormSchema = insertContactMessageSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all contact messages (admin endpoint)
  app.get("/api/contact", async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      res.status(200).json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ message: "Failed to fetch messages" });
    }
  });

  // Get a single contact message by ID (admin endpoint)
  app.get("/api/contact/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid message ID" });
      }

      const message = await storage.getContactMessage(id);
      if (!message) {
        return res.status(404).json({ message: "Message not found" });
      }

      res.status(200).json(message);
    } catch (error) {
      console.error("Error fetching contact message:", error);
      res.status(500).json({ message: "Failed to fetch message" });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the contact form submission in the database
      const newMessage = await storage.createContactMessage(validatedData);
      
      // In a production environment, you would send an email notification
      // using nodemailer:
      /*
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.example.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER || "",
          pass: process.env.SMTP_PASS || "",
        },
      });

      await transporter.sendMail({
        from: `"Logic Loops Contact Form" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL || "info@logicloops.com",
        subject: `New Contact Form Submission: ${validatedData.subject}`,
        text: `
          Name: ${validatedData.name}
          Email: ${validatedData.email}
          Subject: ${validatedData.subject}
          Message: ${validatedData.message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <p><strong>Message:</strong> ${validatedData.message}</p>
        `,
      });
      */
      
      // Log the message ID for tracking
      console.log(`Contact form submission saved with ID: ${newMessage.id}`);
      
      res.status(201).json({ 
        message: "Message sent successfully", 
        data: { id: newMessage.id } 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({ message: "Failed to send message" });
      }
    }
  });

  // Mark a message as read (admin endpoint)
  app.patch("/api/contact/:id/read", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid message ID" });
      }

      const message = await storage.markContactMessageAsRead(id);
      if (!message) {
        return res.status(404).json({ message: "Message not found" });
      }

      res.status(200).json(message);
    } catch (error) {
      console.error("Error marking message as read:", error);
      res.status(500).json({ message: "Failed to update message" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
