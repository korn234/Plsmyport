import { Link } from "wouter";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Box, 
  MapPin, 
  Phone, 
  Mail 
} from "lucide-react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer id="footer" className="bg-gradient-to-b from-secondary to-secondary/95 text-white py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative h-8 w-8">
                <img
                  src="https://cdn.discordapp.com/attachments/1339424853886767185/1374448479585173504/Sk-logo.png?ex=682e1665&is=682cc4e5&hm=a1c6513f2f1e0d03a313150f40c6a56c799b1fa7c1559478f85363e84f68046e&" 
                  alt="Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="font-heading font-bold text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Potter
              </span>
            </div>
            <p className="text-gray-300/90 text-lg">
              Portfolio
            </p>
            <div className="flex space-x-5 pt-2">
              <a href="https://x.com/mangomonkey01?s=21" 
                className="text-gray-300 hover:text-primary transform hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/paripat.rodyoo.2025" 
                className="text-gray-300 hover:text-primary transform hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/potter.x09/" 
                className="text-gray-300 hover:text-primary transform hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="font-heading font-semibold text-xl mb-8 text-primary">
              ช่องทางการติดต่อ
            </h4>
            <ul className="flex flex-wrap gap-8">
              <li className="flex items-start group min-w-[250px]">
                <MapPin className="h-6 w-6 text-primary mr-4 mt-1 group-hover:text-accent transition-colors" />
                <span className="text-gray-300/90 group-hover:text-white transition-colors">
                  สวนกุหลาบวิทยาลัย
                </span>
              </li>
              <li className="flex items-center group min-w-[200px]">
                <Phone className="h-6 w-6 text-primary mr-4 group-hover:text-accent transition-colors" />
                <span className="text-gray-300/90 group-hover:text-white transition-colors">
                  080-781-8346
                </span>
              </li>
              <li className="flex items-center group min-w-[250px]">
                <Mail className="h-6 w-6 text-primary mr-4 group-hover:text-accent transition-colors" />
                <span className="text-gray-300/90 group-hover:text-white transition-colors">
                  paripat1.rod@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700/50 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-300/75 mb-4 md:mb-0 hover:text-white transition-colors">
            &copy; {currentYear} ปริพัฒน์ รอดหยู่. สงวนลิขสิทธิ์.
          </p>
        </div>
      </div>
    </footer>
  );
}
