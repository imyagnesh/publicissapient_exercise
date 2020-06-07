import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import {} from 'recharts';
import { FETCH_NEWS, REQUEST, UP_VOTE, HIDE_HIT } from '../../../constants/actionTypes';
import { action } from '../../../utils';
import ResponsiveTable from '../../components/ResponsiveTable/ResponsiveTable';
import NewsDetails from '../../components/NewsDetails/NewsDetails';
import Divider from '../../components/Divider/Divider';

import { ReactComponent as UpIcon } from '../../assets/icons/arrow_drop_up.svg';

const Rechart = loadable.lib(() => import(/* webpackChunkName: 'recharts' */ 'recharts'));

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
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadNews(page || 1);
  }, [loadNews, page]);

  useEffect(() => {
    const data =
      news?.hits?.reduce((p, c) => {
        if (!c.hide) {
          return [
            ...p,
            {
              comments: c.num_comments || 0,
              voteCount: c.points || 0,
              upVote: (
                <div
                  className="btn"
                  aria-label={`upVote for ${c.objectID}`}
                  role="button"
                  tabIndex={0}
                  data-testid={`upvote-${c.objectID}`}
                  onKeyDown={() => upVote(c.objectID)}
                  onClick={() => upVote(c.objectID)}
                >
                  <UpIcon width={32} height={32} fill="#979797" />
                </div>
              ),
              newsDetails: (
                <NewsDetails hit={c} onHide={hideHit} data-testid={`newsDetails-${c.objectID}`} />
              ),
              objectID: c.objectID,
            },
          ];
        }
        return p;
      }, []) || [];
    setNewsList(data);
  }, [news, hideHit, upVote]);

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
            <ResponsiveTable columns={cols} rows={newsList} data-testid="responsivetable" />
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
                <Rechart>
                  {({
                    LineChart,
                    CartesianGrid,
                    XAxis,
                    YAxis,
                    Tooltip,
                    Line,
                    Label,
                    ResponsiveContainer,
                  }) => (
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart
                        data={newsList}
                        margin={{ top: 10, right: 10, left: 20, bottom: 100 }}
                      >
                        <CartesianGrid vertical={false} />
                        <XAxis
                          dataKey="objectID"
                          angle={-90}
                          textAnchor="end"
                          verticalAnchor="middle"
                        >
                          <Label value="ID" position="bottom" offset={50} />
                        </XAxis>
                        <YAxis label={{ value: 'Votes', angle: -90, position: 'left' }} />
                        <Tooltip />
                        <Line
                          dataKey="voteCount"
                          stroke="#366396"
                          strokeWidth={4}
                          dot={{ strokeWidth: 6, r: 3 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  )}
                </Rechart>
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
    upVote: (payload) => dispatch(action(`${UP_VOTE}_${REQUEST}`, payload)),
    hideHit: (payload) => dispatch(action(`${HIDE_HIT}_${REQUEST}`, payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
