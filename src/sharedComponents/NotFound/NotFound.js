import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className='center'>
    <p>The Page you are looking for does not exist</p>
    <br />
    <button type='button'>
      <Link to='/' style={{ textDecoration: 'none', color: '#00A8C3' }}>
        Go Home
      </Link>
    </button>
  </div>
);

export default NotFound;
