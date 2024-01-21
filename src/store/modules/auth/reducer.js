import * as types from '../types';

const initalState = {
  token: '',
  user: {},
  isLoggedIn: false,
  isLoading: false,
};

// eslint-disable-next-line default-param-last
function reducer(state = initalState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.LOGIN_SUCCESS: {
      const { payload } = action;
      const newState = {
        token: payload.token,
        user: payload.user,
        isLoggedIn: true,
        isLoading: false,
      };
      return newState;
    }

    case types.LOGIN_FAILURE: {
      return initalState;
    }

    case types.CHANGE_LOADING_AUTH: {
      const { payload } = action;
      const newState = { ...state };
      if (payload.isLoading === true || payload.isLoading === false) {
        newState.isLoading = payload.isLoading;
      }

      return newState;
    }

    // eslint-disable-next-line no-fallthrough
    default: { return state; }
  }
}

export default reducer;
