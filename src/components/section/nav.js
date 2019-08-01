import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'
import { rgba } from 'polished'
import Settings from '../../styles/settings'
import { Media } from '../../styles/mixins'

const Container = styled.nav`
  padding-top: 2rem;
  text-align: center;

  ${Media.desktop`
    padding-top: 4rem;
  `}
`;

const List = styled.ul`
  position: relative;
  display: flex;
  margin: 0 1rem;
  letter-spacing: -1em;
  overflow-x: scroll;
  background-color: ${Settings.colors.whiteColor};
  border-radius: 100px;
  vertical-align: top;
  border: 4px solid ${Settings.colors.whiteColor};
  box-shadow: 0 .2rem 1rem ${Settings.colors.shadowColor};
  z-index: 1;

  ::-webkit-scrollbar {
    height: 2px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${Settings.colors.baseColor};
  }

  ${Media.desktop`
    display: inline-block;
    margin: 0;
    overflow-x: auto;
  `}
`;

const Item = styled.li`
  display: inline-block;
  letter-spacing: normal;
  vertical-align: top;
`;

const ItemLink = styled(Link)`
  position: relative;
  display: block;
  padding: .4em 1.4rem;
  text-decoration: none;
  white-space: nowrap;
  color: ${Settings.colors.keyColor};
  transition: color ${Settings.sizes.sec} ease-in-out;

  &.-active {
    color: ${Settings.colors.textWhiteColor};
    border-radius: 100px;
    background-color: ${Settings.colors.keyColor};
  }

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0;
    height: 0;
    border-radius: 100px;
    background-color: ${Settings.colors.keyColor};
    content: "";
    z-index: -1;
    transition:
      width ${Settings.sizes.sec} ease-in-out,
      height ${Settings.sizes.sec} ease-in-out,
      top ${Settings.sizes.sec} ease-in-out,
      left ${Settings.sizes.sec} ease-in-out
  }

  &:hover {
    color: ${Settings.colors.textWhiteColor};

    &::before {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

const SectionNav = ({ menus }) => (
  <Container>
    <List>
      <Item><ItemLink to="/work" title="a" activeClassName="-active">すべて</ItemLink></Item>
      { menus && menus.map(({ node: menu }) => (
        <Item key={ menu.id }>
          <ItemLink
            to={`/work/${menu.slug}`}
            title={ menu.title }
            activeClassName="-active">{ menu.title }</ItemLink>
        </Item>
      ))}
    </List>
  </Container>
)

SectionNav.propTypes = {
  menus: PropTypes.array,
}

export default SectionNav
