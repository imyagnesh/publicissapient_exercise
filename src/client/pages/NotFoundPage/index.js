import React from 'react';
import PropTypes from 'prop-types';
import Status from '../../components/Status';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <Status code={404}>
      <div>
        <h1>Sorry, can’t find that.</h1>
      </div>
    </Status>
  );
};

NotFoundPage.propTypes = {
  staticContext: PropTypes.objectOf(PropTypes.any),
};

NotFoundPage.defaultProps = {
  staticContext: {},
};

export default NotFoundPage;
