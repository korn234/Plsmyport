import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
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
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "success",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-secondary dark:text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-dark dark:text-gray-300 max-w-2xl mx-auto">
            Have questions or ready to get started? Reach out to our team today.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row">
          <motion.div 
            className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-dark dark:text-gray-300">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field} 
                            className="w-full px-4 py-3 border border-gray-light dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-dark dark:text-gray-300">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your@email.com" 
                            type="email" 
                            {...field} 
                            className="w-full px-4 py-3 border border-gray-light dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-dark dark:text-gray-300">Company Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Company" 
                          {...field} 
                          className="w-full px-4 py-3 border border-gray-light dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-dark dark:text-gray-300">Service of Interest</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-3 border border-gray-light dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                          <SelectItem value="business-intelligence">Business Intelligence</SelectItem>
                          <SelectItem value="cloud-infrastructure">Cloud Infrastructure</SelectItem>
                          <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                          <SelectItem value="custom-software">Custom Software</SelectItem>
                          <SelectItem value="it-strategy">IT Strategy</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-dark dark:text-gray-300">Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project or needs..." 
                          {...field} 
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-light dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="px-8 py-3 bg-primary text-white rounded-md hover:bg-accent transition-colors font-medium w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-50 dark:bg-secondary/20 p-8 rounded-lg">
              <h3 className="font-heading font-semibold text-2xl mb-6 text-secondary dark:text-white">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1 text-secondary dark:text-white">Office Location</h4>
                    <p className="text-gray-dark dark:text-gray-300">123 Tech Avenue, Suite 400<br />San Francisco, CA 94107</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1 text-secondary dark:text-white">Phone</h4>
                    <p className="text-gray-dark dark:text-gray-300">(415) 555-0123</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1 text-secondary dark:text-white">Email</h4>
                    <p className="text-gray-dark dark:text-gray-300">info@techcorp.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-heading font-semibold mb-4 text-secondary dark:text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
