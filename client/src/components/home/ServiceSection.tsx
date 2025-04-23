import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  return (
    <div className="service-card animate-scroll bg-accent rounded-xl p-6 border border-gray-800 group hover:border-primary">
      <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:bg-opacity-100 transition-all">
        <i className={`${icon} text-primary text-2xl group-hover:text-white transition-colors`}></i>
      </div>
      
      <h3 className="font-montserrat font-bold text-xl mb-3">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <i className="ri-checkbox-circle-line text-primary mt-1 mr-2"></i>
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button variant="link" className="inline-flex items-center text-primary hover:text-white hover:bg-primary px-4 py-2 rounded-md transition-colors">
        <span>Learn More</span>
        <i className="ri-arrow-right-line ml-2"></i>
      </Button>
    </div>
  );
};

export default function ServiceSection() {
  const services = [
    {
      icon: "ri-layout-4-line",
      title: "Web Designing",
      description: "Create stunning, responsive websites that convert visitors into customers with our expert UI/UX solutions.",
      features: ["UI/UX Design", "Responsive Layouts", "WordPress Development"]
    },
    {
      icon: "ri-line-chart-line",
      title: "Digital Marketing",
      description: "Drive targeted traffic and generate quality leads with our comprehensive digital marketing strategies.",
      features: ["SEO Optimization", "Social Media Marketing", "Email Campaigns"]
    },
    {
      icon: "ri-briefcase-line",
      title: "Business Solutions",
      description: "Transform your business with digital strategies, automation, and growth-focused consulting services.",
      features: ["Digital Transformation", "CRM Integration", "Business Analytics"]
    },
    {
      icon: "ri-code-s-slash-line",
      title: "Coding Languages",
      description: "Build powerful, scalable applications with cutting-edge technologies and expert development services.",
      features: ["Frontend Development", "Backend Solutions", "API Integration"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-scroll">
          <span className="inline-block px-3 py-1 rounded-full bg-primary bg-opacity-20 text-primary text-sm font-medium mb-4">Our Services</span>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Complete Digital <span className="text-primary">Solutions</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We offer comprehensive services to help your business thrive in the digital landscape, from design to deployment.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              features={service.features} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
