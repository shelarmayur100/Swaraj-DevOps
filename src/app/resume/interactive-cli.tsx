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
'about'         -  Display summary
'experience'    -  Show work experience
'education'     -  View education history
'skills'        -  List technical skills
'contact'       -  Show contact information
'download'      -  Get a link to download the PDF resume
'clear'         -  Clear the terminal screen
'help'          -  Show this help message`,
  about: "Hi, I'm Swaraj Sirsat — a passionate Cloud & DevOps Engineer with 4 years of hands-on experience in building, automating, and scaling cloud infrastructure.",
  experience: `> Cloud & DevOps Engineer, Tech Solutions Inc. (2020-Present)
  - Architected and maintained CI/CD pipelines for 20+ microservices using Jenkins and GitLab CI.
  - Managed AWS infrastructure with Terraform, saving 30% in cloud costs.`,
  education: `> M.S. in Computer Science, University of Technology (2015)
> B.S. in Information Systems, State College (2013)`,
  skills: `Languages: Python, Bash, Go
Cloud:     AWS, GCP
IaC:       Terraform, Ansible
CI/CD:     Jenkins, GitLab CI, ArgoCD
Container: Docker, Kubernetes
Monitor:   Prometheus, Grafana, ELK Stack`,
  contact: `LinkedIn: linkedin.com/in/swaraj-sirsat-925440205
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
  
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    let newOutput: OutputLine[] = [...output, { type: 'command', text: command }];

    if (cmd in resumeData) {
      newOutput.push({ type: 'response', text: resumeData[cmd as keyof typeof resumeData] });
    } else if (cmd === 'clear') {
      newOutput = [];
    } else {
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

      <div className="flex items-center mt-4">
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
