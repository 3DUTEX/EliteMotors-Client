// Imports Libs
import PropTypes from 'prop-types';
import React from 'react';

// Imports Modules
import { LoadingDiv } from './styled';

export default function Loading({ blocked }) {
  return (
    <LoadingDiv blocked={blocked}>
      <div className="loading" />
    </LoadingDiv>
  );
}

Loading.defaultProps = {
  blocked: false,
};

Loading.propTypes = {
  blocked: PropTypes.bool,
};
