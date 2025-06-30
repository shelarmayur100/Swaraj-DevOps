import { TerminalWindow } from '@/components/terminal-window';
import { ResourceForm } from './resource-form';

export default function ResourcesPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline">AI Resource Recommendations</h1>
        <p className="text-muted-foreground mt-2">
          Enter your skills and interests to get personalized DevOps resource recommendations.
        </p>
      </div>
      <TerminalWindow title="~/get-resources.ai">
        <ResourceForm />
      </TerminalWindow>
    </div>
  );
}
