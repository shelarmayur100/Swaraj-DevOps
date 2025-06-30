import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Cloud, 
  GitMerge, 
  Layers, 
  ShieldCheck, 
  Container,
  Activity,
  Blocks,
  Megaphone,
  Search
} from 'lucide-react';
import type { ReactNode } from 'react';

interface Skill {
  name: string;
  experience: string;
  icon: ReactNode;
}

const skills: Skill[] = [
  { name: 'AWS', experience: '4 years', icon: <Cloud className="h-6 w-6 text-primary" /> },
  { name: 'Azure', experience: '4 years', icon: <Cloud className="h-6 w-6 text-primary" /> },
  { name: 'CI/CD (Jenkins, GitLab)', experience: '4 years', icon: <GitMerge className="h-6 w-6 text-primary" /> },
  { name: 'Terraform', experience: '3 years', icon: <Layers className="h-6 w-6 text-primary" /> },
  { name: 'Kubernetes', experience: '2 years', icon: <Container className="h-6 w-6 text-primary" /> },
  { name: 'Security & Compliance', experience: '4 years', icon: <ShieldCheck className="h-6 w-6 text-primary" /> },
  { name: 'Monitoring Tools', experience: '3 years', icon: <Activity className="h-6 w-6 text-primary" /> },
  { name: 'CloudFormation', experience: '3 years', icon: <Blocks className="h-6 w-6 text-primary" /> },
  { name: 'Digital Marketing', experience: 'Knowledgeable', icon: <Megaphone className="h-6 w-6 text-primary" /> },
  { name: 'SEO', experience: 'Knowledgeable', icon: <Search className="h-6 w-6 text-primary" /> },
];

interface Certification {
  name: string;
  issuer: string;
}

const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
  },
  {
    name: 'Microsoft Certified: Azure Administrator Associate (AZ-104)',
    issuer: 'Microsoft',
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
  },
  {
    name: 'Oracle Cloud Infrastructure Foundations Associate',
    issuer: 'Oracle',
  },
];


export default function SkillsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-headline">Skills Showcase</h1>
        <p className="text-muted-foreground mt-2">My experience with key technologies.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <Card key={skill.name} className="card-glow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium text-primary">
                {skill.name}
              </CardTitle>
              {skill.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{skill.experience}</div>
               <p className="text-xs text-muted-foreground">
                {skill.experience.includes('years') ? 'of experience' : 'in this area'}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-8 pt-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-headline">Certifications</h2>
          <p className="text-muted-foreground mt-2">My professional certifications.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.name} className="card-glow">
              <CardHeader className="p-4">
                <div>
                  <CardTitle className="text-lg font-medium text-primary leading-tight">{cert.name}</CardTitle>
                  <CardDescription className="pt-1">{cert.issuer}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
