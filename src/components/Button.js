import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: solid 1px red;
`;

const Button = ({ label, onClick }) => (
  <StyledButton onClick={onClick}>{label}</StyledButton>
);

Button.propTypes = {
  /** Text shown on the button. */
  label: PropTypes.string.isRequired,
  /** Function passed to the button's 'onClick' event. */
  onClick: PropTypes.func.isRequired,
};

export default Button;
