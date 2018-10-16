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

export const gradeProblem = (input1, input2) => (dispatch, getState) => {
  dispatch(notifyBeginGrading());
  setTimeout(() => {
    // Yay! Can invoke sync or async actions with `dispatch`
    dispatch(notifyEndGrading());
  }, 1000);
};
