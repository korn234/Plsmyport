import { ChartLine, Cog, ShieldAlert, Cpu, LineChart, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

// Move interfaces to the top
interface SkillItem {
	icon: ReactNode;
	title: string;
	description: string[];
	color: string;
}

interface SkillGroup {
	title: string;
	items: SkillItem[];
}

interface SkillGroups {
	[key: string]: SkillGroup;
}

interface Star {
	id: number;
	startX: number;
	startY: number;
	endX: number;
	endY: number;
	duration: number;
}

interface Dot {
	x: number;
	y: number;
	size: number;
}

interface Position {
	x: number;
	y: number;
}

// Add createStar function type
const createStar = (): Star => ({
	id: Math.random(),
	startX: Math.random() * window.innerWidth,
	startY: 0,
	endX: Math.random() * window.innerWidth,
	endY: window.innerHeight,
	duration: 2 + Math.random() * 3,
});

const skillGroups: SkillGroups = {
	technical: {
		title: "ทักษะทางเทคนิค",
		items: [
			{
				icon: <LineChart className="h-10 w-10" />,
				title: "Programming Languages",
				description: [
					"Python",
					"JavaScript",
					"TypeScript",
					"C++",
					"Java",
					"HTML",
					"CSS",
					"SQL",
					"PHP",
				],
				color: "from-blue-500 to-cyan-400",
			},
			{
				icon: <Cpu className="h-10 w-10" />,
				title: "Frameworks & Libraries",
				description: [
					"React",
					"Next.js",
					"Node.js",
					"Express.js",
					"Flask",
					"Tailwind",
					"Flutter",
				],
				color: "from-purple-500 to-indigo-500",
			},
		],
	},
	tools: {
		title: "เครื่องมือและเทคโนโลยี",
		items: [
			{
				icon: <Lock className="h-10 w-10" />,
				title: "Development Tools",
				description: [
					"Git",
					"VS Code",
					"Postman",
					"MongoDB",
					"MySQL",
					"Figma",
					"Canva",
				],
				color: "from-amber-500 to-red-500",
			},
		],
	},
};

// Add this CSS in your global styles or as a style tag
const pixelArtStyles = `
  .pixel-character {
    width: 32px;
    height: 32px;
    background: url('/pixel-character.png') no-repeat; /* Add your pixel character sprite */
    image-rendering: pixelated;
    animation: walk 0.8s steps(4) infinite;
  }

  @keyframes walk {
    from { background-position: 0px; }
    to { background-position: -128px; }
  }

  .shooting-star {
    position: absolute;
    width: 4px;
    height: 4px;
    background: #fbbf24;
    border-radius: 50%;
    filter: blur(1px);
  }

  .pixel-dot {
    position: absolute;
    width: 2px;
    height: 2px;
    background: rgba(251, 191, 36, 0.2);
  }
`;

// Add this component for the animated background
const AnimatedBackground = () => {
	const [stars, setStars] = useState<Star[]>([]);
	const [dots, setDots] = useState<Dot[]>([]);
	const [characterPos, setCharacterPos] = useState<Position>({ x: -50, y: 50 });

	useEffect(() => {
		const starInterval = setInterval(() => {
			const newStar = createStar();
			setStars((prev) => [...prev, newStar]);
			setTimeout(() => {
				setStars((prev) => prev.filter((s) => s.id !== newStar.id));
			}, newStar.duration * 1000);
		}, 2000);

		const createDots = () => {
			const newDots: Dot[] = Array.from({ length: 50 }, () => ({
				x: Math.random() * 100,
				y: Math.random() * 100,
				size: Math.random() * 3,
			}));
			setDots(newDots);
		};

		// Animate character
		const walkInterval = setInterval(() => {
			setCharacterPos((prev) => ({
				x: prev.x > window.innerWidth ? -50 : prev.x + 2,
				y: 50 + Math.sin(prev.x * 0.02) * 10,
			}));
		}, 50);

		createDots();

		return () => {
			clearInterval(starInterval);
			clearInterval(walkInterval);
		};
	}, []);

	return (
		<div className="absolute inset-0 overflow-hidden">
			{/* Pixel Character */}
			<motion.div
				className="pixel-character absolute"
				animate={{ x: characterPos.x, y: characterPos.y }}
				transition={{ type: "linear" }}
			/>

			{/* Shooting Stars */}
			<AnimatePresence>
				{stars.map((star) => (
					<motion.div
						key={star.id}
						className="shooting-star"
						initial={{ x: star.startX, y: star.startY, opacity: 0 }}
						animate={{ x: star.endX, y: star.endY, opacity: [0, 1, 0] }}
						exit={{ opacity: 0 }}
						transition={{ duration: star.duration, ease: "linear" }}
					/>
				))}
			</AnimatePresence>

			{/* Background Dots */}
			{dots.map((dot, i) => (
				<motion.div
					key={i}
					className="pixel-dot"
					style={{
						left: `${dot.x}%`,
						top: `${dot.y}%`,
						width: `${dot.size}px`,
						height: `${dot.size}px`,
					}}
					animate={{
						opacity: [0.2, 0.5, 0.2],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						delay: i * 0.1,
					}}
				/>
			))}
		</div>
	);
};

export default function AboutMeSection() {
	return (
		<section
			id="about"
			className="relative py-24 bg-gradient-to-r from-zinc-900 via-zinc-800 to-neutral-800 overflow-hidden"
		>
			<style>{pixelArtStyles}</style>
			<AnimatedBackground />

			{/* Background Effects */}
			<div className="absolute inset-0">
				<div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[150px] rounded-full" />
				<div className="absolute top-0 right-1/4 translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[150px] rounded-full" />
			</div>

			<div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
				{/* Header Section */}
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<div className="inline-block mb-4">
						<div className="flex items-center justify-center w-16 h-16 mx-auto bg-amber-400/10 rounded-2xl backdrop-blur-sm">
							<Cog className="h-8 w-8 text-amber-400" />
						</div>
					</div>

					<h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
						เกี่ยวกับผม & ทักษะ
					</h2>

					<p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
						นักพัฒนาและต้องการเรียนรู้และสร้างสรรค์สิ่งใหม่ๆ
						<br />
						สวัสดีครับ ผมชื่อ ปริพัฒน์ รอดหยู่ อายุ 15 ปี ปัจจุบันกำลังศึกษาในแผนการเรียนวิทยาศาสตร์ - คณิตศาสตร์
						ที่โรงเรียนสวนกุหลาบวิทยาลัย ผมมีความใฝ่ฝันที่จะเป็นโปรแกรมเมอร์ที่มีความสามารถหลากหลาย
						สามารถสร้างสรรค์เทคโนโลยีที่เข้ามาช่วยแก้ปัญหาและพัฒนาชีวิตของผู้คนให้ดีขึ้น
					</p>
				</motion.div>

				{/* Skills Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{Object.entries(skillGroups).map(([key, group]) => (
						<motion.div
							key={key}
							className="space-y-8"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<h3 className="text-2xl font-semibold text-amber-400 mb-6">
								{group.title}
							</h3>

							<div className="grid gap-6">
								{group.items.map((item, index) => (
									<motion.div
										key={index}
										className="p-6 bg-zinc-800/50 backdrop-blur-sm border border-white/5 rounded-lg relative overflow-hidden"
										whileHover={{
											y: -5,
											transition: { duration: 0.3 },
										}}
									>
										{/* Card Content */}
										<div className="relative flex items-start gap-6">
											{/* Icon */}
											<div className="flex-shrink-0">
												<div className="p-3 bg-zinc-900 rounded-xl border border-white/5">
													<div className="text-amber-400">
														{item.icon}
													</div>
												</div>
											</div>

											{/* Text Content */}
											<div className="flex-1">
												<h4 className="text-lg font-semibold text-white mb-3">
													{item.title}
												</h4>
												<div className="flex flex-wrap gap-2">
													{item.description.map((skill, idx) => (
														<span
															key={idx}
															className="px-3 py-1 bg-amber-400/10 text-amber-400 text-sm rounded-full"
														>
															{skill}
														</span>
													))}
												</div>
											</div>
										</div>

										{/* Decorative Elements */}
										<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-amber-400/10 to-amber-600/10 blur-sm -mt-10 -ml-10 rounded-full" />
										<div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-transparent to-amber-400/10" />
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Background Pattern */}
			<motion.div
				className="absolute inset-0 opacity-20"
				animate={{
					backgroundPosition: ["0px 0px", "100px 100px"],
				}}
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
		</section>
	);
}