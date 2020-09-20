/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { noop } from '@utils/common';
import './Button.style.scss';

const Button = ({ title = '', onClick = noop, btnType = 'primary', className, disabled = false, children, props }) => {
  return (
    <button onClick={onClick} type='button' disabled={disabled} className={`button ${btnType} ${className && className}`} {...props}>
      {title || children}
    </button>
  );
};

export default Button;
