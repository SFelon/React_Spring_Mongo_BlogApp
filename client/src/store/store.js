import { createStore, applyMiddleware } from "redux";
import posts from '../reducers/reducer_posts';
import thunk from 'redux-thunk';

export default () => {
    return createStore(posts, applyMiddleware(thunk));
};