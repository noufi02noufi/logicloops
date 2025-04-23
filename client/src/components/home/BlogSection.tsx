import { Button } from "@/components/ui/button";

interface BlogPost {
  image: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
}

export default function BlogSection() {
  const blogPosts: BlogPost[] = [
    {
      image: "bg-gray-700",
      category: "Web Design",
      date: "April 15, 2025",
      readTime: "5 min read",
      title: "10 Web Design Trends That Will Dominate 2025",
      excerpt: "Explore the cutting-edge design trends that will shape the web development landscape in the coming year."
    },
    {
      image: "bg-gray-600",
      category: "Digital Marketing",
      date: "April 10, 2025",
      readTime: "7 min read",
      title: "Mastering Social Media Algorithms in 2025",
      excerpt: "Learn how the latest algorithm changes affect your social media strategy and what you can do to stay ahead."
    },
    {
      image: "bg-gray-800",
      category: "Development",
      date: "April 5, 2025",
      readTime: "8 min read",
      title: "The Rise of AI in Web Development: What You Need to Know",
      excerpt: "Discover how artificial intelligence is transforming web development practices and tools for the better."
    }
  ];

  return (
    <section id="blog" className="py-20 bg-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-scroll">
          <span className="inline-block px-3 py-1 rounded-full bg-primary bg-opacity-20 text-primary text-sm font-medium mb-4">Our Blog</span>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Latest <span className="text-primary">Insights</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Stay updated with the latest trends and knowledge in digital marketing, web design, and technology.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="animate-scroll bg-dark rounded-xl overflow-hidden border border-gray-800 group hover:border-primary">
              <div className="relative overflow-hidden">
                <div className={`w-full h-48 ${post.image} object-cover transition-transform duration-500 group-hover:scale-110`}></div>
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">{post.category}</div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <i className="ri-calendar-line mr-2"></i>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <i className="ri-time-line mr-2"></i>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="font-montserrat font-bold text-xl mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                
                <Button variant="link" className="inline-flex items-center text-primary hover:text-white hover:bg-primary px-3 py-1 rounded-md transition-colors">
                  <span>Read Article</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </Button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="inline-flex items-center bg-primary hover:bg-secondary text-white font-medium py-3 px-6 rounded-md transition cta-button">
            <span>View All Articles</span>
            <i className="ri-arrow-right-line ml-2"></i>
          </Button>
        </div>
      </div>
    </section>
  );
}
