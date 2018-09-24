import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from '../components/Nav';
import DashBoard from '../components/DashBoard';
import NotFound from '../components/NotFound';
import Footer from '../components/Footer';
/*
import AddBook from '../components/AddBook';
import EditBook from '../components/EditBook';

*/


const AppRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Nav />
            <Switch>
                <Route path="/" component={DashBoard} exact={true} />              
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;