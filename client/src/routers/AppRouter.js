import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from '../components/Nav';
import DashBoard from '../components/DashBoard';
import PostsView from '../components/PostsView';
import EditPost from '../components/EditPost';
import NotFound from '../components/NotFound';
import Footer from '../components/Footer';

/*
import AddBook from '../components/AddBook';
*/


const AppRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Nav />
            <Switch>
                <Route exact path="/" component={DashBoard}  />
                <Route exact path="/posts" component={PostsView} />             
                <Route path="/posts/:id" component={EditPost} />    
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;