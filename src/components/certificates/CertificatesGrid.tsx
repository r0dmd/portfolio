import { certificates } from "../../data/certificates";
import { CertificateCard } from "./CertificateCard";

import { TbCertificate } from "react-icons/tb";

// -----------------
export function CertificatesGrid() {
	return (
		<section className="max-w-7xl mx-auto px-4">
			<h2 className="text-3xl font-bold text-slate-50 mb-6 flex flex-wrap items-center gap-3 sm:gap-4">
				<span>Certificates</span>
				<span className="flex items-center gap-2 text-5xl text-slate-300">
					<TbCertificate />
				</span>
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{certificates.map((certificate) => (
					<CertificateCard key={certificate.id} certificate={certificate} />
				))}
			</div>
		</section>
	);
}
