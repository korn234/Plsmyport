import { ArrowRight, ArrowUpRight, CircuitBoard, Network, Server, Lock, FileCode, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/constants";

// Add extra fields to enhance our services
const enhancedServices = [
	{
		...services[0],
		icon: <CircuitBoard className="h-6 w-6" />,
		iconBg: "bg-amber-500/90",
		accentColor: "from-amber-500 to-amber-400",
		title: "เป้าหมายในอนาคต",
		highlight: "จุฬาลงกรณ์มหาวิทยาลัย คณะวิศวกรรมคอมพิวเตอร์และเทคโนโลยี (CEDT)",
		description: "พ.ศ.2571",
	},
	{
		...services[1],
		icon: <LineChart className="h-6 w-6" />,
		iconBg: "bg-amber-500/90",
		accentColor: "from-amber-500 to-amber-400",
		title: "มัธยมศึกษาตอนปลาย",
		highlight: "โรงเรียนสวนกุหลาบวิทยาลัย (วิทย์-คณิต)",
		description: "ปัจจุบัน",
	},
	{
		...services[2],
		icon: <Server className="h-6 w-6" />,
		iconBg: "bg-amber-500/90",
		accentColor: "from-amber-500 to-amber-400",
		title: "มัธยมศึกษาตอนต้น",
		highlight: "โรงเรียนสวนกุหลาบวิทยาลัย",
		description: "พ.ศ.2565-2568",
	},
	{
		...services[3],
		icon: <Lock className="h-6 w-6" />,
		iconBg: "bg-amber-500/90",
		accentColor: "from-amber-500 to-amber-400",
		title: "ประถมศึกษาตอนปลาย",
		highlight: "โรงเรียนอัสสัมชัญ แผนกประถม",
		description: "พ.ศ.2562-2565",
	},
	{
		...services[4],
		icon: <FileCode className="h-6 w-6" />,
		iconBg: "bg-amber-500/90",
		accentColor: "from-amber-500 to-amber-400",
		title: "ประถมศึกษาตอนต้น",
		highlight: "โรงเรียนอัสสัมชัญ แผนกประถม",
		description: "พ.ศ.2559-2562",
	},
	{
		...services[5],
		icon: <Network className="h-6 w-6" />,
		iconBg: "bg-amber-500/90",
		accentColor: "from-amber-500 to-amber-400",
		title: "อนุบาล",
		highlight: "โรงเรียนอนุบาลโรจน์จิราภา",
		description: "พ.ศ.2556-2559",
	},
];

const FloatingParticle = ({
	delay,
	style,
}: {
	delay: number;
	style?: React.CSSProperties;
}) => (
	<motion.div
		className="absolute w-2 h-2 bg-amber-400/20 rounded-full"
		style={style}
		animate={{
			y: [0, -30, 0],
			opacity: [0, 1, 0],
			scale: [0, 1.2, 0],
		}}
		transition={{
			duration: 3,
			delay: delay,
			repeat: Infinity,
			ease: "easeInOut",
		}}
	/>
);

export default function ServicesSection() {
	return (
		<section
			id="services"
			className="relative py-16 md:py-32 bg-gradient-to-r from-zinc-900 via-zinc-800 to-neutral-800 overflow-hidden"
		>
			{/* Enhanced background effects */}
			<div className="absolute inset-0">
				{/* Animated gradient orbs */}
				<div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[180px] rounded-full animate-pulse"></div>
				<div className="absolute top-0 right-1/4 translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[180px] rounded-full animate-pulse delay-1000"></div>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/3 blur-[100px] rounded-full animate-pulse delay-500"></div>

				{/* Floating particles */}
				{[...Array(20)].map((_, i) => (
					<FloatingParticle
						key={i}
						delay={i * 0.2}
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
					/>
				))}

				{/* Animated gradient mesh */}
				<div className="absolute inset-0 opacity-30 mix-blend-soft-light">
					<motion.div
						className="w-full h-full"
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
							backgroundImage: `
                radial-gradient(circle at 10% 10%, rgba(251, 191, 36, 0.1) 0%, transparent 20%),
                radial-gradient(circle at 90% 90%, rgba(251, 191, 36, 0.1) 0%, transparent 20%),
                radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.05) 0%, transparent 50%)
              `,
							backgroundSize: '100% 100%',
						}}
					/>
				</div>
			</div>

			{/* Add subtle scanlines effect */}
			<div
				className="absolute inset-0 pointer-events-none opacity-[0.02]"
				style={{
					backgroundImage: 'linear-gradient(0deg, transparent 50%, #000 50%)',
					backgroundSize: '100% 4px',
				}}
			/>

			<div className="container relative z-20 mx-auto px-4 md:px-6">
				{/* Adjusted Header for mobile */}
				<motion.div
					className="text-center mb-12 md:mb-20"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<motion.div className="inline-block mb-4 md:mb-6">
						<div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl backdrop-blur-sm border border-amber-500/10">
							<Server className="h-8 w-8 md:h-10 md:w-10 text-amber-400" />
						</div>
					</motion.div>
					<h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 mb-3 md:mb-4">
						เส้นทางการศึกษา
					</h2>
					<p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-4">
						การเดินทางแห่งการเรียนรู้และพัฒนาตนเอง
					</p>
				</motion.div>

				{/* Adjusted Timeline for mobile */}
				<div className="relative">
					{/* Timeline Center Line */}
					<div className="absolute left-4 md:left-1/2 top-0 bottom-0 transform md:-translate-x-1/2 w-0.5">
						<div className="h-full bg-gradient-to-b from-amber-400/50 via-amber-500/50 to-amber-600/50 animate-pulse"></div>
					</div>

					{/* Timeline Items */}
					{enhancedServices.map((service, index) => (
						<motion.div
							key={index}
							className="relative flex flex-col md:flex-row items-start md:items-center mb-12 md:mb-20"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: index * 0.2 }}
						>
							{/* Adjusted Timeline Dot */}
							<div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-6 md:top-auto">
								<motion.div
									className="relative"
									whileHover={{ scale: 1.2 }}
									transition={{ type: "spring", stiffness: 400 }}
								>
									<div className="absolute -inset-3 bg-amber-400/20 rounded-full blur-md animate-pulse"></div>
									<div className="absolute -inset-2 bg-gradient-to-br from-amber-400/30 to-amber-600/30 rounded-full"></div>
									<div className="relative w-4 h-4 md:w-5 md:h-5 bg-amber-400 rounded-full border-4 border-zinc-900"></div>
								</motion.div>
							</div>

							{/* Adjusted Content Layout */}
							<div className={`w-full md:w-5/12 ${
								index % 2 === 0
									? 'ml-12 md:ml-0 md:pr-16'
									: 'ml-12 md:ml-auto md:pl-16'
							}`}>
								<TimelineCard service={service} direction={index % 2 === 0 ? "left" : "right"} index={index} />
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Enhanced dot pattern */}
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
					backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.1) 2px, transparent 0),
            radial-gradient(circle at 50px 50px, rgba(251, 191, 36, 0.05) 4px, transparent 0)
          `,
					backgroundSize: '50px 50px, 100px 100px',
				}}
			/>
		</section>
	);
}

// Adjusted TimelineCard component
interface TimelineCardProps {
  service: {
    icon: React.ReactNode;
    title: string;
    highlight: string;
    description: string;
  };
  direction: "left" | "right";
  index: number;
}

function TimelineCard({ service, direction, index }: TimelineCardProps) {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative p-4 md:p-6 bg-zinc-800/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-amber-500/50 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="relative flex flex-col space-y-3 md:space-y-4">
        <div className="flex items-center gap-3">
          <motion.div
            className="p-2 md:p-3 bg-gradient-to-br from-amber-400/10 to-amber-600/10 rounded-lg border border-amber-500/10"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {service.icon}
          </motion.div>
          <h3 className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400">
            {service.title}
          </h3>
        </div>
        <div className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-amber-400/10 to-amber-600/10 rounded-lg border border-amber-500/10 w-fit">
          <p className="text-amber-400/90 text-xs md:text-sm font-medium">
            {service.highlight}
          </p>
        </div>
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
          {service.description}
        </p>
      </div>

      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-amber-400/10 to-transparent rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
}
