/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
// Imports Libs
import PropTypes from 'prop-types';
import React from 'react';

// Imports Modules
import { InputContainer } from './styled';

export default function CustomInput({ label, reference, type }) {
  return (
    <InputContainer>
      <input type={type} ref={reference} required />
      <label>{label}</label>
    </InputContainer>
  );
}

CustomInput.defaultProps = {
  type: 'text',
};

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  reference: PropTypes.shape().isRequired,
  type: PropTypes.string,
};
