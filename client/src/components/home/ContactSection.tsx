import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Type assertion for the response
      const responseData = response as any;
      if (responseData.data?.id) {
        console.log('Message ID:', responseData.data.id);
      }
      
      reset();
    } catch (error: any) { // Type assertion for error
      console.error('Contact form error:', error);
      
      // Handle validation errors
      if (error.status === 400 && error.json?.errors) {
        const errorMessages = error.json.errors.map((err: any) => err.message).join(', ');
        toast({
          title: "Form validation error",
          description: errorMessages || "Please check your form inputs and try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="animate-scroll order-2 lg:order-1">
            <span className="inline-block px-3 py-1 rounded-full bg-primary bg-opacity-20 text-primary text-sm font-medium mb-4">Contact Us</span>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Let's Discuss Your <span className="text-primary">Project</span></h2>
            <p className="text-gray-400 mb-8">Have a project in mind or questions about our services? Get in touch with our team for a free consultation.</p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="w-full bg-accent border border-gray-700 rounded-md px-4 py-3 text-white focus:border-primary focus:outline-none transition"
                    {...register("name")}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-accent border border-gray-700 rounded-md px-4 py-3 text-white focus:border-primary focus:outline-none transition"
                    {...register("email")}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <Input
                  id="subject"
                  placeholder="Project Inquiry"
                  className="w-full bg-accent border border-gray-700 rounded-md px-4 py-3 text-white focus:border-primary focus:outline-none transition"
                  {...register("subject")}
                />
                {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full bg-accent border border-gray-700 rounded-md px-4 py-3 text-white focus:border-primary focus:outline-none transition"
                  {...register("message")}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-secondary text-white font-medium py-3 px-6 rounded-md transition cta-button flex items-center justify-center"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                {!isSubmitting && <i className="ri-send-plane-line ml-2"></i>}
              </Button>
            </form>
          </div>
          
          <div className="animate-scroll order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary bg-opacity-20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary bg-opacity-20 rounded-full blur-xl"></div>
              
              <div className="bg-accent p-8 rounded-2xl relative z-10 border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="bg-primary bg-opacity-20 p-4 rounded-full mr-4">
                    <i className="ri-map-pin-line text-primary text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-white">Our Location</h3>
                    <p className="text-gray-400">Shipmall,kozhikkode,kerala</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="bg-primary bg-opacity-20 p-4 rounded-full mr-4">
                    <i className="ri-mail-line text-primary text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-white">Email Us</h3>
                    <p className="text-gray-400">logicloops@days364.com</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-8">
                  <div className="bg-primary bg-opacity-20 p-4 rounded-full mr-4">
                    <i className="ri-phone-line text-primary text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-white">Call Us</h3>
                    <p className="text-gray-400">+966 (55) 156-8941</p>
                  </div>
                </div>
                
                <div className="h-60 bg-gray-800 rounded-xl overflow-hidden flex items-center justify-center">
                  <i className="ri-map-2-line text-primary text-5xl"></i>
                </div>
                
                <div className="mt-8 flex justify-center space-x-4">
                  <a href="#" className="bg-dark hover:bg-primary text-white p-3 rounded-full transition">
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a href="#" className="bg-dark hover:bg-primary text-white p-3 rounded-full transition">
                    <i className="ri-twitter-fill"></i>
                  </a>
                  <a href="#" className="bg-dark hover:bg-primary text-white p-3 rounded-full transition">
                    <i className="ri-instagram-fill"></i>
                  </a>
                  <a href="#" className="bg-dark hover:bg-primary text-white p-3 rounded-full transition">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
