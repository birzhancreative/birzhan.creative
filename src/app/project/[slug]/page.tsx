import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';
import ProjectClientContent from './ProjectClientContent';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  
  const projectData = projects.find((p) => p.slug === decodedSlug);

  if (!projectData) {
    notFound();
  }

  const publicDir = path.join(process.cwd(), 'public');
  // For standard projects, it's inside a folder.
  // Wait, for 'plane animation' and 'water cycle', they are just mp4 files in the public root!
  // If the directory doesn't exist (e.g. for the standalone mp4 files), we should handle it gracefully.
  const projectDir = path.join(publicDir, decodedSlug);

  let mediaFiles: string[] = [];

  try {
    if (fs.existsSync(projectDir) && fs.statSync(projectDir).isDirectory()) {
      const files = fs.readdirSync(projectDir);
      
      mediaFiles = files
        .filter((file) => /\.(jpg|jpeg|png|webp|gif|mp4)$/i.test(file))
        .filter((file) => {
          const lowerFile = file.toLowerCase();
          return !lowerFile.startsWith('logo.') && 
                 !lowerFile.startsWith('preview.') && 
                 !lowerFile.startsWith('loading screen.') && 
                 !lowerFile.startsWith('screen.');
        })
        .sort((a, b) => {
          const numA = parseInt(a.replace(/\D/g, ''), 10) || 0;
          const numB = parseInt(b.replace(/\D/g, ''), 10) || 0;
          return numA - numB;
        })
        .map((file) => `/${decodedSlug}/${file}`);
    } else {
      // If it's a direct video project without a folder, we might just show the cover video.
      if (projectData.cover.endsWith('.mp4')) {
        mediaFiles = [projectData.cover];
      }
    }
  } catch (error) {
    console.error("Error reading project directory:", error);
  }

  const heroMedia = mediaFiles.length > 0 ? mediaFiles[0] : null;
  const remainingMedia = mediaFiles.slice(1);

  return (
    <ProjectClientContent projectData={projectData} mediaFiles={mediaFiles} />
  );
}
