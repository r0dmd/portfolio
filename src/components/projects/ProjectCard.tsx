import { FaArrowRight } from "react-icons/fa6";
import type { Project } from "../../types/Project";

interface ProjectCardProps {
	project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div className="rounded-2xl p-5 bg-gradient-to-br from-red-800/60 to-slate-900/40 backdrop-blur-md border border-white/10 shadow-lg flex flex-col hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300">
			<img
				src={`${import.meta.env.BASE_URL}${project.imageUrl}`}
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

			<nav className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-5">
				{project.demoUrl.length !== 0 ? (
					<a
						href={`${import.meta.env.BASE_URL}${project.demoUrl}`}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="resume"
						className="inline-flex items-center gap-x-0.5 text-md font-semibold text-blue-300 hover:bg-amber-300/90 hover:text-slate-900 hover:rounded-full px-2"
					>
						\view_demo
						<FaArrowRight className="h-3" />
					</a>
				) : (
					<p className="inline-flex items-center gap-x-0.5 text-md font-semibold text-slate-500">
						\view_demo
						<FaArrowRight className="h-3" />
					</p>
				)}

				<a
					href={project.projectUrl}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="linkedin profile"
					className="inline-flex items-center gap-x-0.5 text-md font-semibold text-blue-300 hover:bg-amber-300/90 hover:text-slate-900 hover:rounded-full px-2"
				>
					\github
					<FaArrowRight className="h-3" />
				</a>
			</nav>
		</div>
	);
}
