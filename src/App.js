/* eslint-disable react/jsx-props-no-spreading */
import React, { Suspense } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, NotFound } from './Routes';

const App = ({ title }) => (
  <HelmetProvider>
    <div className='app-wrapper'>
    {/* Use Helmet wherever(any component) you need to change <head> tags */}
    <Helmet>
      <title>React Parcel App</title>
      <meta charSet="utf-8" />
      <meta name="description" content="React Starter Application built with Parcel Bundler and EsLint + Prettier integrated" />
    </Helmet>
    <BrowserRouter>
      <Suspense fallback={<div className='center'>Loading...</div>}>
        <Switch>
          <Route path='/' render={props => <Home {...props} title={title} />} exact />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
    </div>
  </HelmetProvider>
);

export default App;
