import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
}

const projects: Project[] = [
  {
    title: 'CI/CD Pipeline Architecture',
    description: 'Architected and maintained CI/CD pipelines for 20+ microservices using Jenkins and GitLab CI, focusing on automation and reliability.',
    tags: ['CI/CD', 'Jenkins', 'GitLab CI', 'Automation', 'Microservices'],
    url: 'https://github.com/swarajsirsat'
  },
  {
    title: 'AWS Infrastructure Automation',
    description: 'Managed AWS infrastructure with Terraform, leading to a 30% reduction in cloud costs through efficient resource management and automation.',
    tags: ['AWS', 'Terraform', 'IaC', 'Cost Optimization'],
    url: 'https://github.com/swarajsirsat/terraform-project'
  },
  {
    title: 'EKS Deployment Automation',
    description: 'Automated application deployments to Amazon EKS using a CI/CD pipeline built with AWS CodePipeline and CloudFormation.',
    tags: ['Amazon EKS', 'CodePipeline', 'CloudFormation', 'Kubernetes'],
    url: 'https://github.com/swarajsirsat/Buildspec-for-eks-codepipeline'
  },
  {
    title: 'DevOps Project Implementation',
    description: 'A comprehensive project demonstrating various DevOps practices and tools for a complete software development lifecycle.',
    tags: ['DevOps', 'CI/CD', 'Docker', 'Jenkins'],
    url: 'https://github.com/swarajsirsat/Devops-project'
  }
];


export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline">My Projects</h1>
        <p className="text-muted-foreground mt-2">A showcase of my work and experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col card-glow">
            <CardHeader>
              <CardTitle className="text-accent">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
               <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="font-code">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              {project.url && (
                <Button asChild variant="link" className="text-primary p-0 h-auto">
                  <Link href={project.url} target="_blank" rel="noopener noreferrer">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
