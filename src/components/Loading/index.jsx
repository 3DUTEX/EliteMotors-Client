import React from 'react';

import PropTypes from 'prop-types';

import { LoadingDiv } from './styled';

export default function Loading({ isBlock }) {
  return (
    <LoadingDiv isBlock={isBlock}>
      <div className="loading" />
    </LoadingDiv>
  );
}

Loading.defaultProps = {
  isBlock: false,
};

Loading.propTypes = {
  isBlock: PropTypes.bool,
};
