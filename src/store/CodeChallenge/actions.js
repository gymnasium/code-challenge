/* eslint-disable import/prefer-default-export */

import * as types from './types';

export const codeUpdated = code => ({
  type: types.CODE_UPDATED,
  code,
});
