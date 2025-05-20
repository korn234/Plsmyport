import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MessageSquareQuote,
} from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

const testimonials = [
  {
    image:
      "https://media.discordapp.net/attachments/1339424853886767185/1374427087540326451/image.png?ex=682e0279&is=682cb0f9&hm=f1c0200623147c6d205a040aac0e957053025b17e0d3d8682814703495eec181&=&format=webp&quality=lossless&width=966&height=505",
    title: "DoDEE BOT",
    description:
      "บอทช่วยเหลือผู้ใช้ Discord ในการขายสินค้าภายใน Discord",
    tools: "Python, Json",
    link: "https://github.com/korn234/sell_bot/tree/main",
    color: "from-blue-500 to-cyan-400",
  },
  // เพิ่มผลงานอื่นๆ ที่นี่
];

export default function ProjectsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setSliderWidth(sliderRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleSlides = () => {
    if (isMobile) return 1;
    if (sliderWidth < 1024) return 2;
    return 3;
  };

  const visibleSlides = getVisibleSlides();
  const slideWidth = 100 / visibleSlides;

  return (
    <section
      id="project"
      className="relative py-24 bg-gradient-to-r from-zinc-900 via-zinc-800 to-neutral-800 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[180px] rounded-full animate-pulse"></div>
        <div className="absolute top-0 right-1/4 translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[180px] rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/3 blur-[100px] rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-amber-400/10 rounded-2xl backdrop-blur-sm">
              <MessageSquareQuote className="h-8 w-8 text-amber-400" />
            </div>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 mb-4">
            ผลงานของฉัน
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            รวมผลงานที่ผ่านมาและกำลังพัฒนา
          </p>
        </motion.div>

        <div
          id="testimonial-slider"
          className="relative mx-auto max-w-6xl"
          ref={sliderRef}
        >
          <div className="testimonial-container overflow-hidden">
            <div
              id="testimonial-track"
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * slideWidth}%)`,
              }}
            >
              {testimonials.map((project, index) => (
                <div
                  key={index}
                  className="testimonial-slide w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                  style={{ width: `${slideWidth}%` }}
                >
                  <motion.div
                    className="card-3d h-full bg-zinc-900/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      y: -10,
                      rotateY: 5,
                      rotateX: 2,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-20`}
                      ></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                    </div>

                    <div className="p-6 relative">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tools.split(", ").map((tool, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${project.color} bg-opacity-10 text-white`}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => window.open(project.link, '_blank')}
                        className={`
                          inline-flex items-center justify-center
                          w-full px-4 py-2 mt-4
                          bg-gradient-to-r ${project.color}
                          text-white font-medium
                          rounded-lg shadow-lg
                          hover:shadow-xl hover:scale-105
                          transition-all duration-300
                          border border-white/10
                          cursor-pointer
                          relative z-10
                        `}
                      >
                        <span className="relative z-10">ดูโปรเจกต์</span>
                        <ChevronRight className="w-5 h-5 ml-2 relative z-10" />
                      </button>

                      <div
                        className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-transparent ${project.color} opacity-10`}
                      ></div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 z-30 px-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-zinc-800/50 backdrop-blur-sm rounded-full shadow-lg text-amber-400 hover:text-amber-300 border border-amber-500/20 hover:border-amber-500/50 transition-all"
            >
              <ChevronLeft className="h-5 w-5 mx-auto" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-zinc-800/50 backdrop-blur-sm rounded-full shadow-lg text-amber-400 hover:text-amber-300 border border-amber-500/20 hover:border-amber-500/50 transition-all"
            >
              <ChevronRight className="h-5 w-5 mx-auto" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex space-x-3 p-2 bg-zinc-800/50 backdrop-blur-sm rounded-full">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full focus:outline-none transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-amber-400 scale-125"
                    : "bg-zinc-600 hover:bg-zinc-500"
                }`}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.1) 2px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </section>
  );
}
