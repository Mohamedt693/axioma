import Image from 'next/image'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Axioma Studio | Modern Architecture',
  description: 'Defining the axioma of modern space since 2001. We believe that architecture is the silent language of the future.',
  openGraph: {
    title: 'About Axioma Studio',
    description: 'Defining the axioma of modern space since 2001.',
    images: ['/about-1.jpg'],
  },
};

function page() {
  return (
    <div className="flex h-full w-full flex-col rounded-4xl md:flex-row bg-black overflow-y-auto md:overflow-hidden">

      <div className="relative h-[40vh] w-full md:h-full md:w-1/2 overflow-hidden border-b md:border-b-0 md:border-r border-white/10
        rounded-t-4xl rounded-b-none md:rounded-l-4xl md:rounded-tr-none shrink-0">
        <Image
          src="/about-1.jpg" 
          alt="Axioma Studio" 
          fill 
          priority 
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw" 
        />
      </div>

      <div className="flex flex-1 w-full flex-col justify-center p-8 sm:p-12 md:h-full md:w-1/2 md:p-20">
        <span className="mb-3 text-[10px] md:text-xs tracking-[0.3em] text-gray-500 uppercase">Since 2001</span>
        <h2 className="mb-6 text-white/80 text-3xl font-light tracking-tight md:text-6xl leading-tight">
          Defining the <span className="font-serif italic">Axioma</span> of modern space.
        </h2>
        <p className="max-w-md text-xs leading-relaxed text-gray-400 md:text-base">
          We believe that architecture is the silent language of the future. 
          Axioma studio focuses on the intersection of structural integrity and 
          uncompromising aesthetic beauty.
        </p>
        
        <div className="mt-8 md:mt-12 flex gap-10">
          <div>
            <p className="text-xl md:text-2xl font-bold text-white">15+</p>
            <p className="text-[9px] uppercase tracking-widest text-gray-400 mt-1">Projects</p>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-bold text-white">04</p>
            <p className="text-[9px] uppercase tracking-widest text-gray-400 mt-1">Awards</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page