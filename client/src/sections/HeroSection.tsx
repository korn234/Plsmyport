import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="home" 
      className="pt-28 pb-20 md:pt-32 md:pb-24 bg-gradient-to-r from-secondary to-primary"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-6">
              Transform Your Business With Technology
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0">
              Leveraging cutting-edge solutions to drive growth, efficiency, and innovation for forward-thinking organizations.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Button
                onClick={() => scrollToSection("#services")}
                className="px-8 py-3 bg-white text-primary hover:bg-gray-100 rounded-md transition-colors font-medium text-center"
              >
                Our Services
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline" 
                className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:bg-opacity-10 rounded-md transition-colors font-medium text-center"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Business professionals in a modern workspace" 
              className="rounded-lg shadow-2xl" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
