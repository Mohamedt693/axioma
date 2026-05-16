import Image from 'next/image';
import ConsultationBtn from '@/components/Buttons/ConsultationBtn';
import CounterCard from '@/components/cards/CounterCard';

export default function FullBanner() {
  return (
    <div className="relative w-full h-full rounded-4xl overflow-hidden shadow-2xl flex flex-col justify-end p-6 md:p-0">
      
      <div className="block md:hidden">
        <Image
          src="/banner-mobile.png"
          alt="Modern Architecture Mobile"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="hidden md:block">
        <Image
          src="/banner-desktop.png"
          alt="Modern Architecture"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="absolute top-35 left-12 z-20 text-white max-w-45 hidden md:block">
        <p className="text-[10px] uppercase tracking-[0.2em] leading-relaxed">
          We design things that combine aesthetics and functionality.
        </p>
      </div>

      <div className="absolute top-35 right-12 z-20 text-white text-right hidden md:block">
        <p className="text-[10px] uppercase tracking-[0.2em] leading-relaxed">
          Designing the <br /> life of the future
        </p>
      </div>

      <div className="absolute bottom-12 left-12 z-20 text-white hidden md:block">
        <p className="text-[10px] uppercase tracking-[0.2em] leading-relaxed">
          Closer to design, <br /> 
          <span className="font-normal">closer to yourself</span>
        </p>
      </div>

      <div className="relative z-20 flex flex-col gap-6 md:static">
        
        <div className="hidden md:flex flex-col gap-4 md:absolute md:bottom-6 md:right-6 md:gap-4 ">
          <CounterCard number="15+" text="Years of architectural excellence and innovation"/>
          <CounterCard number="549" text="Projects implemented worldwide with excellence"/>
        </div>
        
        <div className="w-full flex justify-center md:absolute md:bottom-10 md:left-1/2 md:-translate-x-1/2 md:w-auto">
          <ConsultationBtn />
        </div>

      </div>

    </div>
  );
}