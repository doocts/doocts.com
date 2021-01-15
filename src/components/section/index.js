import PropTypes from 'prop-types'
import React from 'react'

import styled, { css } from 'styled-components'
import Settings from '../../styles/settings'
import { Media } from '../../styles/mixins'

const Container = styled.section`
  position: relative;
  padding: 2rem 0;

  &::before {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 6rem;
    content: "";
  }

  ${Media.desktop`
    padding: 4rem 0;

    &::before {
      height: 16rem;
    }
  `}

  ${props => props.archive && css`

    ${Media.desktop`
      padding: 4rem 1rem;
    `}
  `}

  ${props => props.inline && css`
    padding: 0;
    margin-bottom: 2rem;

    ${Media.desktop`
      padding: 0;
    `}
  `}

  ${props => props.sectionType1 && css`
    background-color: ${Settings.colors.baseColor};

    &::before {
      background-image: url('data:image/svg+xml;charset=utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M80.4 88.897C64.9 68.6917 64.7 -7.32854 52.7 0.573558C43.3 6.77521 42.2 54.4879 30.2 57.7888C21.4 60.2894 20.6 35.1828 13.4 49.0865C6.8 61.8899 3.1 91.3977 0 100H100V71.1923C92.6 103.601 85.1 94.9987 80.4 88.897Z" fill="%23203a72"/></svg>');
    }
  `}

  ${props => props.sectionType2 && css`
    background-color: ${Settings.colors.keyColor};

    &::before {
      background-image: url('data:image/svg+xml;charset=utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M63.4 73.6942C59.4 73.1941 58.3 55.6902 53.4 55.2901C48.1 54.89 47.2 74.7944 40.3 79.2954C33 84.0965 29.5 64.5922 20.3 67.2928C15.7 68.5931 11.9 75.0945 0 100H100V52.7896C78.6 -77.8392 75.4 75.2945 63.4 73.6942Z" fill="%2348629a"/></svg>');
    }
  `}

  ${props => props.sectionType3 && css`
    background-color: ${Settings.colors.baseColor};
    &::before {
      background-image: url('data:image/svg+xml;charset=utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M54.4 53.2822C48.5 50.6831 48.8 4.89837 43 0.999666C33.9 -5.0983 25.4 102.166 13.8 99.9666C8.5 98.967 2.7 75.1749 0 45.2849V99.9666H100V18.7937C98.9 47.6841 95.3 90.4698 90.7 90.6697C84.1 90.9697 81.8 1.59947 72.9 0H72.5C65.5 0.999666 61 56.0813 54.4 53.2822Z" fill="%23203a72"/></svg>');
    }
  `}
`;

const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 1rem;
  z-index: 1;

  ${Media.desktop`
    max-width: ${Settings.sizes.mainWidth};
    padding: 0;
  `}

  ${props => props.archive && css`
    display: flex;
    flex-wrap: wrap;

    ${Media.desktop`
      max-width: ${Settings.sizes.siteWidth};
    `}
  `}

  ${props => props.wide && css`
    padding: 4rem 1rem;

    ${Media.desktop`
      padding: 8rem 0;
    `}
  `}

  ${props => props.inline && css`
    padding: 0;
  `}
`;

const Section = ({
  children,
  inline,
  wide,
  image,
  sectionTag,
  sectionType1,
  sectionType2,
  archive,
}) => (
  <Container
    archive={ archive }
    inline={ inline }
    as={ sectionTag }
    sectionType1={ sectionType1 }
    sectionType2={ sectionType2 }>
    <Inner
      archive={ archive }
      wide={ wide }
      image={ image }>{ children }</Inner>
  </Container>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  archive: PropTypes.bool,
  wide: PropTypes.bool,
  inline: PropTypes.bool,
  sectionType1: PropTypes.string,
  sectionType2: PropTypes.string,
  sectionTag: PropTypes.string,
}

export default Section
