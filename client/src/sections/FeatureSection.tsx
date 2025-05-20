import { ChartLine, Cog, ShieldAlert, Cpu, LineChart, Lock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <LineChart className="h-10 w-10" />,
    title: "ข้อมูลเชิงลึกจากการวิเคราะห์",
    description: "เปลี่ยนข้อมูลที่ซับซ้อนให้เป็นข้อมูลธุรกิจที่นำไปใช้งานได้ ให้คุณได้เปรียบคู่แข่งด้วยการแสดงผลแบบ 3D",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <Cpu className="h-10 w-10" />,
    title: "โซลูชันที่ปรับแต่งเฉพาะคุณ",
    description: "โซลูชันเทคโนโลยีที่ออกแบบมาเฉพาะสำหรับความท้าทายทางธุรกิจของคุณ ด้วยเทคโนโลยี 3D ล้ำสมัย",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: <Lock className="h-10 w-10" />,
    title: "ความปลอดภัยระดับองค์กร",
    description: "โปรโตคอลความปลอดภัยชั้นนำของอุตสาหกรรมพร้อมระบบตรวจสอบแบบ 3D ที่ช่วยปกป้องข้อมูลของคุณตลอดเวลา",
    color: "from-amber-500 to-red-500"
  }
];

export default function FeatureSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative py-24 bg-white dark:bg-secondary/5 tech-grid-bg overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 dark:bg-primary/10 blur-[150px] rounded-full"></div>
      <div className="absolute top-0 right-1/4 translate-x-1/2 w-[600px] h-[300px] bg-accent/5 dark:bg-accent/10 blur-[150px] rounded-full"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 fade-up-element"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary/10 dark:bg-primary/20 rounded-2xl backdrop-blur-sm">
              <Cog className="h-8 w-8 text-primary dark:text-primary/90" />
            </div>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-secondary dark:text-white mb-4 dark:glow-text">
            ทำไมต้องเลือกเรา?
          </h2>
          <p className="text-gray-dark dark:text-gray-300 max-w-2xl mx-auto">
            เราผสมผสานความเชี่ยวชาญด้านเทคโนโลยีกับความเข้าใจในธุรกิจเพื่อให้บริการโซลูชัน 3D ที่สร้างผลลัพธ์จริง
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
              className="card-3d h-full stagger-fade-element feature-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3 },
                rotateY: 5,
                rotateX: 5
              }}
            >
              <div className="p-8 h-full relative z-10 overflow-hidden rounded-lg bg-white dark:bg-secondary/20 border border-gray-100 dark:border-gray-800">
                {/* Background gradient */}
                <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-br ${feature.color} opacity-10 dark:opacity-20 blur-sm -mt-10 -ml-10 rounded-full`}></div>
                
                {/* Icon container with 3D shadow */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} blur-md rounded-xl opacity-20 dark:opacity-40`}></div>
                  <div className="relative flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="text-primary dark:text-accent">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="font-heading font-semibold text-xl mb-3 text-secondary dark:text-white dark:glow-text relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-dark dark:text-gray-300 relative z-10">
                  {feature.description}
                </p>
                
                {/* 3D Corner Accent */}
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-transparent to-primary/10 dark:to-primary/20"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}