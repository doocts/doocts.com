import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import Settings from '../../styles/settings'
import { Media } from '../../styles/mixins'

const Container = styled.nav`
  position: fixed;
  top: 0;
  right: -74%;
  width: 74%;
  height: 100%;
  background-color: ${Settings.colors.whiteColor};
  box-shadow: 0 0 1rem ${Settings.colors.blackClearColor};
  transition: right ${Settings.sizes.sec};

  ${Media.desktop`
    position: static;
    width: 100%;
    height: auto;
    background-color: transparent;
    box-shadow: none;
  `}

  ${props => props.opened && css`
    right: 0;
  `}
`;

const List = styled.ul`
  padding-top: 2rem;

  ${Media.desktop`
    display: flex;
    justify-content: center;
    height: 100%;
    padding-top: 0;
    letter-spacing: -1em;
  `}
`;

const Item = styled.li`
  letter-spacing: normal;
  padding: 10px 0;

  ${props => props.button && css`
    margin-left: auto;
  `}

  ${props => props.smartphoneOnly && css`
    display: block;

    ${Media.desktop`
      display: none;
    `}
  `}
`;

const ItemLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 2px 1rem;
  font-weight: bold;
  color: ${Settings.colors.accentColor};
  text-decoration: none;

  ${Media.desktop`
    position: relative;
    transition: color ${Settings.sizes.sec} ease-in-out;

    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 0;
      height: 0;
      border-radius: 100px;
      background-color: ${Settings.colors.accentColor};
      content: "";
      z-index: -1;
      transition:
        width ${Settings.sizes.sec} ease-in-out,
        height ${Settings.sizes.sec} ease-in-out,
        top ${Settings.sizes.sec} ease-in-out,
        left ${Settings.sizes.sec} ease-in-out
    }

    &:hover {
      color: ${Settings.colors.keyColor};

      &::before {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    ${props => props.button && css`
      ${Media.desktop`
        color: ${Settings.colors.textWhiteColor};

        &::before {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: ${Settings.colors.greenColor};
          transition: background-color ${Settings.sizes.sec} ease-in-out;
        }

        &:hover {
          color: ${Settings.colors.textWhiteColor};

          &::before {
            background-color: ${Settings.colors.greenShineColor};
          }
        }
      `}
    `}
  `}
`;

const Button = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  display: block;
  width: 40px;
  height: 40px;
  padding: 0;
  outline: none;
  background-color: transparent;

  ${props => props.opened && css`
    position: fixed;
  `}

  ${Media.desktop`
    display: none;
  `}
`;

const Hamburger = styled.span`
  position: absolute;
  left: 0;
  width: 60%;
  margin-left: 20%;
  display: block;
  background-color: ${Settings.colors.whiteColor};
  height: 2px;
  border-radius: 2px;
  transition: background-color ${Settings.sizes.sec} ease-in-out;

  &:nth-child(1) {
    top: 10px;
    transition: transform ${Settings.sizes.sec} ease-in-out;
  }

  &:nth-child(2) {
    top: 50%;
    margin-top: -1px;
    transition: left ${Settings.sizes.sec} ease-in-out;
  }

  &:nth-child(3) {
    bottom: 10px;
    transition: transform ${Settings.sizes.sec} ease-in-out;
  }

  ${props => props.opened && css`
    background-color: ${Settings.colors.borderColor};

    &:nth-child(1) {
      top: 50%;
      margin-top: -1px;
      transform: rotate(45deg);
    }

    &:nth-child(2) {
      left: 100%;
    }

    &:nth-child(3) {
      bottom: 50%;
      margin-bottom: -1px;
      transform: rotate(-45deg);
    }
  `}
`;

const Bg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  background-color: ${Settings.colors.blackColor};
  transition:
    visibility ${Settings.sizes.sec} ease-in-out,
    opacity ${Settings.sizes.sec} ease-in-out;
  visibility: hidden;
  z-index: -1;

  ${props => props.opened && css`
    visibility: visible;
    opacity: .6;
  `}

  ${Media.desktop`
    display: none;
  `}
`;

class HeaderNav extends React.Component {
  state = {
    opened: false
  }

  toggle = () => {
    this.setState(state => ({ opened: !state.opened }))
  }

  render() {
    const opened = this.state.opened

    return (
      <>
        <Container
          opened={ opened }>
          <List>
            { this.props.mainMenus && this.props.mainMenus.map(({ node: menu }) => (
              menu.isHeader &&
              <Item key={ menu.id } button={ menu.isButton } smartphoneOnly={ menu.isSmartphoneOnly }>
                <ItemLink
                  button={ menu.isButton }
                  to={ menu.url }
                  title={ menu.title }>{ menu.title }</ItemLink>
              </Item>
            ))}
          </List>
        </Container>

        <Button onClick={ this.toggle } opened={ opened }>
          <Hamburger opened={ opened } />
          <Hamburger opened={ opened } />
          <Hamburger opened={ opened } />
        </Button>
        <Bg onClick={ this.toggle } opened={ opened } />
      </>
    )
  }
}

HeaderNav.propTypes = {
  mainMenus: PropTypes.array,
}

export default HeaderNav
