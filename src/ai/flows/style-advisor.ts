// This file is machine-generated - edit with caution!
'use server';
/**
 * @fileOverview A style advisor AI agent that suggests portfolio pieces based on a user-provided style description.
 *
 * - suggestPortfolioPieces - A function that handles the style suggestion process.
 * - StyleAdvisorInput - The input type for the suggestPortfolioPieces function.
 * - StyleAdvisorOutput - The return type for the suggestPortfolioPieces function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StyleAdvisorInputSchema = z.object({
  styleDescription: z
    .string()
    .describe('A description of the desired graphic design style.'),
  portfolioPieces: z.array(z.string()).describe('List of portfolio piece descriptions.'),
});
export type StyleAdvisorInput = z.infer<typeof StyleAdvisorInputSchema>;

const StyleAdvisorOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('A list of portfolio pieces that match the described style.'),
});
export type StyleAdvisorOutput = z.infer<typeof StyleAdvisorOutputSchema>;

export async function suggestPortfolioPieces(
  input: StyleAdvisorInput
): Promise<StyleAdvisorOutput> {
  return styleAdvisorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'styleAdvisorPrompt',
  input: {schema: StyleAdvisorInputSchema},
  output: {schema: StyleAdvisorOutputSchema},
  prompt: `You are a graphic design style advisor. A user will describe a desired graphic design style, and you will suggest portfolio pieces that match that style.

Here is the style description:

{{styleDescription}}

Here are the available portfolio pieces:

{{#each portfolioPieces}}
- {{{this}}}
{{/each}}

Based on the style description, which of the portfolio pieces would you recommend? Return only the names of the pieces that are good match for the style. Do not include any extra explanation or conversational text.`,
});

const styleAdvisorFlow = ai.defineFlow(
  {
    name: 'styleAdvisorFlow',
    inputSchema: StyleAdvisorInputSchema,
    outputSchema: StyleAdvisorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
