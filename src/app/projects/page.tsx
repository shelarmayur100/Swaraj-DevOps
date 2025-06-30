import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, GitBranch } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'Automated CI/CD Pipeline for Microservices',
    description: 'A robust, scalable CI/CD pipeline using Jenkins, Docker, and Kubernetes to automate testing and deployment of a microservices-based application.',
    tags: ['Jenkins', 'Docker', 'Kubernetes', 'CI/CD'],
    repoLink: 'https://github.com/example/cicd-pipeline'
  },
  {
    title: 'Infrastructure as Code for E-commerce Platform',
    description: 'Managed AWS infrastructure for a high-traffic e-commerce site using Terraform. Implemented auto-scaling, load balancing, and RDS for high availability.',
    tags: ['Terraform', 'AWS', 'IaC', 'VPC'],
    repoLink: 'https://github.com/example/terraform-aws'
  },
  {
    title: 'Cloud Monitoring & Logging Solution',
    description: 'Designed and deployed a centralized monitoring and logging system using Prometheus, Grafana, and the ELK Stack, providing real-time insights and alerts.',
    tags: ['Prometheus', 'Grafana', 'ELK Stack', 'Monitoring'],
    repoLink: 'https://github.com/example/monitoring-stack'
  },
  {
    title: 'Serverless API Deployment',
    description: 'Built and deployed a serverless API using AWS Lambda, API Gateway, and DynamoDB. Fully automated with the Serverless Framework.',
    tags: ['AWS Lambda', 'Serverless', 'API Gateway', 'DynamoDB'],
    repoLink: 'https://github.com/example/serverless-api'
  }
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline">GitHub Projects</h1>
        <p className="text-muted-foreground mt-2">A selection of projects demonstrating my expertise.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col">
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
              <Button asChild variant="link" className="text-primary p-0 h-auto">
                <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  View on GitHub <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
