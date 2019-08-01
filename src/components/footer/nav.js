import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'
import Settings from '../../styles/settings'
import { Media } from '../../styles/mixins'

const Container = styled.nav`
  padding-right: 1rem;
  box-sizing: border-box;

  &:last-child {
    padding-right: 0;
  }

  ${Media.desktop`
    width: 50%;
  `}
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.li`
  margin-bottom: .2rem;
  width: 50%;
`;

const ItemLink = styled(Link)`
  color: ${Settings.colors.textWhiteColor};
  text-decoration: none;

  &:hover {
    color: ${Settings.colors.greenColor};
  }
`;

const FooterNav = ({ title, menus }) => (
  <Container>
    <List>
      { menus && menus.map(({ node: menu }) => (
        <Item key={ menu.id }>
          <ItemLink
            to={ menu.url }
            title={ menu.title }>{ menu.title }</ItemLink>
        </Item>
      ))}
    </List>
  </Container>
)

FooterNav.propTypes = {
  title: PropTypes.string,
  menus: PropTypes.array,
}

export default FooterNav
