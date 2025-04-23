import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-scroll space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary bg-opacity-20 text-primary">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              <span className="text-sm font-medium">Design. Market. Evolve.</span>
            </div>
            
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              Your <span className="text-primary">Digital Success</span> Partner for 
              <span className="relative">
                <span className="text-primary"> 364 Days</span>
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50.5 4.5 99 2.5 147.5 3.5C196 4.5 244.5 8.83333 293 10" stroke="#0D99FF" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-xl">
              Complete solutions for web designing, digital marketing, business growth, and coding expertise - all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <Button 
                onClick={() => scrollToSection("services")} 
                className="py-3 px-6 bg-primary hover:bg-secondary text-white font-medium rounded-md transition cta-button flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
                <i className="ri-arrow-right-line"></i>
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")} 
                variant="outline"
                className="py-3 px-6 bg-transparent hover:bg-gray-800 text-white border border-gray-600 font-medium rounded-md transition flex items-center justify-center space-x-2"
              >
                <span>Free Consultation</span>
                <i className="ri-phone-line"></i>
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 pt-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-dark bg-gray-500"></div>
                <div className="w-10 h-10 rounded-full border-2 border-dark bg-gray-600"></div>
                <div className="w-10 h-10 rounded-full border-2 border-dark bg-gray-700"></div>
              </div>
              <div>
                <div className="flex items-center text-yellow-400 text-sm">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <p className="text-gray-400 text-sm">Trusted by 100+ businesses</p>
              </div>
            </div>
          </div>
          
          <div className="animate-scroll relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary bg-opacity-20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary bg-opacity-20 rounded-full blur-xl"></div>
            
            <div className="relative bg-accent p-1 rounded-2xl shadow-2xl">
              <div className="w-full h-80 rounded-xl bg-gray-700"></div>
              
              <div className="absolute -bottom-6 -right-6 bg-dark p-3 rounded-lg border border-gray-800 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-full flex items-center justify-center">
                    <i className="ri-code-line text-primary text-2xl"></i>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Web Development</p>
                    <p className="text-gray-400 text-xs">Professional solutions</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 bg-dark p-3 rounded-lg border border-gray-800 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-full flex items-center justify-center">
                    <i className="ri-line-chart-line text-primary text-2xl"></i>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Digital Marketing</p>
                    <p className="text-gray-400 text-xs">Growth strategies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
