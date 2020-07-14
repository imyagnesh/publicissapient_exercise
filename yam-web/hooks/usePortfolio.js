import useSWR from 'swr';

import fetch from '@lib/fetch';

function usePortfolio() {
  const API = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`;
  const query = `
  {
    projects(start: 0, limit: 9, sort: "created_at:desc") {
      id
      projectName
      Description
      link
      category
      role
      video {
        ...file
      }
      images {
        ...file
      }
    }   
  }
  
  fragment file on UploadFile {
    name
    caption
    formats
    url
  }
  `;
  return useSWR([API, query], fetch);
}

export default usePortfolio;
