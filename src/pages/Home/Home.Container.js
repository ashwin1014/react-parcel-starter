import React from 'react';
import locale from './localization/Home.localization';
import './Home.style.scss';

const LOCALIZE = locale.STRINGS;

const Home = ({ title }) => {
  return (
    <div>
      <h2 className='center'>{title}</h2>
      <h4>{LOCALIZE.Title} Page</h4>
    </div>
  );
};

export default Home;
