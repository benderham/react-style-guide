import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: solid 1px red;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Button = ({ disabled, label, onClick, type }) => (
  <StyledButton type={type} onClick={onClick} disabled={disabled}>
    {label}
  </StyledButton>
);

Button.defaultProps = {
  disabled: false,
  type: 'button',
};

Button.propTypes = {
  disabled: PropTypes.bool,
  /** Text shown on the button. */
  label: PropTypes.string.isRequired,
  /** Function passed to the button's 'onClick' event. */
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

export default Button;
