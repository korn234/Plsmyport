import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";

const testimonials = [
  {
    quote: "TechCorp's digital transformation services helped us modernize our entire operation. We've seen a 35% increase in efficiency and our customers love the new digital experience.",
    author: "Sarah Johnson",
    role: "CTO, Acme Innovations"
  },
  {
    quote: "The business intelligence platform TechCorp implemented has transformed how we make decisions. Having real-time insights has been game-changing for our strategic planning.",
    author: "Michael Chang",
    role: "CEO, DataFirst Inc."
  },
  {
    quote: "Security was our biggest concern when moving to the cloud. TechCorp's cybersecurity solutions gave us peace of mind and their team was exceptional throughout the implementation.",
    author: "Jennifer Rodriguez",
    role: "CISO, Global Financial"
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
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50 dark:bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-secondary dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-dark dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. See what our clients have to say about their experience working with TechCorp.
          </p>
        </motion.div>
        
        <div id="testimonial-slider" className="relative" ref={sliderRef}>
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
                  <div className="bg-white dark:bg-secondary/20 p-8 rounded-lg shadow-md h-full">
                    <div className="flex items-center mb-4">
                      <div className="text-primary flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-dark dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 mr-4"></div>
                      <div>
                        <h4 className="font-heading font-semibold text-secondary dark:text-white">{testimonial.author}</h4>
                        <p className="text-gray-dark dark:text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Button
            id="prev-testimonial"
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white dark:bg-secondary/50 rounded-full shadow-md text-primary hover:text-accent focus:outline-none z-10"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            id="next-testimonial"
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white dark:bg-secondary/50 rounded-full shadow-md text-primary hover:text-accent focus:outline-none z-10"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="testimonial-dots flex space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`testimonial-dot w-3 h-3 rounded-full focus:outline-none transition-colors ${
                  currentSlide === index ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
