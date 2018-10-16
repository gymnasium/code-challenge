import * as types from './types';

const initialState = {
  userInputCode: '<h1>I ❤ Gymnasium</h1>',
  grade: undefined,
};

const CodeChallenge = (state = initialState, action) => {
  switch (action.type) {
    case types.CODE_UPDATED:
      return {
        ...state,
        userInputCode: action.code,
      };

    case types.PROBLEM_GRADED: {
      return {
        ...state,
        grade: action.grade,
      };
    }

    case types.RESET_CHALLENGE: {
      return initialState;
    }

    default:
      return state;
  }
};

export default CodeChallenge;
