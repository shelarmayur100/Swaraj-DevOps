import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, GitFork } from 'lucide-react';
import Link from 'next/link';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
}

const projectNames = ['terraform-project', 'Devops-project'];

async function getProject(repoName: string): Promise<Repo | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/swarajsirsat/${repoName}`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) {
      console.error(`Failed to fetch GitHub project ${repoName}: ${res.status} ${res.statusText}`);
      return null;
    }
    
    return res.json();
  } catch (error) {
    console.error(`Error fetching GitHub project ${repoName}:`, error);
    return null;
  }
}

async function getProjects(): Promise<Repo[]> {
    const projects = await Promise.all(
        projectNames.map(name => getProject(name))
    );
    return projects.filter((p): p is Repo => p !== null);
}


export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline">GitHub Projects</h1>
        <p className="text-muted-foreground mt-2">A selection of my projects from GitHub.</p>
      </div>

      {projects.length === 0 ? (
        <p className="text-center text-muted-foreground">Could not load projects from GitHub.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col card-glow">
              <CardHeader>
                <CardTitle className="text-accent">{project.name}</CardTitle>
                <CardDescription>{project.description || 'No description provided.'}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                 <div className="flex flex-wrap gap-2">
                  {project.topics.map(tag => (
                    <Badge key={tag} variant="secondary" className="font-code">{tag}</Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-2 text-sm text-muted-foreground">
                   {project.language && (
                      <div className="flex items-center gap-1">
                          <span className="h-3 w-3 rounded-full bg-primary" />
                          <span>{project.language}</span>
                      </div>
                  )}
                  <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      <span>{project.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4" />
                      <span>{project.forks_count}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-primary p-0 h-auto">
                  <Link href={project.html_url} target="_blank" rel="noopener noreferrer">
                    View on GitHub <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
