import { InteractiveCli } from './interactive-cli';
import { TerminalWindow } from '@/components/terminal-window';

export default function ResumePage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-headline">Interactive Resume</h1>
        <p className="text-muted-foreground mt-2">
          Type commands to explore my resume. Try `help` to get started.
        </p>
      </div>
      <TerminalWindow title="~/resume.sh">
        <InteractiveCli />
      </TerminalWindow>
    </div>
  );
}
