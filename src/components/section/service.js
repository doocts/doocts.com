import PropTypes from 'prop-types'
import React from 'react'

import styled, { css } from 'styled-components'
import Settings from '../../styles/settings'
import { Media } from '../../styles/mixins'

const Container = styled.article`
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;
  color: ${Settings.colors.textWhiteColor};

  ${Media.desktop`
    width: ${ 100 / 3 }%;

    &:nth-of-type(3n + 1) > * {
      margin-right: 1rem;
    }

    &:nth-of-type(3n + 2) > * {
      margin-left: .5rem;
      margin-right: .5rem;
    }

    &:nth-of-type(3n) > * {
      margin-left: 1rem;
    }
  `}
`;

const Image = styled.div`
  margin-bottom: 1rem;

  & > img {
    width: 80%;
  }
`;

const Title = styled.h1`
  margin-bottom: .4rem;
  font-weight: bold;
`;

const Description = styled.div`
  font-size: ${Settings.fonts.fontSizeSmall};
`;


const Service = ({ link, title, image, description }) => (
  <Container>
    <Image>
      <img src={ image } alt={ title } />
    </Image>
    <Title>{ title }</Title>
    <Description>{ description }</Description>
  </Container>
)

Service.propTypes = {
  key: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

export default Service
