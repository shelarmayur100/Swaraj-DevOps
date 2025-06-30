'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const sendEmailSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
});

export async function sendEmail(formData: { name: string; email: string; message: string; }) {
  if (!process.env.RESEND_API_KEY) {
    console.error('Resend API key is not configured.');
    return { success: false, error: 'Contact form is not set up. An API key from Resend.com is required.' };
  }

  const parsed = sendEmailSchema.safeParse(formData);

  if (!parsed.success) {
    const error = parsed.error.issues.map(i => i.message).join(', ');
    return { success: false, error };
  }

  const { name, email, message } = parsed.data;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // IMPORTANT: Replace with your verified domain from Resend
      to: 'swarajssirsat@gmail.com',
      subject: `Message from ${name} via Portfolio`,
      reply_to: email,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });
    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: 'Sorry, something went wrong and I couldn\'t send your message.' };
  }
}
