"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link"; 

const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
    
    const logoVariants: Variants = {
        initial: { 
            scale: 1, x: 0, y: 0, rotate: 0, opacity: 1 
        },
        pressed: { 
            scale: 0.8, 
            opacity: 0.6,
            transition: { type: "spring", stiffness: 500, damping: 15 } 
        }
    };

    return (
        <Link href="/" className="inline-block outline-none"> 
            <motion.svg 
                className={`${className} cursor-pointer outline-none select-none overflow-visible`} 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                initial="initial"
                animate="initial"
                whileHover={{ scale: 1.05 }}
                whileTap="pressed"
            >
                <motion.rect 
                    variants={logoVariants}
                    x="15" y="25" width="25" height="25" rx="5" fill="white" 
                />
                
                <motion.rect 
                    variants={{
                        initial: { x: 0, scale: 1 },
                        pressed: { x: -5, scale: 0.9 } 
                    }}
                    x="15" y="60" width="25" height="15" rx="4" fill="white" 
                />
                
                <motion.rect 
                    variants={{
                        initial: { y: 0, opacity: 1 },
                        pressed: { y: -5, opacity: 0.5 }
                    }}
                    x="50" y="25" width="35" height="10" rx="4" fill="white" 
                />
                
                <motion.rect 
                    variants={{
                        initial: { scale: 1, rotate: 0 },
                        pressed: { scale: 1.1, rotate: 5 }
                    }}
                    x="50" y="45" width="35" height="30" rx="5" fill="white" 
                />
            </motion.svg>
        </Link>
    );
};

export default Logo;