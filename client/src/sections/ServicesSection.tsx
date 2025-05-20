import { ArrowRight, ArrowUpRight, CircuitBoard, Network, Server, Lock, FileCode, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/constants";

// Add extra fields to enhance our services
const enhancedServices = [
  {
    ...services[0],
    icon: <CircuitBoard className="h-6 w-6" />,
    iconBg: "bg-blue-500/90",
    accentColor: "from-blue-500 to-sky-400",
    highlight: "3D Business Transformation"
  },
  {
    ...services[1],
    icon: <LineChart className="h-6 w-6" />,
    iconBg: "bg-purple-500/90",
    accentColor: "from-purple-500 to-indigo-400",
    highlight: "Real-time 3D Analytics"
  },
  {
    ...services[2],
    icon: <Server className="h-6 w-6" />,
    iconBg: "bg-teal-500/90",
    accentColor: "from-teal-500 to-emerald-400",
    highlight: "3D Cloud Architecture"
  },
  {
    ...services[3],
    icon: <Lock className="h-6 w-6" />,
    iconBg: "bg-red-500/90",
    accentColor: "from-red-500 to-amber-400",
    highlight: "3D Security Monitoring"
  },
  {
    ...services[4],
    icon: <FileCode className="h-6 w-6" />,
    iconBg: "bg-amber-500/90",
    accentColor: "from-amber-500 to-yellow-400",
    highlight: "3D Software Interfaces"
  },
  {
    ...services[5],
    icon: <Network className="h-6 w-6" />,
    iconBg: "bg-green-500/90",
    accentColor: "from-green-500 to-teal-400",
    highlight: "3D Strategic Roadmaps"
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
    <section id="services" className="relative py-24 bg-gray-50 dark:bg-secondary/10 tech-grid-bg overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-gray-50 dark:from-secondary/10 to-transparent z-10"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-gray-50 dark:from-secondary/10 to-transparent z-10"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 blur-[120px] rounded-full"></div>
      
      <div className="container relative z-20 mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-accent/10 dark:bg-accent/20 rounded-full backdrop-blur-sm">
              <Server className="h-8 w-8 text-accent dark:text-accent/90" />
            </div>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-secondary dark:text-white mb-4 dark:glow-text">
            Our 3D Technology Services
          </h2>
          <p className="text-gray-dark dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Comprehensive 3D technology solutions to address every aspect of your modern business needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enhancedServices.map((service, index) => (
            <motion.div 
              key={index} 
              className="card-3d group h-full bg-white dark:bg-secondary/20 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3 },
                rotateY: 3,
                rotateX: 2
              }}
            >
              <div className="relative h-48 overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${service.accentColor} opacity-30 dark:opacity-40 z-10 transition-opacity duration-300 group-hover:opacity-20 dark:group-hover:opacity-30`}></div>
                
                {/* The image */}
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                
                {/* Highlight label */}
                <div className="absolute top-4 left-4 z-20">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${service.accentColor} shadow-lg`}>
                    {service.highlight}
                  </div>
                </div>
                
                {/* Icon bubble */}
                <div className="absolute bottom-0 right-0 -mb-8 mr-6 z-20">
                  <div className={`w-16 h-16 rounded-full ${service.iconBg} shadow-lg flex items-center justify-center border-2 border-white dark:border-gray-800`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 pt-10 relative z-10">
                <h3 className="font-heading font-semibold text-xl mb-3 text-secondary dark:text-white dark:glow-text">
                  {service.title}
                </h3>
                <p className="text-gray-dark dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                
                <Button 
                  onClick={scrollToContact}
                  className="relative overflow-hidden group/btn mt-2 px-4 py-2 rounded-lg bg-white dark:bg-secondary/50 border border-gray-200 dark:border-gray-700 shadow-sm text-sm font-medium text-secondary dark:text-white hover:bg-gray-50 dark:hover:bg-secondary/70"
                >
                  <span className="relative z-10 flex items-center">
                    Learn More
                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </span>
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.accentColor} opacity-0 group-hover/btn:opacity-10 dark:group-hover/btn:opacity-20 transition-opacity duration-300`}></div>
                </Button>
              </div>
              
              {/* 3D depth effect at bottom */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accentColor} opacity-50 dark:opacity-70`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
