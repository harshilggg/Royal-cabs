'use client';

import { useFormStatus } from 'react-dom';
import { useEffect, useRef, useActionState } from 'react';
import { captureLead, FormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Loader2 } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        'Send Request'
      )}
    </Button>
  );
}

const initialState: FormState = {
  message: '',
  errors: {},
  success: false,
};

export function ContactForm() {
  const [state, formAction] = useActionState(captureLead, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast({
        title: 'Success!',
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.message && !state.success && state.errors) {
       toast({
        variant: 'destructive',
        title: 'Oops! Something went wrong.',
        description: state.message,
      });
    }
  }, [state, toast]);

  if (state.success) {
    return (
        <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg h-full bg-green-50">
            <CheckCircle className="w-16 h-16 text-green-600 mb-4"/>
            <h3 className="text-xl font-semibold text-green-800">Inquiry Sent!</h3>
            <p className="text-green-700 mt-2">{state.message}</p>
        </div>
    )
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" placeholder="John Doe" required />
        {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
      </div>
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" name="email" type="email" placeholder="john@example.com" required />
        {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" name="phone" type="tel" placeholder="9876543210" required />
        {state.errors?.phone && <p className="text-sm text-destructive mt-1">{state.errors.phone[0]}</p>}
      </div>
      <div>
        <Label htmlFor="details">Trip Details</Label>
        <Textarea
          id="details"
          name="details"
          placeholder="e.g., One-way trip from Indore to Bhopal for 3 people on..."
          required
          rows={4}
        />
        {state.errors?.details && <p className="text-sm text-destructive mt-1">{state.errors.details[0]}</p>}
      </div>
      <SubmitButton />
    </form>
  );
}
