'use client';
import { HomeCli } from './home-cli';
import { TerminalWindow } from '@/components/terminal-window';
import { Terminal } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="mb-8 flex h-32 w-32 items-center justify-center rounded-full border-2 border-primary/50 bg-card shadow-lg">
        <Terminal className="h-20 w-20 text-primary" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8">
        Swaraj Sirsat
      </h1>
      <TerminalWindow title="~/welcome">
        <HomeCli />
      </TerminalWindow>
    </div>
  );
}
