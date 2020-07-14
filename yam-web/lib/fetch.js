import fetch from 'isomorphic-unfetch';

export default async (url, query, variables) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();
  return json.data;
};
