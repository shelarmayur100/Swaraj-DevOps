'use client';
import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { ChevronRight } from 'lucide-react';
import { sendEmail } from './actions';

type Stage = 'name' | 'email' | 'message' | 'confirm' | 'sending' | 'sent';

const prompts: Record<Stage, string> = {
  name: 'Enter your name:',
  email: 'Enter your email:',
  message: 'Enter your message:',
  confirm: 'Send this message? (yes/no)',
  sending: 'Sending...',
  sent: 'Message sent! Thank you for reaching out.'
};

export function ContactTerminal() {
  const [stage, setStage] = useState<Stage>('name');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInput = async (value: string) => {
    if (stage === 'sent' || stage === 'sending') return;

    setHistory(prev => [...prev, prompts[stage], value]);
    setInput('');

    switch (stage) {
      case 'name':
        setForm(prev => ({ ...prev, name: value }));
        setStage('email');
        break;
      case 'email':
        setForm(prev => ({ ...prev, email: value }));
        setStage('message');
        break;
      case 'message':
        setForm(prev => ({ ...prev, message: value }));
        setStage('confirm');
        break;
      case 'confirm':
        if (value.toLowerCase().trim() === 'yes') {
          setStage('sending');
          const result = await sendEmail(form);
          if (result.success) {
            setHistory(prev => [...prev, 'Message sent!']);
          } else {
            setHistory(prev => [...prev, `Error: ${result.error}`]);
          }
          setStage('sent');

        } else {
          setHistory(prev => [...prev, 'Cancelled.']);
          setStage('sent');
        }
        break;
    }
  };
  
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      handleInput(input);
    }
  };

  const currentPrompt = prompts[stage];

  return (
    <div onClick={() => inputRef.current?.focus()} className="h-full flex flex-col">
      <div className="flex-grow space-y-2 overflow-y-auto">
        {history.map((line, index) => (
          <div key={index}>
            <pre className="whitespace-pre-wrap break-words text-primary/90">{line}</pre>
          </div>
        ))}
        {stage !== 'sent' && (
          <div className={stage === 'sending' ? 'text-accent font-bold' : ''}>
            {currentPrompt}
          </div>
        )}
        <div ref={scrollRef} />
      </div>
      
      {stage !== 'sent' && stage !== 'sending' && (
        <div className="flex items-center mt-4">
          <span className="flex-shrink-0 flex items-center text-accent">
            <ChevronRight className="h-4 w-4" />
          </span>
          <input
            ref={inputRef}
            type={stage === 'email' ? 'email' : 'text'}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            className="w-full bg-transparent border-none text-primary focus:ring-0 p-0 ml-2"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      )}
    </div>
  );
}
