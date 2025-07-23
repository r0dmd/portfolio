import type { Certificate } from "../../types/Certificate";

interface CertificateCardProps {
	certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
	return (
		<div className="rounded-2xl p-5 bg-gradient-to-br from-yellow-600/60 to-slate-900/40 backdrop-blur-md border border-white/10 shadow-lg flex flex-col hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300">
			<img
				src={`${import.meta.env.BASE_URL}${certificate.imageUrl}`}
				alt={certificate.title}
				className="w-full h-48 object-cover rounded-xl opacity-95"
			/>
			<h3 className="text-lg font-semibold text-slate-100 mt-4">
				{certificate.title}
			</h3>
			<div className="flex flex-wrap gap-2 mt-4">
				{certificate.skills.map((skill) => (
					<span
						key={skill}
						className="text-xs bg-slate-700/50 text-slate-100 px-3 py-1 rounded-full"
					>
						{skill}
					</span>
				))}
			</div>
		</div>
	);
}
