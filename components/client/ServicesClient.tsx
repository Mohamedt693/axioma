"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceItem {
    id: string;
    title: string;
    img: string;
    desc: string;
}

interface ServicesClientProps {
    services: ServiceItem[];
}

export default function ServicesClient({ services }: ServicesClientProps) {
    const [expanded, setExpanded] = useState<number | null>(0);

    return (
        <div className="flex flex-col md:flex-row h-full w-full gap-4 pt-15">
            {services.map((service, index) => (
                <motion.div
                key={service.id}
                initial={false}
                animate={{
                    flex: expanded === index ? 4 : 1,
                    filter: expanded === index ? "grayscale(0%)" : "grayscale(100%) opacity(0.5)"
                }}
                onClick={() => setExpanded(index)}
                className="relative h-full cursor-pointer overflow-hidden border border-white/5 group rounded-2xl"
                >
                    <div className="absolute inset-0 bg-zinc-900 z-0">
                        <Image src={service.img} alt={service.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/20 z-10 transition-opacity group-hover:opacity-100" />
                    </div>

                    <div className="relative z-20 h-full flex flex-col justify-between p-6 text-white">
                        <span className="font-mono text-sm text-white/40">{service.id}</span>

                        <div className="flex flex-col">
                            <h2 className={`text-2xl md:text-4xl font-light tracking-tighter transition-all ${
                            expanded === index 
                                ? 'mb-4 text-white' 
                                : 'rotate-180 [writing-mode:vertical-lr] self-center mt-10 text-white/70'
                            }`}>
                                {service.title}
                            </h2>

                            {expanded === index && (
                                <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-white max-w-xs text-sm"
                                >
                                    {service.desc}
                                </motion.p>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}