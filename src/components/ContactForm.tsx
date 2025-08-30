
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
import { useTranslations } from 'next-intl';

function SubmitButton() {
  const t = useTranslations('contactForm');
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {t('sending')}
        </>
      ) : (
        t('sendRequest')
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
  const t = useTranslations('contactForm');
  const [state, formAction] = useActionState(captureLead, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast({
        title: t('successTitle'),
        description: t('successMessage'),
      });
      formRef.current?.reset();
    } else if (state.message && !state.success && state.errors) {
       toast({
        variant: 'destructive',
        title: t('errorTitle'),
        description: t('errorMessage'),
      });
    }
  }, [state, toast, t]);

  if (state.success) {
    return (
        <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg h-full bg-green-50">
            <CheckCircle className="w-16 h-16 text-green-600 mb-4"/>
            <h3 className="text-xl font-semibold text-green-800">{t('inquirySent')}</h3>
            <p className="text-green-700 mt-2">{t('successMessage')}</p>
        </div>
    )
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <div>
        <Label htmlFor="name">{t('name')}</Label>
        <Input id="name" name="name" placeholder={t('namePlaceholder')} required />
        {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
      </div>
      <div>
        <Label htmlFor="email">{t('email')}</Label>
        <Input id="email" name="email" type="email" placeholder={t('emailPlaceholder')} required />
        {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
      </div>
      <div>
        <Label htmlFor="phone">{t('phone')}</Label>
        <Input id="phone" name="phone" type="tel" placeholder={t('phonePlaceholder')} required />
        {state.errors?.phone && <p className="text-sm text-destructive mt-1">{state.errors.phone[0]}</p>}
      </div>
      <div>
        <Label htmlFor="details">{t('details')}</Label>
        <Textarea
          id="details"
          name="details"
          placeholder={t('detailsPlaceholder')}
          required
          rows={4}
        />
        {state.errors?.details && <p className="text-sm text-destructive mt-1">{state.errors.details[0]}</p>}
      </div>
      <SubmitButton />
    </form>
  );
}

