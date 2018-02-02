import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: lowercase;
  color: ${props => props.theme.colors.jungleGreen};
  background-color: transparent;
  border: solid 2px ${props => props.theme.colors.jungleGreen};
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transform: perspective(1px) translateZ(0);
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${props => props.theme.colors.jungleGreen};
    border: solid 2px ${props => props.theme.colors.jungleGreen};
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform 0.3s ease-in-out;
    content: '';
    z-index: -1;
  }

  &:hover,
  &:focus,
  &:active {
    color: ${props => props.theme.colors.white};

    &::before {
      transform: scaleX(1);
    }
  }

  &:disabled {
    cursor: default;
    opacity: 0.3;
  }
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
