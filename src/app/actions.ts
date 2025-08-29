'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

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
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: process.env.EMAIL_SERVER_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${data.name}" <${process.env.EMAIL_FROM}>`,
      to: 'royalcabs31@gmail.com',
      subject: 'New Cab Inquiry from Website',
      html: `
        <h1>New Cab Inquiry</h1>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Trip Details:</strong></p>
        <p>${data.details}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    
    console.log('New lead captured and email sent:', data);

    return { message: 'Thank you for your inquiry! We will get back to you shortly.', success: true };

  } catch (e) {
    console.error('Error sending email:', e);
    return {
      message: 'An unexpected error occurred. Please try again.',
      success: false,
    };
  }
}
