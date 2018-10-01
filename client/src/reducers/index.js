import { combineReducers } from 'redux';
import posts from './reducer_posts';
import modal from './reducer_modal';

export default combineReducers({
  posts,
  modal
});