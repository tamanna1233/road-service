// src/sanity.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { config } from './config';
export const client = createClient({
  projectId: config.productId, // Get this from https://sanity.io/manage
  dataset: config.dataset,        // Or your dataset name
  apiVersion: '2025-04-08',     // Use today's date or schema's API version
  useCdn: true,
  token: config.token, 
});
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}