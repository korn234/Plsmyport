import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "500+", label: "Successful projects" },
  { value: "50+", label: "Technology experts" },
  { value: "98%", label: "Client satisfaction" },
  { value: "12+", label: "Years of experience" }
];

export default function AboutSection() {
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
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Our modern workspace" 
              className="rounded-lg shadow-lg" 
            />
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-secondary dark:text-white mb-6">
              About TechCorp
            </h2>
            <p className="text-gray-dark dark:text-gray-300 mb-6">
              Founded in 2010, TechCorp has been at the forefront of business technology innovation for over a decade. We combine deep technical expertise with business acumen to deliver solutions that drive real-world results.
            </p>
            <p className="text-gray-dark dark:text-gray-300 mb-6">
              Our team of certified experts works closely with each client to understand their unique challenges and opportunities, ensuring our technology solutions are perfectly aligned with business objectives.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                >
                  <div className="text-3xl font-heading font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-gray-dark dark:text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            <Button
              onClick={scrollToContact}
              className="px-8 py-3 bg-primary text-white rounded-md hover:bg-accent transition-colors font-medium"
            >
              Work With Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
