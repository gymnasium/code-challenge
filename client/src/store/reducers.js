import { combineReducers } from 'redux';
import CodeChallenge from './CodeChallenge/reducer';

export default combineReducers({
  codeChallenge: CodeChallenge,
});
