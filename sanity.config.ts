import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes';

// Use environment variables for projectId and dataset
// Fallback to hardcoded values if env vars are missing
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || '9zo4k8jb';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'Aditya Sarda Studio',

  projectId,
  dataset,
  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
