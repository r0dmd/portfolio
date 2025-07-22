import { FaArrowRight } from "react-icons/fa6";

const Header = () => {
	return (
		<header className="fixed top-0 w-full z-50 bg-gradient-to-b from-blue-900/80 to-slate-800/80 backdrop-blur-md border-b border-white/10 shadow-sm">
			<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 sm:px-8 py-3 h-auto">
				<div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
					<h1 className="text-xl font-semibold text-slate-100">\r0dmd</h1>
					<h2 className="text-sm font-semibold text-slate-200">
						\full_stack_dev
					</h2>
				</div>

				<nav className="flex flex-wrap justify-center gap-3 sm:gap-4">
					<a
						href="https://www.linkedin.com/in/rodrigo-md"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="linkedin profile"
						className="inline-flex items-center gap-x-0.5 text-sm font-semibold text-slate-200 hover:bg-amber-300/90 hover:text-slate-900 hover:rounded-full px-2"
					>
						\linkedin
						<FaArrowRight className="h-3" />
					</a>
					<a
						href="/public/cv/CV Rodrigo Masid.pdf"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="resume"
						className="inline-flex items-center gap-x-0.5 text-sm font-semibold text-slate-200 hover:bg-amber-300/90 hover:text-slate-900 hover:rounded-full px-2"
					>
						\view_cv
						<FaArrowRight className="h-3" />
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
