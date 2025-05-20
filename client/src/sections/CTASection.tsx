import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ZapIcon, Cpu, Code, Database } from "lucide-react";

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

  // Floating tech icons for 3D effect
  const techIcons = [
    { icon: <Cpu className="h-6 w-6" />, x: 20, y: 20, delay: 0, size: 1.2 },
    { icon: <Code className="h-8 w-8" />, x: -30, y: -10, delay: 0.5, size: 1.5 },
    { icon: <Database className="h-5 w-5" />, x: 30, y: -30, delay: 1, size: 1 },
  ];

  return (
    <motion.section 
      className="relative py-24 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* 3D background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/90"></div>
      
      {/* Tech grid background */}
      <div className="absolute inset-0 tech-grid-bg opacity-20"></div>
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/30 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-primary/20 blur-[100px] rounded-full"></div>
      
      {/* Floating elements */}
      {techIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-white/30 z-10 pointer-events-none"
          initial={{ 
            x: `calc(50% + ${item.x}px)`, 
            y: `calc(50% + ${item.y}px)`,
            scale: item.size,
            opacity: 0 
          }}
          animate={{ 
            y: [`calc(50% + ${item.y}px)`, `calc(50% + ${item.y - 15}px)`, `calc(50% + ${item.y}px)`],
            rotate: [0, 10, 0, -10, 0],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ 
            duration: 5,
            delay: item.delay,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {item.icon}
        </motion.div>
      ))}
      
      <div className="container relative z-20 mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative glass rounded-2xl px-8 py-16 md:p-16 shadow-2xl border border-white/10">
            {/* Decorative corner borders */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/30 rounded-tl-xl"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/30 rounded-tr-xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/30 rounded-bl-xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/30 rounded-br-xl"></div>
            
            <div className="text-center">
              {/* Icon badge */}
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 relative"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.2 
                }}
              >
                <ZapIcon className="h-10 w-10 text-white" />
                
                {/* Orbit effect */}
                <motion.div 
                  className="absolute inset-0 rounded-full border border-white/20"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
              </motion.div>
              
              <motion.h2 
                className="font-heading font-bold text-3xl md:text-5xl text-white mb-6 glow-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Ready for 3D Business Transformation?
              </motion.h2>
              
              <motion.p 
                className="text-white/90 mb-10 max-w-2xl mx-auto text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Let's discuss how our cutting-edge 3D technology solutions can revolutionize your business operations and create immersive digital experiences.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button
                  onClick={scrollToContact}
                  className="px-8 py-6 bg-white text-primary hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium shadow-xl hover:shadow-2xl group relative overflow-hidden"
                  size="lg"
                >
                  <span className="relative z-10 flex items-center text-lg">
                    Schedule a 3D Consultation
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
                
                <span className="text-white/70 text-sm px-4">or</span>
                
                <Button
                  variant="outline"
                  onClick={scrollToContact}
                  className="px-8 py-6 border-2 border-white/50 text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium glow-border"
                  size="lg"
                >
                  <span className="text-lg">
                    Explore Our 3D Services
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
