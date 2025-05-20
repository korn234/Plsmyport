import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Code, Cpu, Database, Server } from "lucide-react";

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

  const floatingIcons = [
    { icon: <Code className="h-6 w-6" />, delay: 0, duration: 6 },
    { icon: <Cpu className="h-6 w-6" />, delay: 1.5, duration: 8 },
    { icon: <Database className="h-6 w-6" />, delay: 0.5, duration: 7 },
    { icon: <Server className="h-6 w-6" />, delay: 2, duration: 9 },
  ];

  return (
    <section 
      id="home" 
      className="relative pt-28 pb-20 md:pt-32 md:pb-24 bg-gradient-to-r from-secondary via-secondary/90 to-primary/90 overflow-hidden tech-grid-bg"
    >
      {/* Animated tech particles */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-white/20 dark:text-white/10"
            initial={{ 
              x: Math.random() * 100, 
              y: Math.random() * 100,
              opacity: 0 
            }}
            animate={{ 
              x: [
                Math.random() * window.innerWidth, 
                Math.random() * window.innerWidth, 
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight * 0.8, 
                Math.random() * window.innerHeight * 0.8, 
                Math.random() * window.innerHeight * 0.8
              ],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: item.duration, 
              delay: item.delay,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/20 dark:bg-primary/30 blur-[120px] rounded-full"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
              <span className="inline-block mr-1">✨</span> เทคโนโลยีล้ำสมัยแห่งอนาคต
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-6 glow-text">
              เปลี่ยนธุรกิจของคุณด้วย <span className="text-accent glow-text">เทคโนโลยี 3D</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0">
              ใช้โซลูชันที่ทันสมัยเพื่อขับเคลื่อนการเติบโต เพิ่มประสิทธิภาพ และสร้างนวัตกรรมสำหรับองค์กรที่มองไปข้างหน้า
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Button
                onClick={() => scrollToSection("#services")}
                className="btn-tech px-8 py-3 bg-white text-primary hover:bg-gray-100 rounded-md transition-all font-medium text-center"
              >
                <span className="relative z-10 flex items-center">
                  บริการของเรา
                  <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline" 
                className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:bg-opacity-10 rounded-md transition-all font-medium text-center glow-border"
              >
                ติดต่อเรา
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 perspective-1000"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="relative"
              initial={{ rotateY: 5, rotateX: 10 }}
              animate={{ rotateY: -5, rotateX: -10 }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur-sm opacity-75 dark:opacity-90 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Business professionals in a modern workspace" 
                className="relative rounded-lg shadow-2xl border border-white/10 dark:border-white/5 z-10" 
              />
              
              {/* 3D Elements */}
              <motion.div 
                className="absolute -right-8 -top-8 w-16 h-16 bg-accent/90 rounded-xl dark:glow-border z-20 flex items-center justify-center text-white"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Cpu className="h-8 w-8" />
              </motion.div>
              
              <motion.div 
                className="absolute -left-5 -bottom-5 w-12 h-12 bg-primary/90 rounded-full dark:glow-border z-20 flex items-center justify-center text-white"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                <Code className="h-6 w-6" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
