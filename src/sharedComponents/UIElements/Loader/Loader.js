import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-unresolved
import './Loader.style.scss';

const Loader = ({ message = '', className = '' }) => {
  return (
    <div className={`loading-container ${className}`}>
      <div className='loader'>
        <div />
        <div />
        <div />
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

Loader.propTypes = {
  // eslint-disable-next-line react/require-default-props
  message: PropTypes.string
};

export default Loader;
