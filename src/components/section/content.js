import PropTypes from 'prop-types'
import React from 'react'

import styled, { css } from 'styled-components'
import Settings from '../../styles/settings'
import { Media } from '../../styles/mixins'

const Container = styled.div`
  position: relative;
  padding: 2rem 1rem;
  background-color: ${Settings.colors.whiteColor};
  color: ${Settings.colors.textColor};
  box-shadow: 0 .2rem 1rem ${Settings.colors.shadowColor};
  border-radius: 1rem;

  ${Media.desktop`
    margin: 0;
    padding: 3rem 3rem;
  `}

  & > * {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    font-weight: bold;
    margin: 1.4em 0 1em;
  }

  & h1 {
    font-size: ${Settings.fonts.fontSizeXlarge};
  }

  & h2 {
    font-size: ${Settings.fonts.fontSizeLarge};
  }

  & h3 {

  }

  & h4 {

  }

  & h5 {

  }

  & p {
    margin: 1em 0;

    & > a {
      color: ${Settings.colors.keyColor};

      &:hover {
        text-decoration: none;
      }
    }
  }

  & table {
    & tr {

    }

    & th,
    & td {
      padding-bottom: 1rem;
    }

    & th {
      width: 20%;
      vertical-align: top;
    }

    & td {

    }
  }
`;

const SectionContent = ({ content }) => (
  <Container dangerouslySetInnerHTML={ content } />
)

SectionContent.propTypes = {
  content: PropTypes.isRequired,
}

export default SectionContent
