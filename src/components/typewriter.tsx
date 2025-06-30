'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface Line {
  text: string;
  type: 'command' | 'response';
}

interface TypewriterProps {
  lines: Line[];
}

export function Typewriter({ lines }: TypewriterProps) {
  const [currentLines, setCurrentLines] = useState<Line[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isCommandComplete, setIsCommandComplete] = useState(false);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];
    const isCommand = currentLine.type === 'command';

    if (isCommand && !isCommandComplete) {
      // Type out the command
      if (charIndex < currentLine.text.length) {
        const timeoutId = setTimeout(() => {
          setCharIndex(charIndex + 1);
        }, 50);
        return () => clearTimeout(timeoutId);
      } else {
        // Command typing finished, wait a bit before showing response
        const timeoutId = setTimeout(() => {
          setCurrentLines(prev => [...prev, { text: currentLine.text, type: 'command' }]);
          setIsCommandComplete(true);
          setCharIndex(0);
        }, 300);
        return () => clearTimeout(timeoutId);
      }
    } else {
      // Show response instantly or after command
      const timeoutId = setTimeout(() => {
        setCurrentLines(prev => [...prev, { text: currentLine.text, type: 'response' }]);
        setLineIndex(lineIndex + 1);
        setIsCommandComplete(false);
        setCharIndex(0);
      }, isCommand ? 0 : 500); // Wait longer between command/response pairs
      return () => clearTimeout(timeoutId);
    }
  }, [lineIndex, charIndex, lines, isCommandComplete]);


  return (
    <div className="space-y-2">
      {currentLines.map((line, index) => (
        <div key={index} className={cn('flex items-start', line.type === 'command' ? 'text-primary' : 'text-foreground/80')}>
          {line.type === 'command' && (
            <span className="flex-shrink-0 flex items-center">
              <span className='text-accent'>~</span>
              <ChevronRight className="h-4 w-4 text-accent" />
            </span>
          )}
          <pre className="whitespace-pre-wrap break-words flex-1">{line.text}</pre>
        </div>
      ))}
      {lineIndex < lines.length && lines[lineIndex].type === 'command' && !isCommandComplete && (
        <div className="flex items-start text-primary">
          <span className="flex-shrink-0 flex items-center">
            <span className='text-accent'>~</span>
            <ChevronRight className="h-4 w-4 text-accent" />
          </span>
          <pre className="whitespace-pre-wrap break-words flex-1">
            {lines[lineIndex].text.substring(0, charIndex)}
            <span className="animate-ping">_</span>
          </pre>
        </div>
      )}
    </div>
  );
}
