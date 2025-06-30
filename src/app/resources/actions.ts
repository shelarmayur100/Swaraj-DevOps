'use server';

import { resourceRecommendation } from '@/ai/flows/resource-recommendation';
import { z } from 'zod';

const recommendationSchema = z.object({
  skills: z.string().min(3, 'Please enter at least one skill.'),
  interests: z.string().min(3, 'Please enter at least one interest.'),
});

export type FormState = {
  message: string;
  recommendations?: string[];
  fields?: Record<string, string>;
  issues?: string[];
};

export async function getRecommendations(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = recommendationSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: 'Invalid form data.',
      issues,
      fields: {
        skills: data.get('skills')?.toString() ?? '',
        interests: data.get('interests')?.toString() ?? '',
      }
    };
  }

  try {
    const { skills, interests } = parsed.data;
    const result = await resourceRecommendation({ skills, interests });
    if (result.resources && result.resources.length > 0) {
      return {
        message: 'Here are your recommendations:',
        recommendations: result.resources,
      };
    } else {
        return { message: "Couldn't find any recommendations. Try different keywords." };
    }
  } catch (error) {
    console.error(error);
    return { message: 'An error occurred while fetching recommendations.' };
  }
}
