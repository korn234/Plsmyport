import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTASection() {
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
    <motion.section 
      className="py-16 bg-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            className="font-heading font-bold text-3xl md:text-4xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-gray-100 mb-8 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Let's discuss how our technology solutions can help you achieve your business goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              onClick={scrollToContact}
              className="px-8 py-3 bg-white text-primary hover:bg-gray-100 rounded-md transition-colors font-medium"
              size="lg"
            >
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
