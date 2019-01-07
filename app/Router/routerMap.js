import React from 'react';
import { Component } from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../containers/Home/index'
import Detail from '../containers/Detail';
import City from '../containers/City';
import Search from '../containers/Search';
import User from '../containers/User';
import NotFound from '../containers/404';
import TestApp from '../containers/index'

// const Root = () => (
//     <TestApp>
//       <BrowserRouter>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/detail" component={Detail} />
//           <Route exact path="/user" component={User} />
//           <Route exact path="/city" component={City} />
//           <Route exact path="/search" component={Search} />
//           <Route component={NotFound} />
          
//         </Switch>
//       </BrowserRouter>
//     </TestApp>
//   );

class Root extends React.Component{
    render(){
        return(
            <TestApp>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/user" component={User} />
          <Route exact path="/city" component={City} />
          <Route exact path="/search" component={Search} />
          <Route component={NotFound} />
          
        </Switch>
      </BrowserRouter>
    </TestApp>
        );
    }
}

  export default Root;