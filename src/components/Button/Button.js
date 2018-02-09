import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const styles = css`
  display: inline-block;
  position: relative;
  padding: 0.6rem 1.8rem;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: lowercase;
  text-decoration: none;
  line-height: 1;
  color: ${props =>
    props.kind === 'secondary'
      ? props.theme.colors.accent
      : props.theme.colors.primary};
  background-color: transparent;
  /* prettier-ignore */
  border: solid 2px ${props =>
    props.kind === 'secondary'
      ? props.theme.colors.accent
      : props.theme.colors.primary};
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
        ? props.theme.colors.accent
        : props.theme.colors.primary};
    border: solid 2px ${props =>
      props.kind === 'secondary'
        ? props.theme.colors.accent
        : props.theme.colors.primary};
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
          ? props.theme.colors.accent
          : props.theme.colors.primary};

      &::before {
        transform: scaleX(0);
      }
    }
  }
`;

const StyledButton = styled.button`
  ${styles};
`;

const StyledAnchor = styled.a`
  ${styles};
`;

const Button = ({ children, disabled, kind, href, onClick, type }) => {
  const button = (
    <StyledButton kind={kind} onClick={onClick} disabled={disabled} type={type}>
      {children}
    </StyledButton>
  );

  const anchor = (
    <StyledAnchor kind={kind} href={href} role="button">
      {children}
    </StyledAnchor>
  );

  return href ? anchor : button;
};

Button.defaultProps = {
  kind: 'primary',
  disabled: false,
  type: 'button',
};

Button.propTypes = {
  kind: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  href: PropTypes.string,
  /** Function passed to the button's 'onClick' event. */
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

export default Button;
