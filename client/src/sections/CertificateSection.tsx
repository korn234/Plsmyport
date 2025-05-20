import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function CertificateSection() {
  return (
    <section id="certificate" className="relative py-24 bg-gradient-to-r from-zinc-900 via-zinc-800 to-neutral-800 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[180px] rounded-full animate-pulse"></div>
        <div className="absolute top-0 right-1/4 translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[180px] rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/3 blur-[100px] rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-amber-400/10 rounded-2xl backdrop-blur-sm">
              <MessageCircle className="h-8 w-8 text-amber-400" />
            </div>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 mb-4">
            เกียรติบัตร
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            ผลงานตั้งแต่ปี 2568 - ?
          </p>
        </motion.div>
      </div>

      {/* Background pattern */}
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
