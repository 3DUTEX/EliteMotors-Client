/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
// Imports Libs
import PropTypes from 'prop-types';
import React from 'react';

// Imports Modules
import { InputContainer } from './styled';

export default function CustomInput({ label, ...rest }) {
  return (
    <InputContainer>
      <input {...rest} required />
      <label>{label}</label>
    </InputContainer>
  );
}

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
};
