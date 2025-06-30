import { type ReactNode } from 'react';

type TerminalWindowProps = {
  children: ReactNode;
  title?: string;
};

export function TerminalWindow({ children, title = "bash" }: TerminalWindowProps) {
  return (
    <div className="w-full max-w-4xl rounded-lg border border-border bg-card shadow-lg">
      <div className="flex items-center justify-between h-8 rounded-t-lg bg-muted px-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
        </div>
        <div className="text-sm font-code text-muted-foreground">{title}</div>
        <div className="w-16"></div>
      </div>
      <div className="p-4 font-code text-primary min-h-[300px]">
        {children}
      </div>
    </div>
  );
}
