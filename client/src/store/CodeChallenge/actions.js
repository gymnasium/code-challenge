/* eslint-disable import/prefer-default-export */

import * as types from './types';

export const codeUpdated = code => ({
  type: types.CODE_UPDATED,
  code,
});

const notifyBeginGrading = () => ({
  type: types.NOTIFY_BEGIN_GRADING,
});

const notifyEndGrading = () => ({
  type: types.NOTIFY_END_GRADING,
});

const problemGraded = grade => ({
  type: types.PROBLEM_GRADED,
  grade,
});

export const resetChallenge = () => ({
  type: types.RESET_CHALLENGE,
});

export const gradeProblem = goalCode => (dispatch, getState) => {
  const { code } = getState().codeChallenge;

  dispatch(notifyBeginGrading());

  setTimeout(() => {
    // Yay! Can invoke sync or async actions with `dispatch`
    dispatch(notifyEndGrading());

    if (goalCode === code) {
      dispatch(problemGraded(100));
    }
  }, 1000);
};
