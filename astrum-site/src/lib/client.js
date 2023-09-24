import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: "wzdi8hxu",
    dataset: 'production',
    apiVersion: '2023-05-20',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// uses GROQ to query content: https://www.sanity.io/docs/groq

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query)
        .then(products => products)
        .catch(err => console.error(err));
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery)
        .then(bannerData => bannerData)
        .catch(err => console.error(err));

    return {
        props: {
            products,
            bannerData,
        },
    }
};
