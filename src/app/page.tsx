'use client';
import { HomeCli } from './home-cli';
import { TerminalWindow } from '@/components/terminal-window';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-5xl font-bold font-headline mb-8 text-center">
        Swaraj Sirsat
      </h1>
      <TerminalWindow title="~/welcome">
        <HomeCli />
      </TerminalWindow>
    </div>
  );
}
