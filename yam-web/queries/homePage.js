export default `{
  homePage {
    firstName,
    lastName,
    home {
      ...homeDetails
    }
    aboutMe {
      ...aboutMeDetails
    }
    meta {
      id
      name
      value
    }
    counter {
      id
      number
      description
    }
    dynamicFields {
      __typename
      ... on ComponentHomePageServices {
        title
        description
        servicesList {
          id
          icon
          title
          description
        }
      }
      ... on ComponentHomePageSkills {
        title
        description
        buttonText
        buttonLink
        skillList {
          id
          skillName
          experty
        }
      }
      ... on ComponentHomePagePortfolio {
        title
        description
        portfolioList {
          id
          title
          description
          category
          portfolioLink
          videoLink
          portfolioImages {
            ...file
          }
        }
      }
      ... on ComponentHomePageTestimonial {
        title
        description
        testimonialList {
          id
          name
          testimonial
          companyName
          avatar {
            ...file
          }
        }
      }
    }
  }
}

fragment homeDetails on ComponentHomePageHome {
  content,
  buttonText,
  buttonLink,
  backgroundMedia {
    ...file
  }
}

fragment aboutMeDetails on ComponentHomePageAboutMe {
  content,
  buttonText,
  buttonLink,
  profilePicture {
    ...file
  }
}

fragment file on UploadFile {
  name,
  caption,
  formats,
  url
}`;
