import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import FormOne from './components/FormOne';
import FormTwo from './components/FormTwo';
import FormThree from './components/FormThree';

class Routes extends Component {

    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/formthree" component={FormThree} />
                    <Route path="/formtwo" component={FormTwo} />
                    <Route path="/" component={FormOne} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
