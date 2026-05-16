"use client";
import { motion } from 'framer-motion';

interface CounterCardProps {
    number: string;
    text: string;
}

export default function CounterCard({ number, text }: CounterCardProps) {
    return (
        <motion.div 
        whileHover={{ y: -5 }}
        className="bg-white/5 backdrop-blur-md border border-white/10 p-7 rounded-[25px] text-white w-72"
        >
            <h3 className="text-4xl font-bold mb-1">{number}</h3>
            <p className="text-[11px] text-gray-300 uppercase tracking-[0.2em] leading-relaxed">{text}</p>
        </motion.div>
    );
}