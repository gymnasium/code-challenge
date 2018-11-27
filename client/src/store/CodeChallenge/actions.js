/* eslint-disable import/prefer-default-export */

import * as types from './types';
import { Controlled } from 'react-codemirror2';

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
  const { userInputCode } = getState().codeChallenge;

  dispatch(notifyBeginGrading());

  try {
    const response = await window.fetch('/api/grading/grade', {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      method: 'post',
      body: JSON.stringify({
        inputCode: userInputCode,
        goalCode,
      }),

      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
    });
    const body = await response.json();

    if (response.ok) {
      const { grade } = body;

      if (grade) {
        dispatch(problemGraded(grade));
      }
    } else {
      // this is bad!
      throw new Error(JSON.stringify(body));
    }

    dispatch(notifyEndGrading());
  } catch (e) {
    throw new Error(e.message || e);
  }
};
