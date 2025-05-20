import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/components/ui/theme-provider";
import { Box, MenuIcon, XIcon, Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "#home", label: "หน้าแรก" },
  { href: "#about", label: "เกี่ยวกับฉัน" },
  { href: "#services", label: "เส้นทาง" },
  { href: "#project", label: "ผลงาน" },
  { href: "#certificate", label: "เกียรติบัตร" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMobile();
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
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

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className={cn("fixed w-full z-50 transition-all duration-500",
      isScrolled || mobileMenuOpen
        ? "bg-zinc-900/95 shadow-lg backdrop-blur-sm"
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="font-heading font-bold text-xl md:text-2xl text-amber-400">
              {'<'}Paripat_R{'>'}
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-300 hover:text-amber-400 font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-800/50 text-gray-300 hover:bg-zinc-700/50 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-amber-400" />
              ) : (
                <Moon className="h-5 w-5 text-amber-400" />
              )}
            </motion.button>
            
            <Button 
              variant="default" 
              onClick={() => scrollToSection("#footer")} 
              className="px-6 py-2 bg-amber-400 text-zinc-900 hover:bg-amber-300 rounded-md transition-all"
            >
              ติดต่อ
            </Button>
          </div>

          {/* Mobile menu styles */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-800/50 text-gray-300"
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-amber-400" />
              ) : (
                <Moon className="h-5 w-5 text-amber-400" />
              )}
            </motion.button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-amber-400"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <XIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 pb-6"
            >
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-amber-400 font-medium transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: (navLinks.length + 1) * 0.05 }}
                >
                  <Button
                    variant="default"
                    onClick={() => scrollToSection("#footer")}
                    className="mt-2 w-full bg-amber-400 text-zinc-900 hover:bg-amber-300 transition-all"
                  >
                    ติดต่อ
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
