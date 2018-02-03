import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  padding: 0.6rem 1.8rem;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: lowercase;
  line-height: 1;
  color: ${props =>
    props.kind === 'secondary'
      ? props.theme.colors.medium
      : props.theme.colors.bright};
  background-color: transparent;
  border: solid 2px
    ${props =>
      props.kind === 'secondary'
        ? props.theme.colors.medium
        : props.theme.colors.bright};
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transform: perspective(1px) translateZ(0);
  transition: color 0.3s ease-out;
  cursor: pointer;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${props =>
      props.kind === 'secondary'
        ? props.theme.colors.medium
        : props.theme.colors.bright};
    border: solid 2px
      ${props =>
        props.kind === 'secondary'
          ? props.theme.colors.medium
          : props.theme.colors.bright};
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform 0.3s ease-out;
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

    &:hover,
    &:focus,
    &:active {
      color: ${props =>
        props.kind === 'secondary'
          ? props.theme.colors.medium
          : props.theme.colors.bright};

      &::before {
        transform: scaleX(0);
      }
    }
  }
`;

const Button = ({ kind, disabled, label, onClick, type }) => (
  <StyledButton kind={kind} type={type} onClick={onClick} disabled={disabled}>
    {label}
  </StyledButton>
);

Button.defaultProps = {
  kind: 'primary',
  disabled: false,
  type: 'button',
};

Button.propTypes = {
  kind: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  /** Text shown on the button. */
  label: PropTypes.string.isRequired,
  /** Function passed to the button's 'onClick' event. */
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

export default Button;
