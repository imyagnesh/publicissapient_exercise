import { FETCH_NEWS, SUCCESS } from '../constants/actionTypes';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case `${FETCH_NEWS}_${SUCCESS}`:
      return payload;

    default:
      return state;
  }
};
