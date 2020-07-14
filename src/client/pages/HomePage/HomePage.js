import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import ResponsiveTable from '../../components/ResponsiveTable/ResponsiveTable';
import Divider from '../../components/Divider/Divider';
import RechartLine from '../../components/RechartLine';
import useNewsList from './useNewsList';

import './HomePage.css';

const cols = {
  comments: { title: 'Comments', style: { width: '5%' } },
  voteCount: { title: 'Vote Count', style: { width: '5%' } },
  upVote: { title: 'UpVote', style: { width: '5%' } },
  newsDetails: {
    title: 'News Details',
    style: { width: '85%', textAlign: 'left' },
    rowStyle: { textAlign: 'left' },
  },
};

const HomePage = ({
  news,
  loading,
  loadNews,
  error,
  upVote,
  hideHit,
  match: {
    params: { page },
  },
  history: { push },
}) => {
  const { newsList } = useNewsList({ news, upVote, hideHit });

  useEffect(() => {
    window.scrollTo(0, 0);
    loadNews(page || 1);
  }, [loadNews, page]);

  const previous = () => {
    if (page && page !== 1) {
      const prevPage = Number(page) - 1;
      push(`/${prevPage === 1 ? '' : prevPage}`);
    }
  };

  const next = () => {
    push(`/${Number(page || 1) + 1}`);
  };

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

  return (
    <>
      {head()}
      <Choose>
        <When condition={loading}>
          <h2 data-testid="h2loading">Loading....</h2>
        </When>
        <When condition={error}>
          <h2 data-testid="h2error">{error}</h2>
        </When>
        <When condition={news.hits && news.hits.length <= 0}>
          <h2 data-testid="norecords">No Records Available</h2>
        </When>
        <Otherwise>
          <div
            style={{
              background: '#F5F5EF',
            }}
            data-testid="container"
          >
            <ResponsiveTable columns={cols} rows={newsList} data-testid="responsiveable" />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                color: '#bf4808',
                fontWeight: 'bold',
                fontSize: '1rem',
                padding: 10,
              }}
            >
              <If condition={page && page !== 1}>
                <span
                  className="btn"
                  aria-label="Previous"
                  role="button"
                  tabIndex={0}
                  onKeyDown={previous}
                  onClick={previous}
                  data-testid="previousbtn"
                >
                  Previous
                </span>
              </If>
              <If condition={page && page > 1 && page < news.nbPages - 1}>
                <span style={{ margin: '0 5px' }}>|</span>
              </If>
              <If condition={!page || page < news.nbPages - 1}>
                <span
                  className="btn"
                  aria-label="Next"
                  role="button"
                  tabIndex={0}
                  onKeyDown={next}
                  onClick={next}
                  data-testid="nextbtn"
                >
                  Next
                </span>
              </If>
            </div>
            <Divider />
            <If condition={newsList.length > 0}>
              <div style={{ margin: 10 }}>
                <RechartLine newsList={newsList} xDataKey="objectID" yDataKey="voteCount" />
              </div>
              <Divider />
            </If>
          </div>
        </Otherwise>
      </Choose>
    </>
  );
};

HomePage.propTypes = {
  news: PropTypes.shape({
    hits: PropTypes.array,
    page: PropTypes.number,
    nbPages: PropTypes.number,
  }).isRequired,
  loadNews: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  upVote: PropTypes.func.isRequired,
  hideHit: PropTypes.func.isRequired,
};

HomePage.defaultProps = {
  error: '',
};

export default HomePage;
