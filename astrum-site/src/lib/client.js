import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'wzdi8hxu',
    dataset: 'production',
    apiVersion: '2023-05-20',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// uses GROQ to query content: https://www.sanity.io/docs/groq

const products = await client
    .fetch('*[_type == "product"]');
    .then(products => products)
    .catch(err => console.error(err));
