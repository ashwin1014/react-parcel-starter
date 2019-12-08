import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home.Component';
// import PrivateRoute from './utils/RouteGuard';

const App = () => (
  <BrowserRouter>
    <div className='app-wrapper'>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <PrivateRoute path="/" authenticated={false} component={HomePage} exact /> */}
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
