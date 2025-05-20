import { ChartLine, Cog, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <ChartLine className="h-10 w-10" />,
    title: "Data-Driven Insights",
    description: "Transform complex data into actionable business intelligence that gives you a competitive edge."
  },
  {
    icon: <Cog className="h-10 w-10" />,
    title: "Custom Solutions",
    description: "Tailored technology solutions designed specifically for your unique business challenges."
  },
  {
    icon: <ShieldAlert className="h-10 w-10" />,
    title: "Enterprise Security",
    description: "Industry-leading security protocols that keep your data and systems protected at all times."
  }
];

export default function FeatureSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-secondary dark:text-white mb-4">
            Why Choose TechCorp?
          </h2>
          <p className="text-gray-dark dark:text-gray-300 max-w-2xl mx-auto">
            We combine technological expertise with business acumen to deliver solutions that drive real results.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="p-8 border border-gray-light dark:border-gray-700 rounded-lg hover:shadow-md transition-all duration-300 bg-white dark:bg-secondary/20"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-secondary dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-dark dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
