/* eslint-disable react/jsx-props-no-spreading */
import React, { Suspense, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Switch, Route, useLocation } from 'react-router-dom';

import Loader from '@sharedComponents/Loader/Loader';
import { Home, NotFound } from './Routes';
import Layout from './layout/layout';

const App = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <HelmetProvider>
      {/* Use Helmet wherever(any component) you need to change <head> tags */}
      <Helmet>
        <title>React Parcel App</title>
        <meta charSet='utf-8' />
        <meta name='description' content='React Starter Application built with Parcel Bundler and EsLint + Prettier integrated' />
      </Helmet>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path='/' render={(props) => <Home {...props} title={title} />} exact />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </HelmetProvider>
  );
};

export default App;
