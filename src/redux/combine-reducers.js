import { combineReducers } from 'redux';
import { RepoReducer } from './modules/repoData';
import { FilterReducer } from './modules/filterController';

export default combineReducers({
  repo: RepoReducer,
  filter: FilterReducer,
});
