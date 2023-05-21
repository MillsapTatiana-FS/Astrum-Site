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

export const products = await client
    .fetch('*[_type == "product"]')
    .then(products => products)
    .catch(err => console.error(err));

export const bannerData = await client
    .fetch('*[_type == "banner"]')
    .then(bannerData => bannerData)
    .catch(err => console.error(err));

// return {
//     props: {
//         products,
//         bannerData,
//     },

