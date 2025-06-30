'use client';
import { Typewriter } from '@/components/typewriter';

const introLines = [
  { type: 'command' as const, text: 'cat intro.txt' },
  { type: 'response' as const, text: 'Cloud and DevOps Engineer with 4 years of experience in managing cloud infrastructure, CI/CD pipelines, and automation. Skilled in AWS, Azure, Docker, Terraform, and Jenkins. Strong background in deploying scalable, secure, and reliable systems. Experienced in monitoring and logging with Prometheus, Grafana, and ELK stack. Focused on improving performance, uptime, and development workflows.' },
  { type: 'command' as const, text: './navigate.sh' },
  { type: 'response' as const, text: 'Use the navigation above to explore my skills, projects, and more.' }
];


export function HomeCli() {
  return (
    <Typewriter lines={introLines} />
  );
}
