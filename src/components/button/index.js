import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled, { css } from 'styled-components'
import Settings from '../../styles/settings'

const Container = styled(Link)`
  display: inline-block;
  padding: .8em 6em;
  border-radius: 100px;
  background-color: ${Settings.colors.greenColor};
  color: ${Settings.colors.whiteColor};
  font-size: 100%;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: background-color ${Settings.sizes.sec} ease-in-out;
  box-shadow: 0 0 1rem ${Settings.colors.blackClearColor};

  &:hover {
    background-color: ${Settings.colors.greenShineColor};
  }

  &:disabled {
    background: ${Settings.colors.grayColor};
  }

  ${props => props.red && css`
    background-color: ${Settings.colors.redColor};

    &:hover {
      background-color: ${Settings.colors.redShineColor};
    }
  `}
`;

const Button = ({ children, to, title, red }) => (
  <Container to={ to } title={ title } red={ red }>{children}</Container>
)

Button.propTypes = {
  red: PropTypes.string,
  to: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.isRequired,
}

export default Button
