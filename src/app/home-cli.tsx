'use client';
import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { ChevronRight } from 'lucide-react';

type OutputLine = {
  type: 'command' | 'response' | 'error';
  text: string;
};

const introData = {
  help: `Available commands:
'cat intro.txt'   -  Display summary
'./navigate.sh'   -  Show navigation hint
'clear'           -  Clear the terminal screen
'help'            -  Show this help message`,
  'cat intro.txt': 'A passionate Cloud & DevOps Engineer with 4 years of hands-on experience in building, automating, and scaling cloud infrastructure.',
  './navigate.sh': 'Use the navigation above to explore my skills, projects, and more.',
};

export function HomeCli() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<OutputLine[]>([
    { type: 'response', text: "Welcome! This is my interactive intro. Type `cat intro.txt` to begin or `help` for commands." }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);
  
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    let newOutput: OutputLine[] = [...output, { type: 'command', text: command }];

    if (cmd === 'clear') {
      newOutput = [];
    } else if (Object.prototype.hasOwnProperty.call(introData, cmd)) {
        newOutput.push({ type: 'response', text: introData[cmd as keyof typeof introData] });
    } else {
      newOutput.push({ type: 'error', text: `command not found: ${cmd}` });
    }
    setOutput(newOutput);
    setInput('');
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      handleCommand(input);
    }
  };

  return (
    <div onClick={() => inputRef.current?.focus()} className="h-full flex flex-col">
      <div className="flex-grow space-y-2 overflow-y-auto">
        {output.map((line, index) => (
          <div key={index} className="flex items-start">
            {line.type === 'command' && (
              <span className="flex-shrink-0 flex items-center text-accent">
                ~<ChevronRight className="h-4 w-4" />
              </span>
            )}
            <pre className={`whitespace-pre-wrap break-words flex-1 ${line.type === 'error' ? 'text-destructive' : 'text-primary/90'}`}>
              {line.text}
            </pre>
          </div>
        ))}
        <div ref={scrollRef} />
      </div>

      <div className="flex items-center mt-4">
        <span className="flex-shrink-0 flex items-center text-accent">
          ~<ChevronRight className="h-4 w-4" />
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          className="w-full bg-transparent border-none text-primary focus:ring-0 p-0 ml-2"
          autoComplete="off"
          spellCheck="false"
        />
      </div>
    </div>
  );
}
