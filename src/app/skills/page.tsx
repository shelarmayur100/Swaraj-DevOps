import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Terminal, Layers, GitMerge, Cloud, ShieldCheck } from 'lucide-react';
import type { ReactNode } from 'react';

interface Skill {
  name: string;
  proficiency: number;
  icon: ReactNode;
}

const skills: Skill[] = [
  { name: 'Linux/Unix', proficiency: 95, icon: <Terminal className="h-6 w-6 text-primary" /> },
  { name: 'Docker', proficiency: 90, icon: (
    <svg className="h-6 w-6 text-primary" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.15,10.42A7.34,7.34,0,0,0,21.6,7.59V7.58a7.17,7.17,0,0,0-4.71-4.94,7.4,7.4,0,0,0-6.19-.13,7.17,7.17,0,0,0-4.71,4.94V7.59a7.34,7.34,0,0,0-1.55,2.83,7.5,7.5,0,0,0,0,5.16,7.34,7.34,0,0,0,1.55,2.83v0a7.17,7.17,0,0,0,4.71,4.94,7.4,7.4,0,0,0,6.19.13,7.17,7.17,0,0,0,4.71-4.94v0a7.34,7.34,0,0,0,1.55-2.83A7.5,7.5,0,0,0,23.15,10.42Zm-3.8,5.19a4.48,4.48,0,0,1-3,3.12,4.64,4.64,0,0,1-3.86.08,4.48,4.48,0,0,1-3-3.12v-5H1.35V15.6a6.83,6.83,0,0,0,1.4,2.6,6.6,6.6,0,0,0,4.3,2.44,6.86,6.86,0,0,0,5.69-.11,6.6,6.6,0,0,0,4.3-2.44,6.83,6.83,0,0,0,1.4-2.6Zm-1-5.18H1.35v-1H5.1v-1H1.35V7.47h3.75V6.47H1.35V5.47H5.1V4.47H1.35V3.42H18.2V4.47h-1V5.47h1V6.47h-1V7.47h1v1h-1v1h1Z" /></svg>
  )},
  { name: 'Terraform', proficiency: 85, icon: <Layers className="h-6 w-6 text-primary" /> },
  { name: 'CI/CD (Jenkins, GitLab)', proficiency: 90, icon: <GitMerge className="h-6 w-6 text-primary" /> },
  { name: 'AWS', proficiency: 80, icon: <Cloud className="h-6 w-6 text-primary" /> },
  { name: 'Security & Compliance', proficiency: 75, icon: <ShieldCheck className="h-6 w-6 text-primary" /> },
];


export default function SkillsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline">Skills Showcase</h1>
        <p className="text-muted-foreground mt-2">Proficiency in key DevOps technologies.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <Card key={skill.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium text-primary">
                {skill.name}
              </CardTitle>
              {skill.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{skill.proficiency}%</div>
              <Progress value={skill.proficiency} className="w-full mt-2 h-3" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
