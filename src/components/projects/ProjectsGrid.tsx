import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";

import {
	SiSpringboot,
	SiAngular,
	SiTypescript,
	SiReact,
	SiNodedotjs,
	SiMysql,
} from "react-icons/si";
import { LiaJava } from "react-icons/lia";

// ------------------
export function ProjectsGrid() {
	return (
		<section className="max-w-7xl mx-auto px-4">
			<h2 className="text-3xl font-bold text-slate-50 mb-6 flex flex-wrap items-center gap-3 sm:gap-4">
				<span>Projects</span>
				<span className="flex flex-wrap items-center gap-2 text-5xl text-slate-300">
					<LiaJava />
					<SiSpringboot />
					<SiAngular />
					<SiTypescript />
					<SiReact />
					<SiNodedotjs />
					<SiMysql />
				</span>
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</section>
	);
}
