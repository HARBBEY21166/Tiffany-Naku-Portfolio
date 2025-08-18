'use server';
/**
 * @fileOverview A flow for sending a contact message.
 * This is a placeholder and does not actually send an email.
 *
 * - sendContactMessage - A function that handles sending the message.
 * - ContactMessage - The input type for the sendContactMessage function.
 * - ContactMessageOutput - The return type for the sendContactMessage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ContactMessageSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});
export type ContactMessage = z.infer<typeof ContactMessageSchema>;

const ContactMessageOutputSchema = z.object({
  success: z.boolean(),
});
export type ContactMessageOutput = z.infer<typeof ContactMessageOutputSchema>;

export async function sendContactMessage(input: ContactMessage): Promise<ContactMessageOutput> {
  return contactFlow(input);
}

const contactFlow = ai.defineFlow(
  {
    name: 'contactFlow',
    inputSchema: ContactMessageSchema,
    outputSchema: ContactMessageOutputSchema,
  },
  async (input) => {
    // In a real application, you would integrate with an email sending service
    // like SendGrid, Mailgun, or Nodemailer here.
    // For this example, we'll just log the message to the console
    // and simulate a successful response.
    console.log('Received contact message:');
    console.log('Name:', input.name);
    console.log('Email:', input.email);
    console.log('Message:', input.message);
    console.log('Recipient Email: olamilekansunday445@gmail.com');

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true };
  }
);
