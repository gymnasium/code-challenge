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

export const gradeProblem = goalCode => async (dispatch, getState) => {
  const { code } = getState().codeChallenge;

  dispatch(notifyBeginGrading());

  try {
    const response = await window.fetch('/api/grading/grade');
    const body = await response.json();
    const { grade } = body;

    if (grade) {
      dispatch(problemGraded(grade));
    }

    dispatch(notifyEndGrading());
  } catch (e) {
    throw new Error(e.message || e);
  }
};
