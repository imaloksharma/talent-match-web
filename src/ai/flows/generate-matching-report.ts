// src/ai/flows/generate-matching-report.ts
'use server';
/**
 * @fileOverview Generates a matching report summarizing candidate strengths and fit based on challenge performance.
 *
 * - generateMatchingReport - A function that generates the matching report.
 * - GenerateMatchingReportInput - The input type for the generateMatchingReport function.
 * - GenerateMatchingReportOutput - The return type for the generateMatchingReport function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateMatchingReportInputSchema = z.object({
  challengeId: z.string().describe('The ID of the challenge.'),
  candidateSubmission: z.string().describe('The candidate submission for the challenge.'),
});
export type GenerateMatchingReportInput = z.infer<
  typeof GenerateMatchingReportInputSchema
>;

const GenerateMatchingReportOutputSchema = z.object({
  summary: z.string().describe('A summary of the candidate strengths and fit.'),
  skillMatch: z.number().describe('The skill match percentage.'),
  personality: z.string().describe('The personality assessment.'),
  cultureFit: z.string().describe('The culture fit assessment.'),
  tech: z.string().describe('The tech assessment.'),
  strengths: z.array(z.string()).describe('A list of strengths.'),
  feedback: z.array(z.string()).describe('A list of feedback summaries.'),
  score: z.string().describe('The match score and percentile.'),
});
export type GenerateMatchingReportOutput = z.infer<
  typeof GenerateMatchingReportOutputSchema
>;

export async function generateMatchingReport(
  input: GenerateMatchingReportInput
): Promise<GenerateMatchingReportOutput> {
  return generateMatchingReportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMatchingReportPrompt',
  input: {
    schema: z.object({
      challengeId: z.string().describe('The ID of the challenge.'),
      candidateSubmission: z
        .string()
        .describe('The candidate submission for the challenge.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('A summary of the candidate strengths and fit.'),
      skillMatch: z.number().describe('The skill match percentage.'),
      personality: z.string().describe('The personality assessment.'),
      cultureFit: z.string().describe('The culture fit assessment.'),
      tech: z.string().describe('The tech assessment.'),
      strengths: z.array(z.string()).describe('A list of strengths.'),
      feedback: z.array(z.string()).describe('A list of feedback summaries.'),
      score: z.string().describe('The match score and percentile.'),
    }),
  },
  prompt: `You are an AI assistant designed to generate matching reports for candidates based on their challenge performance.

  Analyze the candidate's submission for challenge ID {{{challengeId}}} and provide a comprehensive matching report.

  Candidate Submission: {{{candidateSubmission}}}

  Consider the following aspects:

  - Summary: A brief overview of the candidate's strengths and overall fit for the role.
  - Skill Match: A percentage indicating the alignment of the candidate's skills with the challenge requirements.
  - Personality: An assessment of the candidate's personality traits based on their submission.
  - Culture Fit: An evaluation of the candidate's compatibility with the company culture.
  - Tech: An assessment of the candidate's technical skills demonstrated in the submission.
  - Strengths: A list of the candidate's key strengths highlighted in the submission.
  - Feedback: Auto-generated summaries of feedback based on the submission.
  - Score: A match score and percentile indicating the candidate's overall performance.

  Provide the output in JSON format.
`,
});

const generateMatchingReportFlow = ai.defineFlow<
  typeof GenerateMatchingReportInputSchema,
  typeof GenerateMatchingReportOutputSchema
>({
  name: 'generateMatchingReportFlow',
  inputSchema: GenerateMatchingReportInputSchema,
  outputSchema: GenerateMatchingReportOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});
