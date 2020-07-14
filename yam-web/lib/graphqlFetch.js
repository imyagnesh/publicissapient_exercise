import { request } from 'graphql-request';

const endpoint = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`;

const fetcher = async (...args) => {
  const data = await request(endpoint, ...args);
  return data;
};

export default fetcher;
