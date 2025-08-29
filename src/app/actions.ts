'use server';

import { z } from 'zod';

const leadSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid 10-digit phone number.' }),
  details: z.string().min(10, { message: 'Please provide at least 10 characters about your trip.' }),
});

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    details?: string[];
  };
  success: boolean;
};

export async function captureLead(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  
  const validatedFields = leadSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    details: formData.get('details'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Failed to create lead. Please check your inputs.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }
  
  const data = validatedFields.data;

  try {
    // In a real application, you would save the data to a database like Firestore.
    // e.g., await db.collection('leads').add(data);
    console.log('New lead captured:', data);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { message: 'Thank you for your inquiry! We will get back to you shortly.', success: true };

  } catch (e) {
    return {
      message: 'An unexpected error occurred. Please try again.',
      success: false,
    };
  }
}
