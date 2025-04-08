// src/sanity.js
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'j6pk80d8', // Get this from https://sanity.io/manage
  dataset: 'production',        // Or your dataset name
  apiVersion: '2025-04-08',     // Use today's date or schema's API version
  useCdn: true,
});
