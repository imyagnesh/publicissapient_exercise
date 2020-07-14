/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-restricted-globals */
// import { useEffect } from 'react';
import PropTypes from 'prop-types';
import '@styles/index.css';
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import { library } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  faChalkboardTeacher,
  faMobileAlt,
  faLaptopCode,
  faCode,
  faServer,
  faGlobe,
  faPlay,
  faExpand,
  faCompress,
  faLink,
  faTimes,
  faArrowRight,
  faCircle,
  faChevronRight,
  faChevronLeft,
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';

import { faStar as faStartAlt } from '@fortawesome/free-regular-svg-icons';

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithubAlt,
  faSkype,
  faYoutube,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faStar,
  faStartAlt,
  faStarHalfAlt,
  faCircle,
  faArrowRight,
  faLinkedin,
  faGlobe,
  faLink,
  faServer,
  faChalkboardTeacher,
  faLaptopCode,
  faCode,
  faMobileAlt,
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithubAlt,
  faSkype,
  faYoutube,
  faPlay,
  faCompress,
  faExpand,
  faTimes,
  faChevronRight,
  faChevronLeft,
);

// config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
