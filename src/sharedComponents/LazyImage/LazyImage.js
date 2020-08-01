import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { PLACEHOLDER_IMG } from '@assets/images';

const LazyImage = ({ src, alt, height = '100%', width = '100%', visibleByDefault = false, className = '', placeholderSrc = PLACEHOLDER_IMG }) => {
  return (
    <LazyLoadImage
      placeholderSrc={placeholderSrc}
      wrapperClassName={`${className} img-wrapper`}
      threshold={100}
      alt={alt}
      effect='blur'
      src={src}
      height={height}
      width={width}
      visibleByDefault={visibleByDefault}
    />
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default LazyImage;
