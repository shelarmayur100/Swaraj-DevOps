
'use client';
import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

type OutputLine = {
  type: 'command' | 'response' | 'error';
  text: string;
};

const resumeData = {
  help: `Available commands:
'summary'       -  Display professional summary
'experience'    -  Show work experience
'education'     -  View education history
'skills'        -  List technical skills
'contact'       -  Show contact information
'download'      -  Get a link to download the PDF resume
'clear'         -  Clear the terminal screen
'help'          -  Show this help message`,
  summary: "Cloud and DevOps Engineer with 4 years of experience in managing cloud infrastructure, CI/CD pipelines, and automation. Skilled in AWS, Azure, Docker, Terraform, and Jenkins. Strong background in deploying scalable, secure, and reliable systems. Experienced in monitoring and logging with Prometheus, Grafana, and ELK stack. Focused on improving performance, uptime, and development workflows.",
  experience: `> TurnPoint PVT LTD (Sep 2024 - Present)
  - Role: Cloud Engineer
  - Designed and managed scalable Azure infrastructure (IaaS/PaaS).
  - Automated infrastructure provisioning with Azure DevOps and PowerShell.
  - Implemented advanced security with RBAC, PIM, and JIT access.

> CloudThat PVT LTD (Aug 2021 - Sep 2024)
  - Role: Azure & DevOps Engineer / AWS Cloud & DevOps Engineer
  - Delivered end-to-end CI/CD automation using Azure DevOps.
  - Designed and deployed scalable AWS infrastructure using CDK and CloudFormation.
  - Containerized and deployed Node.js microservices using ECS Fargate.
  - Set up monitoring with Prometheus, Grafana, and Alertmanager.`,
  education: `> PG Diploma in Cloud Computing | RTMNU | 2021
> Bachelor of Computer Applications (BCA) | RTMNU | 2020`,
  skills: `Cloud:       AWS, Azure
DevOps:      Azure DevOps, AWS CICD, Jenkins
IaC:         Terraform, CloudFormation, CDK
Containers:  Docker, ECS, EKS
Security:    IAM, Azure Entra ID, Microsoft Defender, AWS Security
Monitoring:  Prometheus, Grafana, ELK Stack
Scripting:   PowerShell, Bash
Other:       Microservices, Route 53, Load Balancing, Cron jobs`,
  contact: `Email:    swarajsirsat6@gmail.com
Phone:    +91-9404083967
LinkedIn: linkedin.com/in/swaraj-sirsat-925440205
GitHub:   github.com/swarajsirsat`,
  download: 'Click the button to download my resume.',
};

export function InteractiveCli() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<OutputLine[]>([
    { type: 'response', text: 'Welcome to my interactive resume. Type `help` for a list of commands.' }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    let newOutput: OutputLine[] = [...output, { type: 'command', text: command }];

    if (cmd in resumeData) {
      newOutput.push({ type: 'response', text: resumeData[cmd as keyof typeof resumeData] });
    } else if (cmd === 'clear') {
      newOutput = [];
    } else if (cmd === 'about') { // Alias for summary
      newOutput.push({ type: 'response', text: resumeData.summary });
    }
    else {
      newOutput.push({ type: 'error', text: `command not found: ${cmd}` });
    }
    setOutput(newOutput);
    setInput('');
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      handleCommand(input);
    }
  };

  return (
    <div onClick={() => inputRef.current?.focus()} className="h-full flex flex-col">
      <div className="flex-grow space-y-2 overflow-y-auto">
        {output.map((line, index) => (
          <div key={index} className="flex items-start">
            {line.type === 'command' && (
              <span className="flex-shrink-0 flex items-center text-accent">
                ~<ChevronRight className="h-4 w-4" />
              </span>
            )}
            <pre className={`whitespace-pre-wrap break-words flex-1 ${line.type === 'error' ? 'text-destructive' : 'text-primary/90'}`}>
              {line.text}
            </pre>
          </div>
        ))}
         {output[output.length - 1]?.text === resumeData.download && (
          <div className="mt-2">
            <Button asChild>
              <a href="/resume.pdf" download="SwarajSirsat_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      <div className="flex items-center mt-4 p-2 rounded-md border border-input focus-within:border-ring focus-within:ring-1 focus-within:ring-ring/50 transition-colors">
        <span className="flex-shrink-0 flex items-center text-accent">
          ~<ChevronRight className="h-4 w-4" />
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          className="w-full bg-transparent border-none text-primary focus:ring-0 p-0 ml-2"
          autoComplete="off"
          spellCheck="false"
        />
      </div>
    </div>
  );
}
