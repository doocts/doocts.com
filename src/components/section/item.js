import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled, { css } from 'styled-components'
import Settings from '../../styles/settings'
import { Media } from '../../styles/mixins'

const Container = styled.div`
  border-bottom: 1px solid ${Settings.colors.borderColor};

  &:last-child {
    border-bottom-width: 0;
  }

  ${Media.desktop`
  `}
`;

const Inner = styled(Link)`
  display: block;
  padding: 1rem;
  color: ${Settings.colors.textColor};
`;
const Title = styled.h1`
  display: inline-block;
`;

const Date = styled.div`
  display: inline-block;
  margin-right: 1rem;
`;


const Item = ({ link, title, date, createdAt }) => (
  <Container>
    <Inner to={ link } title={ title }>
      <Date>
        { date ? date : createdAt }
      </Date>
      <Title>{ title }</Title>
    </Inner>
  </Container>
)

Item.propTypes = {
  key: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  createdAt: PropTypes.string,
}

export default Item
