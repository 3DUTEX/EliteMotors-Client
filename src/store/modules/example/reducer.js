import * as types from '../types';

const initalState = { count: 0 };

function reducer(state = initalState, action) {
  switch (action.type) {
    case types.COUNT_INCREMENT: {
      const newState = { ...state };
      newState.count++;
      return newState;
    }

    // eslint-disable-next-line no-fallthrough
    default: { return state; }
  }
}

export default reducer;