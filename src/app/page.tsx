'use client';
import { HomeCli } from './home-cli';
import { TerminalWindow } from '@/components/terminal-window';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <Avatar className="w-32 h-32 mb-8 border-2 border-primary/50 shadow-lg">
        <AvatarImage src="https://placehold.co/128x128.png" alt="Swaraj Sirsat" data-ai-hint="portrait man" />
        <AvatarFallback>SS</AvatarFallback>
      </Avatar>
      <h1 className="text-5xl font-bold font-headline mb-8">
        Swaraj Sirsat
      </h1>
      <TerminalWindow title="~/welcome">
        <HomeCli />
      </TerminalWindow>
    </div>
  );
}
