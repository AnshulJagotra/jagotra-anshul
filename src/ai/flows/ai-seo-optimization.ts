'use server';

/**
 * @fileOverview A flow that generates SEO meta tags and OpenGraph images for blog posts.
 *
 * - generateSeoData - A function that generates SEO meta tags and OpenGraph images for a blog post.
 * - GenerateSeoDataInput - The input type for the generateSeoData function.
 * - GenerateSeoDataOutput - The return type for the generateSeoData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

const GenerateSeoDataInputSchema = z.object({
  title: z.string().describe('The title of the blog post.'),
  content: z.string().describe('The content of the blog post.'),
});

export type GenerateSeoDataInput = z.infer<typeof GenerateSeoDataInputSchema>;

const GenerateSeoDataOutputSchema = z.object({
  metaDescription: z.string().describe('The meta description for the blog post.'),
  metaKeywords: z.string().describe('The meta keywords for the blog post.'),
  openGraphImageUrl: z.string().describe('The URL of the OpenGraph image for the blog post.'),
});

export type GenerateSeoDataOutput = z.infer<typeof GenerateSeoDataOutputSchema>;

export async function generateSeoData(input: GenerateSeoDataInput): Promise<GenerateSeoDataOutput> {
  return generateSeoDataFlow(input);
}

const generateSeoDataPrompt = ai.definePrompt({
  name: 'generateSeoDataPrompt',
  input: {schema: GenerateSeoDataInputSchema},
  output: {schema: GenerateSeoDataOutputSchema},
  prompt: `You are an SEO expert. Generate SEO meta tags and an OpenGraph image URL for the following blog post.

Title: {{{title}}}
Content: {{{content}}}

Instructions:
1.  Write a concise and engaging meta description that accurately summarizes the blog post.
2.  Identify relevant meta keywords that will help the blog post rank higher in search engine results.
3.  Generate a URL for an OpenGraph image that visually represents the blog post.

Output:
Meta Description: {{metaDescription}}
Meta Keywords: {{metaKeywords}}
OpenGraph Image URL: {{openGraphImageUrl}}`,
});

const generateOpenGraphImagePrompt = ai.definePrompt({
  name: 'generateOpenGraphImagePrompt',
  input: {schema: GenerateSeoDataInputSchema},
  output: {schema: z.string().describe('The prompt for an OpenGraph image for the blog post.')},
  prompt: `You are a creative AI. Generate a prompt for an AI image generator to create an OpenGraph image for the following blog post.

Title: {{{title}}}
Content: {{{content}}}

Prompt: `,
});

const generateSeoDataFlow = ai.defineFlow(
  {
    name: 'generateSeoDataFlow',
    inputSchema: GenerateSeoDataInputSchema,
    outputSchema: GenerateSeoDataOutputSchema,
  },
  async input => {
    const {output: seoData} = await generateSeoDataPrompt(input);
    const {output: imagePrompt} = await generateOpenGraphImagePrompt(input);

    const { media } = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: imagePrompt!,
    });

    return {
      metaDescription: seoData!.metaDescription,
      metaKeywords: seoData!.metaKeywords,
      openGraphImageUrl: media?.url || 'https://picsum.photos/1200/630',
    };
  }
);
