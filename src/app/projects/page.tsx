
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: 'Azure CI/CD and Automation for EdTech',
    description: 'Led end-to-end CI/CD automation using Azure DevOps. Developed PowerShell scripts for domain expiry alerts and automated AD reporting. Deployed Dockerized applications, integrated SonarQube for code quality which reduced release bugs by 30%, and improved cost-efficiency with Azure Advisor.',
    tags: ['Azure', 'Azure DevOps', 'CI/CD', 'PowerShell', 'Docker', 'SonarQube'],
  },
  {
    title: 'Scalable AWS Infrastructure for a Multi-Environment Setup',
    description: 'Designed and deployed scalable AWS infrastructure using CDK and CloudFormation. Built fully automated CI/CD pipelines with AWS CodePipeline and GitHub. Containerized and deployed Node.js microservices using ECS Fargate, and secured services with AWS WAF and IAM policies.',
    tags: ['AWS', 'CDK', 'CloudFormation', 'CI/CD', 'CodePipeline', 'ECS Fargate', 'Microservices'],
  },
  {
    title: 'DevOps and Monitoring for E-Learning Platform',
    description: 'Managed Jenkins pipelines and cron jobs for automated deployments. Automated the full SSL certificate lifecycle with Bash scripting to improve uptime and security. Established a comprehensive monitoring stack using Prometheus, Grafana, and Alertmanager for proactive issue resolution.',
    tags: ['AWS', 'Jenkins', 'Bash', 'Prometheus', 'Grafana', 'Monitoring', 'S3'],
  },
  {
    title: 'Secure and Scalable Azure Infrastructure Management',
    description: 'Managed scalable Azure IaaS/PaaS environments with a focus on high availability. Implemented advanced security using RBAC, PIM, and JIT access policies. Integrated on-premises systems with Azure AD and managed endpoint security with Microsoft Defender and Intune.',
    tags: ['Azure', 'IaC', 'PowerShell', 'Azure AD', 'Security', 'Microsoft Defender', 'Intune'],
  }
];


export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-headline">My Projects</h1>
        <p className="text-muted-foreground mt-2">A showcase of my work and experience.</p>
        <Button asChild className="mt-4">
            <Link href="https://github.com/shelarmayur100" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2"/> View on GitHub
            </Link>
        </Button>
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
          </Card>
        ))}
      </div>
    </div>
  );
}
