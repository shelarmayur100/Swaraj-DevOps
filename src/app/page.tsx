'use client';
import { Typewriter } from '@/components/typewriter';
import { TerminalWindow } from '@/components/terminal-window';

export default function Home() {
  const introText = [
    { text: 'cat intro.txt', type: 'command' },
    {
      text: `Hi, I'm Swaraj Sirsat — a passionate Cloud & DevOps Engineer with 4 years of hands-on experience in building, automating, and scaling cloud infrastructure.`,
      type: 'response',
    },
    { text: './navigate.sh', type: 'command' },
    { text: 'Use the navigation above to explore my skills, projects, and more.', type: 'response' },

  ];

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <TerminalWindow title="~/welcome">
        <Typewriter lines={introText} />
      </TerminalWindow>
    </div>
  );
}
