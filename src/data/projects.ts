import type { Project } from "../types/Project";

export const projects: Project[] = [
	{
		id: 1,
		title: "Hack-a-ton",
		description:
			"Final bootcamp project. A hackathon management platform for both event organizers and developers craving for a challenge.",
		imageUrl: "images/projects/hack-a-ton.png",
		demoUrl: "videos/hackaton-demo.webm",
		projectUrl: "https://github.com/r0dmd/HAB_PFB_HACKATHONS",
		tech: [
			"Figma",
			"yEd Graph Editor",
			"MySQL",
			"Node.js",
			"Express",
			"React",
			"Tailwind CSS",
			"npm",
		],
	},
	{
		id: 2,
		title: "MeteoAlert",
		description:
			"Climate alerts in real time based on custom user preferences. Weather data courtesy of the Open-Meteo API.",
		imageUrl: "images/projects/meteoalert.png",
		demoUrl: "videos/meteoalert-demo.webm",
		projectUrl: "https://github.com/r0dmd/MeteoAlert",
		tech: [
			"MySQL",
			"Node.js",
			"Express",
			"React",
			"Tailwind CSS",
			"npm",
			"Prettier",
		],
	},
	{
		id: 3,
		title: "Inventive",
		description:
			"A digital inventory tracker app, with photo OCR recognition for users' shopping invoices.",
		imageUrl: "images/projects/inventive.png",
		demoUrl: "",
		projectUrl: "https://github.com/r0dmd/inventive-client-react",
		tech: [
			"Tesseract.js",
			"MySQL",
			"Express",
			"TypeScript",
			"React",
			"Tailwind CSS",
			"pnpm",
			"Biome",
		],
	},
	{
		id: 4,
		title: "TuneTray",
		description: "Simple and quick music playlist manager.",
		imageUrl: "images/projects/tunetray.png",
		demoUrl: "videos/tunetray-demo.webm",
		projectUrl: "https://github.com/r0dmd/tunetray",
		tech: [
			"H2",
			"Java",
			"Maven",
			"Spring Boot",
			"pnpm",
			"TypeScript",
			"Angular",
			"Tailwind CSS",
		],
	},
];
