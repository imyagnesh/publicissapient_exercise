import useSWR from 'swr';

import fetch from '@lib/fetch';

function useResumePage() {
  const API = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`;
  const query = `
  {
    resumePage {
      backgroundMedia {
        ...file
      }
      content
      buttonText
      resume {
        ...file
      }
    }
    skills {
      id
      name
      ratting
      logo {
        ...file
      }
      link
    }
    certifications {
      id
      name
      issuingOrganization {
        name
      }
      issueDate
      expirationDate
      neverExpire
    }
    workExperiences {
      id
      Title
      employmentType
      location
      currentlyWorking
      startDate
      endDate
      description
      company {
        name
        link
      }
    }
    achievements {
      id
      text
    }
    educationDetails {
      id
      degree
      studyField
      startDate
      endDate
      grade
      description
      link
      logo {
        ...file
      }
      school
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

export default useResumePage;
