import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled, { css } from 'styled-components'
import Settings from '../../styles/settings'
import { Media } from '../../styles/mixins'

import HeaderNav from './nav'

const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;

  ${Media.desktop`
    padding: 1rem 0;
  `}
`;

const Inner = styled.div`

  ${Media.desktop`
    display: flex;
    padding: 0 4rem;
  `}
`;

const LogoLink = styled(Link)`
  display: block;
  padding: 1rem 0;

  ${Media.desktop`
    margin-right: 1rem;
  `}
`;

const LogoContainer = styled.span`
position: relative;
  display: block;
  width: ${ 19 * 1 }px;
  height: ${ 24 * 1 }px;
  margin: 0 auto;

  ${Media.desktop`
    width: ${ 110 * 1.2 }px;
    height: ${ 24 * 1.2 }px;
    margin: 0 1rem 0 0;
  `}
`;

const Logo = styled.svg`
  width: ${ 110 * 1 }px;
  height: ${ 24 * 1 }px;
  fill: ${Settings.colors.accentColor};
  transition: filter ${Settings.sizes.sec} ease-in-out;

  & .logoType {
    display: none;
  }

  &:hover {
    filter: drop-shadow(0 0 .4rem ${Settings.colors.accentColor});
  }

  ${Media.desktop`
    width: ${ 110 * 1.2 }px;
    height: ${ 24 * 1.2 }px;

    & .logoType {
      display: inline-block;
    }
  `}
`;

const Header = ({
  settings,
  mainMenus,
}) => (
  <Container>
    <Inner>
      <h1>
        <LogoLink to="/" title={ settings.siteTitle }>
          <LogoContainer>
            <Logo viewBox="0 0 110 24">
              <title>{ settings.siteTitle }</title>
              <use xlinkHref="#mark" />
              <use className="logoType" xlinkHref="#type" />
            </Logo>
          </LogoContainer>
        </LogoLink>
      </h1>

      <HeaderNav
        mainMenus={ mainMenus } />
    </Inner>
  </Container>
)

Header.propTypes = {
  settings: PropTypes.object,
  mainMenus: PropTypes.array,
}

export default Header
