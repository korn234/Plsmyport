import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Users, CheckCircle, Trophy, Clock } from "lucide-react";

const stats = [
  { value: "500+", label: "Successful projects", icon: <Trophy className="h-5 w-5" />, color: "from-blue-500 to-cyan-400" },
  { value: "50+", label: "Technology experts", icon: <Users className="h-5 w-5" />, color: "from-purple-500 to-indigo-500" },
  { value: "98%", label: "Client satisfaction", icon: <CheckCircle className="h-5 w-5" />, color: "from-amber-500 to-orange-400" },
  { value: "12+", label: "Years of experience", icon: <Clock className="h-5 w-5" />, color: "from-green-500 to-teal-400" }
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
    <section id="about" className="relative py-24 bg-white dark:bg-secondary/5 tech-grid-bg overflow-hidden">
      {/* Glow effects */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-primary/5 dark:bg-primary/10 blur-[150px] rounded-full"></div>
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/5 dark:bg-accent/10 blur-[150px] rounded-full"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-12 perspective-1000"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative"
              initial={{ rotateY: -5 }}
              animate={{ rotateY: 5 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-lg blur-md opacity-70 dark:opacity-90"></div>
              
              {/* Main image with tech frame */}
              <div className="relative">
                <div className="absolute inset-0 border-2 border-primary/20 dark:border-primary/30 rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Our modern workspace" 
                  className="relative rounded-lg shadow-xl border border-white/10 dark:border-white/5 z-10" 
                />
                
                {/* Tech corner accents */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary dark:border-accent rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary dark:border-accent rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary dark:border-accent rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary dark:border-accent rounded-br-lg"></div>
              </div>
              
              {/* Tech element overlays */}
              <div className="absolute top-4 left-4 py-1 px-3 bg-white/90 dark:bg-secondary/90 shadow-lg rounded-md border border-gray-200 dark:border-gray-700 text-xs font-semibold text-primary dark:text-accent backdrop-blur-sm">
                3D Technology Lab
              </div>
              
              <motion.div
                className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary/5 dark:bg-primary/10 rounded-lg backdrop-blur-sm z-20 border border-white/20 dark:border-white/10"
                animate={{ 
                  rotate: [0, 90, 180, 270, 360],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 20,
                  ease: "linear"
                }}
              >
                <div className="absolute inset-1 border border-dashed border-primary/30 dark:border-accent/30 rounded opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-xs font-mono text-primary/70 dark:text-accent/70 text-center leading-tight">
                    <div>TECH</div>
                    <div>CORP</div>
                    <div className="text-[8px] mt-1">SINCE 2010</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 text-sm font-medium border border-primary/20 dark:border-primary/30">
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary dark:bg-accent mr-2"></span>
                About Our 3D Technology
              </span>
            </div>
            
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-secondary dark:text-white mb-6 dark:glow-text">
              Pioneering 3D <span className="text-primary dark:text-accent">Digital Solutions</span>
            </h2>
            
            <div className="relative mb-6">
              <p className="text-gray-dark dark:text-gray-300 text-lg leading-relaxed">
                Founded in 2010, TechCorp has been at the forefront of 3D business technology innovation for over a decade. We combine deep technical expertise with business acumen to deliver solutions that drive real-world results.
              </p>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 dark:via-accent/30 to-transparent my-4"></div>
              <p className="text-gray-dark dark:text-gray-300 text-lg leading-relaxed">
                Our team of certified 3D technology experts works closely with each client to understand their unique challenges and opportunities, ensuring our solutions are perfectly aligned with business objectives.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="card-3d bg-white dark:bg-secondary/20 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg`}>
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-3xl font-heading font-bold text-primary dark:text-accent dark:glow-text">{stat.value}</div>
                      <p className="text-gray-dark dark:text-gray-300 text-sm">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Button
              onClick={scrollToContact}
              className="btn-tech px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-md transition-all font-medium shadow-lg group"
            >
              <span className="relative z-10 flex items-center">
                Work With Us
                <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
