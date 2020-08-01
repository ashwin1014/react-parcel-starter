import { lazy } from 'react';

export const Home = lazy(() => import('./pages/Home/Home.Container'));
export const NotFound = lazy(() => import('./sharedComponents/NotFound/NotFound'));
