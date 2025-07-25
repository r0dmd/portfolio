//import { NavLink } from "react-router-dom";

// ------------------------------------------
const Footer = () => {
	return (
		<>
			<div className="fixed bottom-10 w-full h-10 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none"></div>
			<footer className="fixed bottom-0 w-full h-10 flex items-center justify-center bg-slate-800/80 backdrop-blur-md border-t border-white/10 shadow-inner">
				<p className="text-slate-100 text-sm">
					© 2025 |{" "}
					<a href="mailto:remd884@mailfence.com">remd884@mailfence.com</a>
				</p>
			</footer>
		</>
	);
};

export default Footer;
