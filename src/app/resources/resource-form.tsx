'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { getRecommendations, type FormState } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { List, Bot, Send } from 'lucide-react';

const initialState: FormState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Bot className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Get Recommendations
        </>
      )}
    </Button>
  );
}

export function ResourceForm() {
  const [state, formAction] = useFormState(getRecommendations, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && state.issues) {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
    if (state.message && !state.recommendations && !state.issues) {
       toast({
        title: 'Info',
        description: state.message,
      });
    }
  }, [state, toast]);
  
  useEffect(() => {
    if (state.message && state.recommendations) {
        formRef.current?.reset();
    }
  }, [state.message, state.recommendations])

  return (
    <div className="space-y-4 text-primary">
      <p className="text-sm text-muted-foreground">Example Skills: Docker, Terraform, Python. Example Interests: CI/CD, Cloud Security, Automation.</p>
      <form ref={formRef} action={formAction} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="skills">Your Skills (comma-separated)</Label>
          <Input id="skills" name="skills" required placeholder="e.g., Linux, AWS, Jenkins" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="interests">Your Interests (comma-separated)</Label>
          <Textarea
            id="interests"
            name="interests"
            required
            placeholder="e.g., Serverless, Kubernetes Security, GitOps"
            className="min-h-[60px]"
          />
        </div>
        <SubmitButton />
      </form>
      
      {state.recommendations && state.recommendations.length > 0 && (
        <div className="pt-4 border-t border-border mt-6">
          <h3 className="text-lg font-bold text-accent mb-2">{state.message}</h3>
          <ul className="space-y-2 list-inside">
            {state.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start">
                <List className="h-4 w-4 mr-2 mt-1 text-accent flex-shrink-0" />
                <span className="text-primary/90">{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
