import * as types from './types';

const initialState = {
  code: '<h1>I ❤️ Gymnasium</h1>',
};

const CodeChallenge = (state = initialState, action) => {
  switch (action.type) {
    case types.CODE_UPDATED:
      return {
        ...state,
        code: action.code,
      };

    default:
      return state;
  }
};

export default CodeChallenge;
