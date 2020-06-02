/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { FETCH_NEWS, REQUEST } from '../../../Shared/constants/actionTypes';
import { action } from '../../../Shared/utils';

const HomePage = ({
  news,
  loadNews,
  loading,
  error,
  match: {
    params: { page },
  },
}) => {
  console.log('news', news);
  useEffect(() => {
    loadNews(page || 1);
  }, [loadNews, page]);

  const head = () => {
    return (
      <Helmet key={Math.random()}>
        <title>Search Heacker News</title>
        <meta property="og:title" content="Search Heacker News" />
        <meta
          name="description"
          content="Hacker News Search, millions articles and comments at your fingertips."
        />
        <meta name="robots" content="Hacker, News" />
        <link rel="canonical" href="https://hn.algolia.com/" />
      </Helmet>
    );
  };

  if (loading) {
    return <h2>Loading....</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      {head()}
      <Choose>
        <When condition={loading}>
          <h2>Loading....</h2>
        </When>
        <When condition={error}>
          <h2>{error}</h2>
        </When>
        <Otherwise>
          <div className="row">hello</div>
        </Otherwise>
      </Choose>
    </>
  );
};

HomePage.propTypes = {
  news: PropTypes.shape({
    hits: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
  }).isRequired,
  loadNews: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

HomePage.defaultProps = {
  error: '',
};

const mapStateToProps = (state) => {
  return {
    news: state.news,
    loading: !!state.loading[FETCH_NEWS],
    error: state.erros[FETCH_NEWS],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadNews: (payload) => dispatch(action(`${FETCH_NEWS}_${REQUEST}`, payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
