import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;

if (!projectId) {
  console.error('Sanity Project ID is missing! Check your environment variables (VITE_SANITY_PROJECT_ID).');
}

export const client = createClient({
  projectId: projectId || '9zo4k8jb',
  dataset: dataset || 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-03-20', // use current date (YYYY-MM-DD) to target the latest API version
  token: import.meta.env.VITE_SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
