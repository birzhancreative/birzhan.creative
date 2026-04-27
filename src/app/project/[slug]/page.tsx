import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import mediaMap from '@/data/media.json';
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

  let mediaFiles: string[] = (mediaMap as Record<string, string[]>)[decodedSlug] || [];
  
  if (mediaFiles.length === 0 && projectData.cover.endsWith('.mp4')) {
    mediaFiles = [projectData.cover];
  }

  return (
    <ProjectClientContent projectData={projectData} mediaFiles={mediaFiles} />
  );
}
