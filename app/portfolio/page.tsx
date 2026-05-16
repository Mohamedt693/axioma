import { client } from '@/lib/sanity';
import PortfolioClient from '@/components/client/PortfolioClient';
import type { Project } from '@/types/project';
import { Metadata } from 'next';


const PROJECTS_QUERY = `*[_type == "project"]{
  _id,
  title,
  "thumbnail": thumbnail.asset->url,
  "modelPath": modelFile.asset->url,
  description
}`;

// metadata generation for dynamic content
export async function generateMetadata(): Promise<Metadata> {
  try {
    const projects = await client.fetch(PROJECTS_QUERY);
    const totalProjects = projects.length;

    return {
      title: `Architectural Portfolio (${totalProjects}+ Projects) | Axioma Studio`,
      description: `Explore our interactive 3D archive. Showcasing ${totalProjects} implemented worldwide architectural projects with excellence.`,
      openGraph: {
        title: 'Axioma Studio - Interactive 3D Portfolio',
        description: `Discover our future-forward architecture across ${totalProjects} global projects.`,
        images: [projects[0]?.thumbnail || '/banner.png'], 
      },
    };
  } catch {
    return {
      title: 'Our Portfolio | Axioma Studio',
      description: 'Explore our architectural excellence and innovative 3D models.',
    };
  }
}


export default async function PortfolioPage() {
  let projects: Project[] = [];
  try {
    projects = await client.fetch(PROJECTS_QUERY);
  } catch (error) {
    console.error("Sanity Fetch Error on Server:", error);
  }

  return (
    <div className="h-full w-full rounded-4xl bg-black text-white font-sans flex flex-col overflow-hidden relative">
      
      <div className="pt-16 pb-8 text-center shrink-0">
        <p className="text-[9px] tracking-[0.3em] opacity-40 mt-4 uppercase">
          Axioma Studio Archive
        </p>
      </div>
      
      <PortfolioClient projects={projects} />

      <div className="h-24 flex items-center justify-center opacity-30 shrink-0">
        <p className="text-[8px] tracking-[0.8em]">SWIPE TO DISCOVER THE FUTURE</p>
      </div>

    </div>
  );
}