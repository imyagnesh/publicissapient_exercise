import { FETCH_NEWS, SUCCESS, UP_VOTE, HIDE_HIT } from '../../constants/actionTypes';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case `${FETCH_NEWS}_${SUCCESS}`:
      return payload;

    case `${UP_VOTE}_${SUCCESS}`:
      return payload;

    case `${HIDE_HIT}_${SUCCESS}`:
      return payload;

    default:
      return state;
  }
};
