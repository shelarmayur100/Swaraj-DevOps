'use server';

/**
 * @fileOverview A resource recommendation AI agent.
 *
 * - resourceRecommendation - A function that handles the resource recommendation process.
 * - ResourceRecommendationInput - The input type for the resourceRecommendation function.
 * - ResourceRecommendationOutput - The return type for the resourceRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResourceRecommendationInputSchema = z.object({
  skills: z
    .string()
    .describe('A comma separated list of the user skills.'),
  interests: z.string().describe('A comma separated list of the user project interests.'),
});
export type ResourceRecommendationInput = z.infer<typeof ResourceRecommendationInputSchema>;

const ResourceRecommendationOutputSchema = z.object({
  resources: z.array(z.string()).describe('A list of recommended resources (articles, tutorials, tools).'),
});
export type ResourceRecommendationOutput = z.infer<typeof ResourceRecommendationOutputSchema>;

export async function resourceRecommendation(input: ResourceRecommendationInput): Promise<ResourceRecommendationOutput> {
  return resourceRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'resourceRecommendationPrompt',
  input: {schema: ResourceRecommendationInputSchema},
  output: {schema: ResourceRecommendationOutputSchema},
  prompt: `You are a DevOps expert. You will recommend resources to users based on their skills and interests.

Skills: {{{skills}}}
Interests: {{{interests}}}

Recommend resources to the user. The resources should be relevant to the user's skills and interests.`,
});

const resourceRecommendationFlow = ai.defineFlow(
  {
    name: 'resourceRecommendationFlow',
    inputSchema: ResourceRecommendationInputSchema,
    outputSchema: ResourceRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
