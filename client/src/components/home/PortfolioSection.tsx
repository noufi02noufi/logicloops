import { useState } from "react";
import { Button } from "@/components/ui/button";

interface PortfolioItem {
  image: string;
  category: string;
  title: string;
  description: string;
}

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  
  const portfolioItems: PortfolioItem[] = [
    {
      image: "bg-gray-700",
      category: "Web Design",
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with inventory management."
    },
    {
      image: "bg-gray-700",
      category: "Digital Marketing",
      title: "Social Media Campaign",
      description: "Successful social media strategy that increased engagement by 200%."
    },
    {
      image: "bg-gray-700",
      category: "Business Solutions",
      title: "CRM Implementation",
      description: "Streamlined customer management with custom CRM integration."
    },
    {
      image: "bg-gray-700",
      category: "Development",
      title: "SaaS Platform",
      description: "Custom SaaS solution built with React and Node.js."
    },
    {
      image: "bg-gray-700",
      category: "Digital Marketing",
      title: "SEO Optimization",
      description: "Rankings improvement with comprehensive SEO strategy."
    },
    {
      image: "bg-gray-700",
      category: "Development",
      title: "Mobile Application",
      description: "Cross-platform mobile app built with React Native."
    }
  ];

  const filterCategories = ["All Projects", "Web Design", "Digital Marketing", "Business", "Development"];
  
  const filteredItems = activeFilter === "All Projects" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter || 
        (activeFilter === "Business" && item.category === "Business Solutions"));

  return (
    <section id="portfolio" className="py-20 bg-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-scroll">
          <span className="inline-block px-3 py-1 rounded-full bg-primary bg-opacity-20 text-primary text-sm font-medium mb-4">Our Work</span>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Featured <span className="text-primary">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Browse our latest work and see how we've helped businesses achieve their digital goals.</p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-10 animate-scroll">
          {filterCategories.map((category, index) => (
            <button 
              key={index} 
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-md m-1 transition ${
                activeFilter === category 
                  ? "bg-primary text-white" 
                  : "bg-dark hover:bg-gray-800 text-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div key={index} className="animate-scroll group relative overflow-hidden rounded-xl h-72">
              <div className={`w-full h-full ${item.image} object-cover transition-transform duration-500 group-hover:scale-110`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-primary text-sm font-medium">{item.category}</span>
                <h3 className="font-montserrat font-bold text-xl text-white mt-2">{item.title}</h3>
                <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">{item.description}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button className="bg-primary hover:bg-secondary text-white p-3 rounded-full h-auto w-auto">
                  <i className="ri-eye-line text-xl"></i>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="inline-flex items-center bg-primary hover:bg-secondary text-white font-medium py-3 px-6 rounded-md transition cta-button">
            <span>View All Projects</span>
            <i className="ri-arrow-right-line ml-2"></i>
          </Button>
        </div>
      </div>
    </section>
  );
}
