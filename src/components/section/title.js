import PropTypes from 'prop-types'
import React from 'react'

import styled, { css } from 'styled-components'
import Settings from '../../styles/settings'
import { Media } from '../../styles/mixins'

const Title = styled.h1`
  width: 100%;
  margin-bottom: 2rem;
  font-size: ${Settings.fonts.fontSizeXxxlarge};
  text-align: center;
  font-weight: bold;

  ${Media.desktop`
    margin-bottom: 4rem;
  `}
;`

const Caption = styled.span`
  display: block;
  color: ${Settings.colors.textWhiteClearColor};
  font-size: ${Settings.fonts.fontSizeSmall};
  font-weight: normal;

  ${Media.desktop`
  `}
;`

const SectionTitle = ({ title, caption }) => (
  <Title>{ title }<Caption>{ caption }</Caption></Title>
)

SectionTitle.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
}

export default SectionTitle
