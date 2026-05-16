"use client";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
    { id: 1, title: "Identity" },
    { id: 2, title: "Scope" },
    { id: 3, title: "Vision" },
];

export default function ConsultationLayout({ step, children }: { step: number, children: React.ReactNode }) {
    return (
        <div className="flex flex-col md:flex-row min-h-125 w-full bg-transparent items-stretch">

            <aside className="w-full md:w-64 py-4 md:py-8 flex flex-col justify-start md:justify-center border-b md:border-b-0 md:border-r border-zinc-800/50 mb-8 md:mb-0 md:pr-10">
                <nav className="flex flex-row md:flex-col justify-between md:justify-center gap-4 md:gap-12">
                    {steps.map((s, idx) => (
                        <div key={s.id} className="flex flex-col gap-1 md:gap-2 relative flex-1 md:flex-none">
                            <span className={`text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase transition-colors duration-500 
                            ${idx === step ? "text-white font-bold" : "text-zinc-600"}`}>
                                Step 0{s.id}
                            </span>
                            <p className={`text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase transition-all duration-500 
                            ${idx === step ? "text-white translate-x-0 md:translate-x-2" : "text-zinc-700"}`}>
                                {s.title}
                            </p>
                            {idx === step && (
                                <motion.div 
                                    layoutId="activeLine"
                                    className="absolute left-0 -bottom-2 md:bottom-auto md:-left-6 md:top-0 w-full md:w-px h-0.5 md:h-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                                />
                            )}
                        </div>
                    ))}
                </nav>
            </aside>

            <main className="flex-1 md:pl-20 py-2 md:py-10 w-full flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col justify-center h-full w-full"
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}