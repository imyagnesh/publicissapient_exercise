/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Label,
  ResponsiveContainer,
} from 'recharts';
import { FETCH_NEWS, REQUEST } from '../../../Shared/constants/actionTypes';
import { action } from '../../../Shared/utils';
import ResponsiveTable from '../../components/ResponsiveTable';
import NewsDetails from '../../components/NewsDetails';
import Divider from '../../components/Divider';

import UpIcon from '../../assets/icons/arrow_drop_up.svg';

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
  match: {
    params: { page },
  },
}) => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    loadNews(page || 1);
  }, [loadNews, page]);

  useEffect(() => {
    const data =
      news?.hits?.map((x) => ({
        comments: x.num_comments || 0,
        voteCount: x.points || 0,
        upVote: <UpIcon width={32} height={32} fill="#979797" />,
        newsDetails: <NewsDetails hit={x} />,
      })) || [];
    setNewsList(data);
  }, [news]);

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
          <h2>Loading....</h2>
        </When>
        <When condition={error}>
          <h2>{error}</h2>
        </When>
        <Otherwise>
          <div
            style={{
              background: '#F5F5EF',
            }}
          >
            <ResponsiveTable columns={cols} rows={newsList} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                color: '#EC702D',
                fontWeight: 'bold',
                fontSize: '1rem',
                padding: 10,
              }}
            >
              <span className="btn">Previous</span>
              <span style={{ margin: '0 5px' }}>|</span>
              <span className="btn">Next</span>
            </div>
            <Divider />
            <If condition={news.hits}>
              <div style={{ margin: 10 }}>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={news.hits}
                    margin={{ top: 10, right: 10, left: 20, bottom: 100 }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="objectID" angle={-90} textAnchor="end" verticalAnchor="middle">
                      <Label value="ID" position="bottom" offset={50} />
                    </XAxis>
                    <YAxis label={{ value: 'Votes', angle: -90, position: 'left' }} />
                    <Tooltip />
                    <Line
                      dataKey="points"
                      stroke="#366396"
                      strokeWidth={4}
                      dot={{ strokeWidth: 6, r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
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
