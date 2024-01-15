// Imports Libs
import PropTypes from 'prop-types';
import React from 'react';

// Imports Modules
import { StepItemContainer } from './styled';

export default function StepItem({ Icon, title, desc }) {
  return (
    <StepItemContainer>
      <Icon className="icon" />
      <h2>{title}</h2>
      <p>{desc}</p>
    </StepItemContainer>
  );
}

// Prop Types expected
StepItem.propTypes = {
  Icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
