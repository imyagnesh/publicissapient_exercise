/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const NextGoogleFont = ({ face }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://ajax.googleapis.com/" />
      </Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
var WebFontConfig = {
	google: {families: [ '${face}' ]}
};
(function() {
	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
})();
			`,
        }}
      />
    </>
  );
};

NextGoogleFont.propTypes = {
  face: PropTypes.string.isRequired,
};

export default NextGoogleFont;
