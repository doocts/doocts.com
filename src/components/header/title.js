import PropTypes from 'prop-types'
import React from 'react'

import styled, { css, keyframes } from 'styled-components'
import Settings from '../../styles/settings'
import { Media } from '../../styles/mixins'

const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 1rem 2rem;
  background: url('data:image/svg+xml;charset=utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0 91.2319C0.758362 89.8717 1.90898 87.7228 4.01766 85.4787C6.70877 82.6153 9.45695 81.2021 11.316 80.9269C16.2418 80.1965 18.9971 86.8336 23.6305 92.1476C31.4328 101.098 39.2042 100.156 42.3637 99.7692C43.9922 99.5734 60.6048 97.1599 63.9972 77.5924C67.606 56.7705 53.1852 34.2021 56.8177 19.4246C59.3115 9.28357 68.6282 7.45226 74.814 11.5383C79.9775 14.9469 80.5267 20.9171 84.8938 22.018C92.0495 23.8282 100.515 10.3368 99.9755 0H0V91.2319Z" fill="%2348629a"/></svg>') no-repeat 0 0 / 60vw 20vh ${Settings.colors.keyColor};

  &::before {
    display: block;
    position: absolute;
    content: "";
  }

  &::before {
    top: 100%;
    right: 0;
    left: 0;
    height: 6rem;
    background-image: url('data:image/svg+xml;charset=utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0 0V100C18.3 27.2 33 108.3 51.1 98.5C58.8 94.3 64.9 69.7 71.8 40.7C81.3 0.100002 89.5 -5.6 100 4.3V0H0Z" fill="%23203a72"/></svg>');
    z-index: 1;
  }

  ${Media.desktop`
    padding: 12rem 0 4rem;
    background-size: 40vw 30vh;

    &::before {
      height: 16rem;
    }
  `}

  ${props => props.wideHeader && css`
    min-height: 61.8vh;
  `}

  ${props => props.imageHeader && css`
    height: 80vh;
    padding-bottom: 200px;

    &::before {
      top: auto;
      bottom: 0;
      background-image: url('data:image/svg+xml;charset=utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M71.8 40.6164C64.9 69.6084 58.8 94.2016 51.1 98.4004C33 108.198 18.3 27.0201 0 100H100V4.2264C89.5 -5.67087 81.3 0.0275612 71.8 40.6164Z" fill="%2348629a"/></svg>');
      z-index: 1;
    }

    &::after {
      bottom: 0;
      left: auto;
      right: auto;
      width: 100%;
      height: 80%;
      display: block;
      position: absolute;
      content: "";
      background: url(${props.imageHeader}) no-repeat center top / cover;
      color: ${Settings.colors.textWhiteColor};
    }

    ${Media.desktop`
      padding-bottom: 16rem;
    `}
  `}
`;

const float = keyframes`
  from {
    bottom: -1em;
    opacity: 0;
  }

  to {
    bottom: 0;
    opacity: 1;
  }
`;

const Inner = styled.div`
  position: relative;
  animation: ${float} .6s ease-in-out;
  text-align: center;
  z-index: 1;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: ${Settings.fonts.fontSizeLarge};

  ${Media.desktop`
    font-size: ${Settings.fonts.fontSizeXxlarge};
  `}

  ${props => props.largeTitle && css`
    text-align: left;
    color: ${Settings.colors.whiteColor};
    font-size: ${Settings.fonts.fontSizeXxlarge};

    ${Media.desktop`
      font-size: ${Settings.fonts.fontSizeXxxxlarge};
    `}
  `}
`;

const Description = styled.p`
  text-align: center;
`;

const HeaderTitle = ({
  wideHeader,
  largeTitle,
  pageTitle,
  pageDescription,
  imageHeader,
}) => (
  <Container
    wideHeader={ wideHeader }
    imageHeader={ imageHeader }>
    <Inner wideHeader={ wideHeader }>
      <Title largeTitle={ largeTitle }>{ pageTitle }</Title>
      { pageDescription && <Description>{ pageDescription }</Description> }
    </Inner>
  </Container>
)

HeaderTitle.defaultProps = {
  wideHeader: ``,
  pageTitle: ``,
  pageDescription: ``,
  imageHeader: ``,
}

HeaderTitle.propTypes = {
  wideHeader: PropTypes.string,
  largeTitle: PropTypes.string,
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
  imageHeader: PropTypes.string,
}

export default HeaderTitle
