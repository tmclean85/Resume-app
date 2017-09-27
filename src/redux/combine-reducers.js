import { combineReducers } from 'redux';
import { RepoReducer } from './modules/repoData';

export default combineReducers({
  repo: RepoReducer,
});
