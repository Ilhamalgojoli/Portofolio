import { Icon } from "@iconify/react";
import { MyCertificate } from "../data/my_data";

export default function Achievment() {
    return (
        <div className="h-full overflow-y-auto scrollbar-hide p-1 sm:p-3">
            <div className="rounded-2xl border border-[#4A4545] bg-[#1D1B1B] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.2)] sm:p-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {MyCertificate.map((certificate, index) => (
                        <article 
                            key={certificate.id} 
                            style={{ animationFillMode: "both", animationDelay: `${index * 150}ms` }}
                            className="group flex min-h-[300px] flex-col overflow-hidden rounded-xl border border-[#4A4545] bg-[#1A1818] transition-all duration-500 hover:-translate-y-2 hover:border-[#D6B36A]/60 hover:shadow-[0_20px_40px_rgba(214,179,106,0.1)]"
                        >
                            <div className="relative aspect-[1.414/1] overflow-hidden bg-[#242222]">
                                <img
                                    src={certificate.image}
                                    alt={`Certificate: ${certificate.name}`}
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1818] via-transparent to-transparent opacity-80" />
                                <span className="absolute bottom-3 left-3 rounded-full border border-[#D6B36A]/40 bg-[#181717]/90 px-3 py-1 font-mono text-[9px] text-[#D6B36A] backdrop-blur-sm transition-colors duration-300 group-hover:border-[#D6B36A] group-hover:bg-[#D6B36A]/20">
                                    CERTIFICATE
                                </span>
                                <a
                                    href={certificate.file}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`Preview certificate: ${certificate.name}`}
                                    className="absolute right-3 top-3 flex items-center gap-2 rounded-md border border-white/30 bg-black/75 px-3 py-1.5 font-mono text-xs text-white shadow-lg backdrop-blur transition-colors hover:border-[#D6B36A] hover:bg-black"
                                >
                                    <Icon icon="pixelarticons:eye" className="size-4" />
                                    Preview
                                </a>
                            </div>
                            <div className="flex flex-1 flex-col gap-3 p-4">
                                <div>
                                    <h2 className="line-clamp-2 text-xs font-semibold leading-relaxed text-white transition-colors duration-300 group-hover:text-[#D6B36A] sm:text-sm">{certificate.name}</h2>
                                    <div className="mt-2 flex flex-wrap items-center justify-between gap-2 font-mono text-[9px] text-[#A8A3A3] sm:text-[10px]">
                                        <span className="rounded bg-[#2A2828] px-2 py-0.5 text-[#D6B36A]">{certificate.issuer}</span>
                                        <time dateTime={certificate.date} className="flex items-center gap-1">
                                            {/^\d{4}$/.test(certificate.date)
                                                ? certificate.date
                                                : new Date(`${certificate.date}T00:00:00`).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                        </time>
                                    </div>
                                </div>
                                <p className="line-clamp-3 text-[10px] leading-relaxed text-gray-400 sm:text-xs">{certificate.description}</p>
                                <div className="mt-auto border-t border-[#4A4545] pt-3 font-mono text-[9px] text-[#777272] transition-colors duration-300 group-hover:text-[#A8A3A3]">
                                    ID <span className="mx-1 text-[#4A4545]">/</span> {certificate.credential}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}