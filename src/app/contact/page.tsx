import { TerminalWindow } from '@/components/terminal-window';
import { ContactTerminal } from './contact-terminal';

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline">Contact Me</h1>
        <p className="text-muted-foreground mt-2">
          Use the terminal below to send me a message.
        </p>
      </div>
      <TerminalWindow title="~/mailer.sh">
        <ContactTerminal />
      </TerminalWindow>
    </div>
  );
}
