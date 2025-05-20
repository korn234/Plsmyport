import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Send, 
  User, 
  AtSign, 
  Building2, 
  MessageCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { services } from "@/lib/constants";

// Updated form schema with more descriptive error messages
const formSchema = z.object({
  name: z.string().min(2, "Please enter your full name (minimum 2 characters)"),
  email: z.string().email("Please enter a valid email address format"),
  company: z.string().min(2, "Please provide your company name"),
  service: z.string().min(1, "Please select a 3D technology service you're interested in"),
  message: z.string().min(10, "Please provide some details about your project or inquiry (minimum 10 characters)"),
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", values);
      toast({
        title: "Message Sent Successfully!",
        description: "Our 3D technology team will get back to you as soon as possible.",
        variant: "success",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Your message couldn't be sent. Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="contact" className="relative py-24 bg-white dark:bg-secondary/5 tech-grid-bg overflow-hidden">
      {/* Tech grid overlay with gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white/60 dark:via-secondary/40 dark:to-secondary/40 z-0"></div>
      
      {/* Glow effects */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-primary/5 dark:bg-primary/10 blur-[130px] rounded-full"></div>
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/5 dark:bg-accent/10 blur-[130px] rounded-full"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary/10 dark:bg-primary/20 rounded-full backdrop-blur-sm">
              <MessageCircle className="h-8 w-8 text-primary dark:text-primary/90" />
            </div>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-secondary dark:text-white mb-4 dark:glow-text">
            Get In Touch With Our 3D Team
          </h2>
          <p className="text-gray-dark dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Have questions about our 3D technology solutions? Let's start a conversation about transforming your business.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-stretch gap-10">
          {/* Contact Form */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-3d h-full bg-white dark:bg-secondary/20 p-8 rounded-xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div variants={itemVariants}>
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-dark dark:text-gray-300 flex items-center">
                              <User className="h-4 w-4 mr-2 text-primary dark:text-accent" />
                              Full Name
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Doe" 
                                {...field} 
                                className="w-full px-4 py-3 bg-gray-50/50 dark:bg-secondary/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-accent transition-all duration-300"
                              />
                            </FormControl>
                            <FormMessage className="text-sm" />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-dark dark:text-gray-300 flex items-center">
                              <AtSign className="h-4 w-4 mr-2 text-primary dark:text-accent" />
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="your@email.com" 
                                type="email" 
                                {...field} 
                                className="w-full px-4 py-3 bg-gray-50/50 dark:bg-secondary/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-accent transition-all duration-300"
                              />
                            </FormControl>
                            <FormMessage className="text-sm" />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-dark dark:text-gray-300 flex items-center">
                            <Building2 className="h-4 w-4 mr-2 text-primary dark:text-accent" />
                            Company Name
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your Company" 
                              {...field} 
                              className="w-full px-4 py-3 bg-gray-50/50 dark:bg-secondary/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-accent transition-all duration-300"
                            />
                          </FormControl>
                          <FormMessage className="text-sm" />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-dark dark:text-gray-300 flex items-center">
                            <Laptop3DIcon className="h-4 w-4 mr-2 text-primary dark:text-accent" />
                            3D Technology Service
                          </FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full px-4 py-3 bg-gray-50/50 dark:bg-secondary/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-accent transition-all duration-300">
                                <SelectValue placeholder="Select a 3D technology service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white dark:bg-secondary border border-gray-200 dark:border-gray-700">
                              {services.map(service => (
                                <SelectItem key={service.id} value={service.id} className="focus:bg-primary/10 dark:focus:bg-accent/10">
                                  {service.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-sm" />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-dark dark:text-gray-300 flex items-center">
                            <MessageCircle className="h-4 w-4 mr-2 text-primary dark:text-accent" />
                            Your Message
                          </FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your 3D technology project or needs..." 
                              {...field} 
                              rows={5}
                              className="w-full px-4 py-3 bg-gray-50/50 dark:bg-secondary/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-accent transition-all duration-300 resize-none"
                            />
                          </FormControl>
                          <FormMessage className="text-sm" />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <Button 
                      type="submit" 
                      className="btn-tech w-full px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 font-medium shadow-lg group relative overflow-hidden"
                      disabled={isSubmitting}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </span>
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </div>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card-3d h-full glass p-8 rounded-xl bg-gradient-to-br from-gray-50/80 to-white/80 dark:from-secondary/30 dark:to-secondary/20 backdrop-blur-md border border-white/20 dark:border-white/5">
              <h3 className="font-heading font-semibold text-2xl mb-8 text-secondary dark:text-white dark:glow-text relative">
                <span className="relative z-10">Connect With Our 3D Tech Team</span>
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-primary dark:bg-accent rounded-full"></div>
              </h3>
              
              <motion.div 
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={itemVariants} className="contact-card">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mr-5">
                      <MapPin className="h-6 w-6 text-primary dark:text-accent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg mb-1 text-secondary dark:text-white">3D Lab & Office</h4>
                      <p className="text-gray-700 dark:text-gray-300">123 Tech Avenue, Suite 400<br />San Francisco, CA 94107</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="contact-card">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mr-5">
                      <Phone className="h-6 w-6 text-primary dark:text-accent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg mb-1 text-secondary dark:text-white">Call Us</h4>
                      <p className="text-gray-700 dark:text-gray-300">Main: (415) 555-0123<br />3D Support: (415) 555-0124</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="contact-card">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mr-5">
                      <Mail className="h-6 w-6 text-primary dark:text-accent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg mb-1 text-secondary dark:text-white">Email Us</h4>
                      <p className="text-gray-700 dark:text-gray-300">info@techcorp.com<br />3d-support@techcorp.com</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="mt-10">
                  <h4 className="font-heading font-semibold text-lg mb-4 text-secondary dark:text-white">Follow Our 3D Technology Updates</h4>
                  <div className="flex space-x-3">
                    <a href="#" className="social-icon-3d">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="social-icon-3d">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="social-icon-3d">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="social-icon-3d">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </motion.div>
                
                {/* Interactive Map Placeholder */}
                <motion.div 
                  variants={itemVariants}
                  className="mt-8 rounded-lg overflow-hidden relative h-[200px] border border-gray-200 dark:border-gray-700"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-10 w-10 text-primary dark:text-accent mx-auto mb-2" />
                      <p className="text-gray-700 dark:text-gray-300">3D Technology Center<br />San Francisco, CA</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Custom 3D Technology Icon
function Laptop3DIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="4" width="18" height="12" rx="2" ry="2"></rect>
      <line x1="2" y1="20" x2="22" y2="20"></line>
      <line x1="12" y1="16" x2="12" y2="20"></line>
      <polyline points="8 10 12 6 16 10"></polyline>
      <line x1="12" y1="6" x2="12" y2="14"></line>
    </svg>
  );
}

// Add this CSS class to index.css (added in style section)
// .social-icon-3d {
//   @apply w-12 h-12 relative flex items-center justify-center text-white rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1;
// }
