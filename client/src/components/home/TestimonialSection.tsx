interface Testimonial {
  name: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
  comment: string;
}

export default function TestimonialSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Michael Johnson",
      position: "CEO",
      company: "TechStart",
      avatar: "bg-gray-600",
      rating: 5,
      comment: "Logic Loops helped us completely transform our online presence. Our website traffic has increased by 150% and conversions have doubled since implementing their strategies."
    },
    {
      name: "Sarah Williams",
      position: "Marketing Director",
      company: "FashionHub",
      avatar: "bg-gray-700",
      rating: 5,
      comment: "The digital marketing campaign designed by Logic Loops exceeded all our expectations. Our social media engagement has grown exponentially and sales have increased by 75%."
    },
    {
      name: "David Chen",
      position: "Founder",
      company: "HealthTech Solutions",
      avatar: "bg-gray-500",
      rating: 4.5,
      comment: "Their development team built our healthcare platform from scratch, with excellent attention to detail and security requirements. The project was delivered on time and within budget."
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="ri-star-fill"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="ri-star-half-fill"></i>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="ri-star-line"></i>);
    }
    
    return stars;
  };

  return (
    <section className="py-20 bg-dark overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-scroll">
          <span className="inline-block px-3 py-1 rounded-full bg-primary bg-opacity-20 text-primary text-sm font-medium mb-4">Testimonials</span>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">What Our <span className="text-primary">Clients</span> Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Hear from businesses that have achieved success with our services.</p>
        </div>
        
        <div className="relative">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary opacity-5 rounded-full blur-3xl -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-scroll bg-accent rounded-xl p-6 border border-gray-800 relative">
                <div className="absolute -top-4 -right-4 bg-primary text-white rounded-full p-2">
                  <i className="ri-double-quotes-l text-xl"></i>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className={`w-14 h-14 rounded-full ${testimonial.avatar} mr-3`}></div>
                  <div>
                    <h4 className="font-montserrat font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex text-yellow-400 mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-300">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
