import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote, MessageSquareQuote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";

const testimonials = [
  {
    quote: "TechCorp's 3D digital transformation helped us modernize our entire operation. We've seen a 35% increase in efficiency and our customers love the immersive digital experience.",
    author: "Sarah Johnson",
    role: "CTO, Acme Innovations",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    color: "from-blue-500 to-cyan-400"
  },
  {
    quote: "The 3D business intelligence platform TechCorp implemented has transformed how we visualize data and make decisions. These multidimensional insights have been game-changing for our planning.",
    author: "Michael Chang",
    role: "CEO, DataFirst Inc.",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    color: "from-purple-500 to-indigo-400"
  },
  {
    quote: "Security was our biggest concern when moving to the cloud. TechCorp's 3D cybersecurity monitoring gave us peace of mind with a visual threat landscape we could actually understand.",
    author: "Jennifer Rodriguez",
    role: "CISO, Global Financial",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    color: "from-amber-500 to-orange-400"
  },
  {
    quote: "The immersive 3D data visualization TechCorp built for our research team has completely changed how we analyze complex datasets and discover new insights in our field.",
    author: "David Wilson",
    role: "Research Director, ScienceTech",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    color: "from-green-500 to-teal-400"
  }
];

export default function TestimonialsSection() {
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
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
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
    <section id="testimonials" className="relative py-24 bg-gray-50 dark:bg-secondary/10 tech-grid-bg overflow-hidden">
      {/* Tech grid overlay with gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-transparent to-gray-50/80 dark:from-secondary/10 dark:to-secondary/10 z-10"></div>
      
      {/* 3D Glowing effects */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 blur-[120px] rounded-full"></div>
      
      <div className="container relative z-20 mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary/10 dark:bg-primary/20 backdrop-blur-sm">
              <MessageSquareQuote className="h-8 w-8 text-primary dark:text-primary/90" />
            </div>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-secondary dark:text-white mb-4 dark:glow-text">
            Client Success Stories
          </h2>
          <p className="text-gray-dark dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Hear how our 3D technology solutions have transformed businesses across industries.
          </p>
        </motion.div>
        
        <div id="testimonial-slider" className="relative mx-auto max-w-6xl" ref={sliderRef}>
          <div className="testimonial-container overflow-hidden">
            <div 
              id="testimonial-track" 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * slideWidth}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`testimonial-slide w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4`}
                  style={{ width: `${slideWidth}%` }}
                >
                  <motion.div 
                    className="card-3d h-full bg-white/90 dark:bg-secondary/20 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      y: -10, 
                      rotateY: 5, 
                      rotateX: 2, 
                      transition: { duration: 0.3 } 
                    }}
                  >
                    {/* Tech accent line at top */}
                    <div className={`h-1.5 w-full bg-gradient-to-r ${testimonial.color}`}></div>
                    
                    <div className="p-8 relative">
                      {/* Floating quote icon */}
                      <div className="absolute top-3 right-3 text-gray-200 dark:text-gray-700 opacity-30">
                        <Quote className="h-12 w-12" strokeWidth={1} />
                      </div>
                      
                      {/* Rating stars */}
                      <div className="flex items-center mb-4 relative z-10">
                        <div className={`text-primary dark:text-accent flex bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent`}>
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-current" />
                          ))}
                        </div>
                      </div>
                      
                      {/* Quote text with 3D depth shadow */}
                      <div className="relative mb-8">
                        <p className="text-gray-700 dark:text-gray-200 leading-relaxed relative z-10">
                          "{testimonial.quote}"
                        </p>
                        <div className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-primary/30 to-transparent dark:from-accent/30"></div>
                      </div>
                      
                      {/* Author info with 3D card effect */}
                      <div className="flex items-center">
                        <div className="relative mr-4">
                          <div className={`absolute -inset-1 bg-gradient-to-br ${testimonial.color} rounded-full blur-sm opacity-70`}></div>
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author} 
                            className="relative w-14 h-14 rounded-full object-cover border-2 border-white dark:border-gray-800"
                          />
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-secondary dark:text-white">{testimonial.author}</h4>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      {/* Tech corner accent */}
                      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-transparent to-primary/5 dark:to-accent/10"></div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation controls with 3D tech style */}
          <div className="flex items-center justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 z-30 px-2">
            <Button
              id="prev-testimonial"
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-10 h-10 bg-white/80 dark:bg-secondary/50 backdrop-blur-sm rounded-full shadow-lg text-primary hover:text-accent focus:outline-none border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-accent/50 transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              id="next-testimonial"
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-10 h-10 bg-white/80 dark:bg-secondary/50 backdrop-blur-sm rounded-full shadow-lg text-primary hover:text-accent focus:outline-none border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-accent/50 transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Tech-styled indicators */}
        <div className="flex justify-center mt-10">
          <div className="testimonial-dots flex space-x-3 p-2 bg-white/30 dark:bg-secondary/30 backdrop-blur-sm rounded-full shadow-sm">
            {testimonials.map((_, index) => (
              <motion.button 
                key={index}
                className={`testimonial-dot w-3 h-3 rounded-full focus:outline-none transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-primary dark:bg-accent scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to slide ${index + 1}`}
              ></motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
