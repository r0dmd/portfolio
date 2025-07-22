import type { Project } from "../../types/Project";

interface ProjectCardProps {
	project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div className="rounded-2xl p-5 bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-md border border-white/10 shadow-lg flex flex-col hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300">
			<img
				src={project.imageUrl}
				alt={project.title}
				className="w-full h-48 object-cover rounded-xl"
			/>
			<h3 className="text-lg font-semibold text-slate-100 mt-4">
				{project.title}
			</h3>
			<p className="text-slate-300 text-sm mt-2 flex-grow">
				{project.description}
			</p>
			<div className="flex flex-wrap gap-2 mt-4">
				{project.tech.map((tech) => (
					<span
						key={tech}
						className="text-xs bg-slate-700/50 text-slate-100 px-3 py-1 rounded-full"
					>
						{tech}
					</span>
				))}
			</div>
			<a
				href={project.projectUrl}
				target="_blank"
				rel="noopener noreferrer"
				className="mt-4 inline-block text-blue-400 hover:text-blue-300 transition"
			>
				View Project →
			</a>
		</div>
	);
}
