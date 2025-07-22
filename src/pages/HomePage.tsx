//import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";

import { CertificatesGrid } from "../components/certificates/CertificatesGrid";
import { ProjectsGrid } from "../components/projects/ProjectsGrid";
import { useDocumentTitle } from "../hooks/index";

// ---------------------------
const HomePage = () => {
	useDocumentTitle("Home");

	//const navigate = useNavigate();

	return (
		<main className="min-h-screen p-10 bg-gradient-to-b from-slate-900 to-slate-800">
			<section className="max-w-7xl mx-auto space-y-20 my-20">
				<div>
					<ProjectsGrid />
				</div>

				<div>
					<CertificatesGrid />
				</div>
			</section>
		</main>
	);
};

export default HomePage;
