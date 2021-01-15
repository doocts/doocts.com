import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'
import Settings from '../../styles/settings'
import { Media } from '../../styles/mixins'

import FooterNav from './nav'
import FooterSocial from './social'

const Container = styled.footer`
  position: relative;
  padding: 0 1rem;
  background-color: ${Settings.colors.baseColor};

  ${Media.desktop`
    padding: 0 4rem;
  `}
`;

const Inner = styled.div`
  padding: 2rem 0;

  ${Media.desktop`
    padding: 4rem 0;
  `}
`;

const FooterTop = styled.div`
  display: flex;
  margin-bottom: 2rem;

  ${Media.desktop`
    margin-bottom: 3rem;
  `}
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  border-top: 1px solid ${Settings.colors.borderColor};
  font-size: ${Settings.fonts.fontSizeXsmall};

  ${Media.desktop`
    flex-direction: row;
    padding: 2rem 0;
  `}
`;

const Copyright = styled.div`
  color: ${Settings.colors.textWhiteColor};

  ${Media.desktop`
    margin-left: auto;
    text-align: right;
  `}
`;

const CopyrightSmall = styled.small`
  display: flex;
  align-items: center;
`;

const CopyrightLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${Settings.colors.textWhiteColor};
  text-decoration: none;
`;

const Logo = styled.svg`
  width: ${ 19 * .8 }px;
  height: ${ 24 * .8 }px;
  margin: 0 .4rem;
  fill: ${Settings.colors.whiteColor};
`;

const Footer = ({ mainMenus, settings }) => (
  <Container>
    <Inner>
      <FooterTop>
        <FooterNav menus={ mainMenus } />
      </FooterTop>

      <FooterBottom>
        <FooterSocial settings={ settings } />
        <Copyright>
          <CopyrightSmall>Copyright © { settings.since }-{ new Date().getFullYear() }
            <CopyrightLink to="/" title={ settings.siteTitle } rel="license">
              <Logo viewBox="0 0 19 24">
                <title>{ settings.siteTitle }</title>
                <use xlinkHref="#mark" />
              </Logo>
              { settings.companyName }
            </CopyrightLink>
          </CopyrightSmall>
        </Copyright>
      </FooterBottom>
    </Inner>
  </Container>
)

Footer.propTypes = {
  mainMenus: PropTypes.array,
  settings: PropTypes.object,
}

export default Footer
