import React from 'react';
import { Component } from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../containers/Home/index'
import Detail from '../containers/Detail';
import City from '../containers/City';
import Search from '../containers/Search';
import User from '../containers/User';
import NotFound from '../containers/404';


class RouterMap extends React.Component{
   render(){
       return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route path='/' component={Home} exact />
                        <Route path='/city' component={City}  />
                        <Route path='/detail' component={Detail} />
                        <Route path='/search' component={Search} />
                        <Route path='/user' component={User} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </div>
            </HashRouter>



       );
   }
}

export default RouterMap;