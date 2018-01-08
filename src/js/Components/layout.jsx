import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Error404 } from './error404.jsx';
import { Dashboard } from './dashboard';
import { Home } from './home.jsx';

export class Layout extends React.Component{
    
    render(){
        return(
            <BrowserRouter>
                <div className="container-fluid no-gutters px-0">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/dashboard' component={Dashboard} />
                        <Route component={Error404} />
                    </Switch>
                </div>
            </BrowserRouter>
            );
    }
    
}