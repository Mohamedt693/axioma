"use client";

import { useState, Suspense } from 'react';
import Image from 'next/image';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, PerspectiveCamera, Html, useProgress } from '@react-three/drei';
import { Model } from '@/components/Building/Model';

import type { Project } from '@/types/project';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

function CanvasLoader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="flex flex-col items-center justify-center bg-black text-white font-light tracking-[0.3em] text-[11px] uppercase">
                <span>Loading Architecture</span>
                <span className="mt-2 text-[#8C8279] text-[10px]">{Math.round(progress)}%</span>
            </div>
        </Html>
    );
}

interface PortfolioClientProps {
    projects: Project[];
}

export default function PortfolioClient({ projects }: PortfolioClientProps) {
    const [selectedModel, setSelectedModel] = useState<string | null>(null);

    return (
        <div className="flex-1 w-full flex items-center px-6 md:px-20 relative">
            <div className="w-full animate-in fade-in duration-500">
                <Swiper
                modules={[FreeMode, Mousewheel, Pagination]}
                spaceBetween={50}
                slidesPerView={'auto'}
                freeMode={true}
                mousewheel={true}
                grabCursor={true}
                className="w-full h-auto py-10"
                >
                    {projects.map((project: Project, index: number) => (
                        <SwiperSlide 
                        key={project._id} 
                        style={{ width: 'auto' }}
                        >
                            <div 
                            onClick={() => setSelectedModel(project.modelPath)}
                            className="w-[85vw] md:w-112.5 group cursor-pointer flex flex-col transition-all duration-700"
                            >
                                <div className="relative w-full h-100 bg-[#E8DFD5] rounded-[2.5rem] overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-700">
                                    <Image
                                    src={project.thumbnail} 
                                    alt={project.title} 
                                    fill
                                    priority={index < 2} 
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-95 group-hover:opacity-100" 
                                    />
                                </div>

                                <div className="mt-8 px-4 flex justify-between items-end">
                                    <div>
                                        <span className="text-[10px] tracking-[0.4em] text-[#8C8279] uppercase block font-bold mb-2">
                                            Case 0{index + 1}
                                        </span>
                                        <h3 className="uppercase text-lg tracking-[0.2em] font-light">{project.title}</h3>
                                    </div>
                                    <span className="text-[9px] tracking-widest uppercase border-b border-[#2C2C2C]/20 pb-1 group-hover:border-[#2C2C2C] transition-colors">
                                        Explore 3D
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {selectedModel && (
                <div className="fixed inset-0 z-100 bg-black flex flex-col animate-in fade-in duration-500">
                    <button 
                    onClick={() => setSelectedModel(null)}
                    className="absolute top-10 right-10 z-110 bg-white text-[#2C2C2C] uppercase text-[10px] tracking-[0.3em] px-10 py-4 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
                    >
                        ← Close
                    </button>

                    <div className="flex-1 w-full h-full cursor-grab active:cursor-grabbing">
                        <Canvas shadows dpr={[1, 2]}>
                            <PerspectiveCamera makeDefault position={[25, 25, 25]} fov={30} />
                            <Suspense fallback={<CanvasLoader />}>
                                <Stage environment="apartment" intensity={0.4} shadows={{ type: 'contact', opacity: 0.1, blur: 4 }}>
                                    <Model modelPath={selectedModel} scale={0.01} />
                                </Stage>
                            </Suspense>
                            <OrbitControls autoRotate autoRotateSpeed={0.4} enableDamping />
                        </Canvas>
                    </div>
                </div>
            )}
        </div>
    );
}