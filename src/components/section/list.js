import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled, { css } from 'styled-components'
import Settings from '../../styles/settings'
import { Media } from '../../styles/mixins'

const Container = styled.section`
  margin-bottom: 2rem;
  border-radius: 1rem;
  background-color:${Settings.colors.whiteColor};
  box-shadow: 0 .2rem 1rem ${Settings.colors.shadowColor};

  ${Media.desktop`
  `}
`;

const List = ({ children }) => (
  <Container>{ children }</Container>
)

List.propTypes = {
  children: PropTypes.node.isRequired,
}

export default List
