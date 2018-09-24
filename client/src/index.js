import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/store';
import { getPosts } from './actions/action_posts';
import registerServiceWorker from './registerServiceWorker';


import { Provider } from 'react-redux';

const store = getAppStore();

const template = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

store.dispatch(getPosts()).then(() => {
    ReactDOM.render(template, document.getElementById('root'));
});

registerServiceWorker();