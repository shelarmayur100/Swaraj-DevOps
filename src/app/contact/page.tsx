import { TerminalWindow } from '@/components/terminal-window';
import { ContactTerminal } from './contact-terminal';

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-headline">Contact Me</h1>
        <p className="text-muted-foreground mt-2">
          Use the terminal below to send me a message or connect with me on{' '}
          <a
            href="https://www.linkedin.com/in/mayur-shelar-109b0b171/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            LinkedIn
          </a>.
        </p>
      </div>
      <TerminalWindow title="~/mailer.sh">
        <ContactTerminal />
      </TerminalWindow>
    </div>
  );
}
