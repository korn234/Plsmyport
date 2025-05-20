import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const services = [
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Digital Transformation",
    description: "Modernize your business processes and customer experiences with comprehensive digital solutions.",
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Business Intelligence",
    description: "Turn your data into a strategic asset with advanced analytics and reporting solutions.",
  },
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Cloud Infrastructure",
    description: "Scalable, secure and efficient cloud solutions tailored to your business requirements.",
  },
  {
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Cybersecurity",
    description: "Protect your business with comprehensive security solutions and proactive monitoring.",
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Custom Software",
    description: "Bespoke software solutions designed and developed to solve your specific business challenges.",
  },
  {
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "IT Strategy",
    description: "Strategic technology planning aligned with your business objectives for sustainable growth.",
  },
];

export default function ServicesSection() {
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const contactPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = contactPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-secondary dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-dark dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive technology solutions to address every aspect of your business needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-secondary/20 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3 text-secondary dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-dark dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <Button 
                  variant="link" 
                  onClick={scrollToContact}
                  className="text-primary dark:text-primary font-medium flex items-center px-0 hover:no-underline"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
