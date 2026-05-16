"use client";
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

function ConsultationBtn() {
    const pathname = usePathname();
    const isConsultingPage = pathname === '/consulting';

    return (
        <AnimatePresence mode="wait">
            {!isConsultingPage && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link 
                        href='/consulting'
                        className="bg-white text-black pl-6 pr-1.5 py-1.5 rounded-full font-bold flex items-center 
                        gap-4 hover:bg-zinc-100 transition shadow-[0_10px_30px_rgba(255,255,255,0.1)] group"
                    >
                        <span className="text-[11px] uppercase tracking-widest">Consultation</span>
                        <span className="bg-black text-white rounded-full w-9 h-9 flex items-center justify-center 
                        transition-transform duration-500 group-hover:rotate-45">
                            <FiArrowUpRight size={18} />
                        </span>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default ConsultationBtn;