import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
  title: string;
  url: string;
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'A Guide to Deploy Simple Web App Using Amazon ECR with AWS App Runner',
    url: 'https://www.cloudthat.com/resources/blog/a-guide-to-deploy-simple-web-app-using-amazon-ecr-with-aws-app-runner',
    description: 'Learn how to deploy a containerized web application using AWS ECR and App Runner for a simple, scalable solution.',
  },
  {
    title: 'Deliver High-Performance Applications Using AWS Inferentia2 (Inf2)',
    url: 'https://www.cloudthat.com/resources/blog/deliver-high-performance-applications-using-aws-inferentia2-inf2',
    description: 'Explore how to leverage AWS Inferentia2 instances to accelerate machine learning inference and reduce costs.',
  },
  {
    title: 'What Is Multi-Cloud? An Overview of Multi-Cloud Computing',
    url: 'https://www.cloudthat.com/resources/blog/what-is-multi-cloud-an-overview-of-multi-cloud-computing',
    description: 'An introductory look at multi-cloud strategies, their benefits, and challenges in modern cloud computing.',
  },
];

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline">My Writings</h1>
        <p className="text-muted-foreground mt-2">A collection of articles I've written.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.url} className="flex flex-col card-glow">
            <CardHeader>
              <CardTitle className="text-accent">{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="text-primary p-0 h-auto">
                <Link href={post.url} target="_blank" rel="noopener noreferrer">
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
