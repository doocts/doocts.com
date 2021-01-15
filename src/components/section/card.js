import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled, { css } from 'styled-components'
import Settings from '../../styles/settings'
import { Media } from '../../styles/mixins'

const Container = styled.article`
  width: 100%;
  height: 100%;
  margin-bottom: 2rem;

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

const Inner = styled.div`
  position: relative;
  height: 100%;
  box-shadow: 0 0 1rem ${Settings.colors.blackClearColor};
  background-color: ${Settings.colors.whiteColor};
  border-radius: 1rem;
  overflow: hidden;
`;

const Image = styled.div`
  position: relative;
  padding-top: 61.8%;
`;

const ImageLink = styled(Link)`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(/thumbnail00.png) no-repeat center / cover ${Settings.colors.borderColor};
  transition: transform ${Settings.sizes.sec} ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  ${props => props.thumbnail && css`
    background-image: url(${props.thumbnail});
  `}

  ${props => props.week && css`
    background-image: url(${'/thumbnail0' + props.week + '.png'});
  `}
`;

const Content = styled.div`
`;

const ContentLink = styled(Link)`
  display: block;
  padding: 1rem;
  text-decoration: none;
  color: ${Settings.colors.textColor};
`;

const Title = styled.h1`
`;

const Date = styled.div`
  font-size: ${Settings.fonts.fontSizeSmall};
  color: ${Settings.colors.textClearColor};
  text-align: right;
`;


const Card = ({ link, title, thumbnail, date, week, createdAt, updatedAt }) => (
  <Container>
    <Inner>
      <Image>
        <ImageLink thumbnail={ thumbnail } week={ week } to={ link } title={ title } />
      </Image>
      <Content>
        <ContentLink to={ link } title={ title }>
          <Title>{ title }</Title>
          <Date>
            { date ? date : createdAt }
          </Date>
        </ContentLink>
      </Content>
    </Inner>
  </Container>
)

Card.propTypes = {
  key: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  week: PropTypes.string,
  date: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
}

export default Card
