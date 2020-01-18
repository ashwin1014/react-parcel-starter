/* eslint-disable react/jsx-props-no-spreading */
import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, NotFound } from './Routes';

const App = ({ title }) => (
  <div className='app-wrapper'>
    <BrowserRouter>
      <Suspense fallback={<div className='center'>Loading...</div>}>
        <Switch>
          <Route path='/' render={props => <Home {...props} title={title} />} exact />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </div>
);

export default App;
