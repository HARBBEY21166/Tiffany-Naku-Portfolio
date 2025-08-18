'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - sendContactMessage - A function that handles the contact form submission process.
 * - ContactMessageInput - The input type for the sendContactMessage function.
 * - ContactMessageOutput - The return type for the sendContactMessage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ContactMessageInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email of the person sending the message.'),
  message: z.string().describe('The message content.'),
});
export type ContactMessageInput = z.infer<typeof ContactMessageInputSchema>;

const ContactMessageOutputSchema = z.object({
  success: z.boolean().describe('Whether the message was sent successfully.'),
});
export type ContactMessageOutput = z.infer<typeof ContactMessageOutputSchema>;

export async function sendContactMessage(input: ContactMessageInput): Promise<ContactMessageOutput> {
  return contactFlow(input);
}

const contactFlow = ai.defineFlow(
  {
    name: 'contactFlow',
    inputSchema: ContactMessageInputSchema,
    outputSchema: ContactMessageOutputSchema,
  },
  async (input) => {
    // In a real application, you would integrate with an email service like SendGrid or Resend.
    // For this example, we'll just log the message to the console.
    console.log('New contact message received:');
    console.log(`Name: ${input.name}`);
    console.log(`Email: ${input.email}`);
    console.log(`Message: ${input.message}`);
    
    // You can add logic here to send the email and handle potential errors.
    // For now, we'll assume it's always successful.
    return { success: true };
  }
);
