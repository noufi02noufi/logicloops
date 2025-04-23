import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically handle the newsletter submission
  };

  return (
    <footer className="bg-dark pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Logo className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 mb-6">Design. Market. Evolve – 364 Days of Digital Brilliance.</p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-primary">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <i className="ri-instagram-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-montserrat font-bold text-white text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li><button onClick={() => scrollToSection("services")} className="text-gray-400 hover:text-primary transition">Web Designing</button></li>
              <li><button onClick={() => scrollToSection("services")} className="text-gray-400 hover:text-primary transition">Digital Marketing</button></li>
              <li><button onClick={() => scrollToSection("services")} className="text-gray-400 hover:text-primary transition">Business Solutions</button></li>
              <li><button onClick={() => scrollToSection("services")} className="text-gray-400 hover:text-primary transition">Coding Languages</button></li>
              <li><button onClick={() => scrollToSection("services")} className="text-gray-400 hover:text-primary transition">Mobile Development</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-bold text-white text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><button onClick={() => scrollToSection("home")} className="text-gray-400 hover:text-primary transition">About Us</button></li>
              <li><button onClick={() => scrollToSection("portfolio")} className="text-gray-400 hover:text-primary transition">Portfolio</button></li>
              <li><button onClick={() => scrollToSection("blog")} className="text-gray-400 hover:text-primary transition">Blog</button></li>
              <li><button onClick={() => scrollToSection("home")} className="text-gray-400 hover:text-primary transition">Careers</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="text-gray-400 hover:text-primary transition">Contact Us</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-bold text-white text-lg mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <form className="flex" onSubmit={handleNewsletterSubmit}>
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-accent border border-gray-700 rounded-l-md px-4 py-2 w-full text-white focus:border-primary focus:outline-none"
                required
              />
              <Button 
                type="submit" 
                className="bg-primary hover:bg-secondary text-white px-4 rounded-l-none rounded-r-md transition"
              >
                <i className="ri-send-plane-line"></i>
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Logic Loops Days364. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-primary text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-primary text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-primary text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
