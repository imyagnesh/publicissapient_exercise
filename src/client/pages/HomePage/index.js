import { connect } from 'react-redux';
import HomePage from './HomePage';
import { FETCH_NEWS, REQUEST, UP_VOTE, HIDE_HIT } from '../../../constants/actionTypes';
import { action } from '../../../utils';

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
