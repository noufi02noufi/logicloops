import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { getScrollAnimation } from "@/lib/utils";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export default function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      name: "Noufal Navas",
      position: "Founder & CEO",
      bio: "With over 10 years of experience in web development and digital marketing, Noufal leads our team in creating innovative solutions for businesses.",
      image: "/assets/images/profile.png",
      socialLinks: {
        twitter: "https://twitter.com/noualheeyoo",
        linkedin: "https://linkedin.com/in/noufalnavas",
        github: "https://github.com/noufalnavas"
      }
    },
    // Add more team members as needed
  ];

  return (
    <section id="team" className="py-20 bg-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div {...getScrollAnimation()}>
            <span className="inline-block px-3 py-1 rounded-full bg-primary bg-opacity-20 text-primary text-sm font-medium mb-4">Our Team</span>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Meet Our <span className="text-primary">Experts</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our team of skilled professionals is dedicated to delivering exceptional results for our clients.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              {...getScrollAnimation(index * 0.1)}
              className="bg-dark rounded-2xl p-6 border border-gray-800 hover:border-primary transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <Avatar className="h-32 w-32 border-4 border-dark group-hover:border-primary transition-all duration-300">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="bg-primary text-white text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <CardTitle className="text-xl font-bold mb-1 text-white">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium mb-3">{member.position}</CardDescription>
                
                <p className="text-gray-400 mb-4 text-sm">{member.bio}</p>
                
                <div className="flex space-x-3 mt-2">
                  {member.socialLinks.twitter && (
                    <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" 
                       className="bg-dark hover:bg-primary text-white p-2 rounded-full transition">
                      <i className="ri-twitter-fill"></i>
                    </a>
                  )}
                  {member.socialLinks.linkedin && (
                    <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                       className="bg-dark hover:bg-primary text-white p-2 rounded-full transition">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  )}
                  {member.socialLinks.github && (
                    <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer"
                       className="bg-dark hover:bg-primary text-white p-2 rounded-full transition">
                      <i className="ri-github-fill"></i>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}