/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { noop } from '@utils/common';
import './Input.style.scss';

const Input = ({ type = 'text', onChange = noop, className, props }) => {
  return <input type={type} onChange={onChange} className={`input ${className}`} {...props} />;
};

export default Input;
