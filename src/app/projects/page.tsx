
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Project {
  title: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: 'Azure CI/CD and Automation for EdTech',
    description: 'Delivered end-to-end CI/CD automation using Azure DevOps. Developed PowerShell scripts for domain expiry alerts, automated AD reporting, and service validation. Deployed Dockerized applications and integrated SonarQube for code quality.',
    tags: ['Azure', 'Azure DevOps', 'CI/CD', 'PowerShell', 'Docker', 'SonarQube'],
  },
  {
    title: 'Scalable AWS Infrastructure for a Multi-Environment Setup',
    description: 'Designed and deployed scalable AWS infrastructure using CDK and CloudFormation. Built fully automated CI/CD pipelines with AWS CodePipeline. Containerized and deployed Node.js microservices using ECS Fargate and secured services with AWS WAF.',
    tags: ['AWS', 'CDK', 'CloudFormation', 'CI/CD', 'CodePipeline', 'ECS Fargate', 'Microservices'],
  },
  {
    title: 'DevOps and Monitoring for E-Learning Platform',
    description: 'Managed Jenkins pipelines and cron jobs for automated deployments. Automated SSL certificate lifecycle with Bash scripting. Set up a comprehensive monitoring stack using Prometheus, Grafana, and Alertmanager.',
    tags: ['AWS', 'Jenkins', 'Bash', 'Prometheus', 'Grafana', 'Monitoring'],
  },
  {
    title: 'Secure and Scalable Azure Infrastructure Management',
    description: 'Designed and managed scalable Azure infrastructure (IaaS/PaaS). Implemented advanced security with RBAC, PIM, and JIT. Integrated on-premises systems with Azure AD and managed endpoint security with Microsoft Defender and Intune.',
    tags: ['Azure', 'IaC', 'PowerShell', 'Azure AD', 'Security', 'Microsoft Defender', 'Intune'],
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
          </Card>
        ))}
      </div>
    </div>
  );
}
