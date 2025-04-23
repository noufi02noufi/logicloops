import { Button } from "@/components/ui/button";

export default function CTASection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-primary bg-opacity-10 border border-primary border-opacity-20 rounded-2xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="max-w-3xl mx-auto text-center animate-scroll">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="text-gray-300 text-lg mb-8">Let's work together to create a powerful, effective online strategy that drives results for your business.</p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => scrollToSection("contact")} 
                className="py-3 px-6 bg-primary hover:bg-secondary text-white font-medium rounded-md transition cta-button flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <i className="ri-arrow-right-line"></i>
              </Button>
              <Button 
                onClick={() => scrollToSection("services")} 
                variant="secondary"
                className="py-3 px-6 bg-white hover:bg-gray-100 text-dark font-medium rounded-md transition flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
                <i className="ri-information-line"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
