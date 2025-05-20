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

  const shootingStars = [
    { delay: 0, duration: 4, left: '-5%', top: '10%' },
    { delay: 2, duration: 3.5, left: '-2%', top: '20%' },
    { delay: 4, duration: 4.2, left: '-8%', top: '35%' },
    { delay: 6, duration: 3.8, left: '-3%', top: '45%' },
    { delay: 8, duration: 4.5, left: '-6%', top: '15%' },
    { delay: 10, duration: 3.2, left: '-4%', top: '25%' },
  ];

  const twinkling = [
    { delay: 0, duration: 2, left: '10%', top: '20%' },
    { delay: 0.5, duration: 1.8, left: '20%', top: '15%' },
    { delay: 1, duration: 2.2, left: '30%', top: '25%' },
    { delay: 1.5, duration: 1.9, left: '40%', top: '10%' },
    { delay: 2, duration: 2.1, left: '50%', top: '30%' },
    // ...เพิ่มตำแหน่งดาวตามต้องการ
  ];

  return (
    <section 
      id="home" 
      className="relative pt-28 pb-20 md:pt-32 md:pb-24 bg-gradient-to-r from-zinc-900 via-zinc-800 to-neutral-800 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-200/10 via-transparent to-transparent">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-amber-300/20 dark:text-amber-200/10"
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

        {/* Add shooting stars */}
        {shootingStars.map((star, index) => (
          <motion.div
            key={`star-${index}`}
            className="absolute h-[1.5px] w-40 bg-gradient-to-r from-transparent via-amber-200 to-transparent"
            initial={{ 
              x: -100,
              y: -100,
              opacity: 0,
              rotate: 35
            }}
            animate={{
              x: ['0%', '250%'],
              y: ['0%', '250%'],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              repeatDelay: 12,
              ease: "linear"
            }}
            style={{
              left: star.left,
              top: star.top,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 4px rgba(251, 191, 36, 0.3)'
            }}
          />
        ))}

        {/* Add twinkling stars */}
        {twinkling.map((star, index) => (
          <motion.div
            key={`twinkle-${index}`}
            className="absolute h-1 w-1 rounded-full bg-amber-200"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: star.left,
              top: star.top,
              boxShadow: '0 0 4px rgba(251, 191, 36, 0.5)',
            }}
          />
        ))}
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/10 dark:bg-amber-400/20 blur-[120px] rounded-full"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
              <span className="inline-block mr-1">✨</span> Suankularb
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-6 glow-text">
              ปริพัฒน์ รอดหยู่ 
              <br />
              <span className="text-amber-400 glow-text">
                {'< '}Developer{' />'}
              </span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0">
              มุ่งมั่นสร้างสรรค์นวัตกรรมด้วยโค้ดและความคิดสร้างสรรค์ นักเรียนแผนการเรียนวิทย์-คณิตผู้หลงใหลในโลกแห่งการพัฒนาซอฟต์แวร์
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Button
                onClick={() => scrollToSection("#project")}
                className="relative btn-tech px-8 py-3 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 
                text-zinc-900 hover:bg-amber-300 rounded-md transition-all font-medium text-center
                bg-[length:200%_100%] animate-gradient overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  สำรวจผลงาน
                  <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </Button>
              <Button
                onClick={() => scrollToSection("#footer")}
                variant="outline" 
                className="px-8 py-3 border-2 border-amber-400/80 text-amber-400 bg-zinc-900/50 hover:bg-zinc-800/50 
                rounded-md transition-all font-medium text-center shadow-lg backdrop-blur-sm"
              >
                ติดต่อ
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
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src="https://cdn.discordapp.com/attachments/1339424853886767185/1374400570483277954/IMG_8337.jpg?ex=682de9c7&is=682c9847&hm=301843ef6e22fe1172762d9d230ebc1f6fa5728d5a44d9667179e70c475f5e16&" 
                alt="Paripat Rodyoo" 
                className="relative rounded-lg shadow-2xl border border-white/10 dark:border-white/5 z-10 transition-transform duration-300 hover:scale-[1.02]" 
              />
              
              {/* 3D Elements */}
              <motion.div 
                className="absolute -right-8 -top-8 w-16 h-16 bg-amber-400/90 rounded-xl shadow-lg z-20 flex items-center justify-center text-zinc-900"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Cpu className="h-8 w-8" />
              </motion.div>
              
              <motion.div 
                className="absolute -left-5 -bottom-5 w-12 h-12 bg-amber-500/90 rounded-full shadow-lg z-20 flex items-center justify-center text-zinc-900"
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

      {/* เพิ่มพื้นหลังเคลื่อนไหว */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0px 0px', '100px 100px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.1) 2px, transparent 0)',
          backgroundSize: '50px 50px',
        }}
      />
    </section>
  );
}
