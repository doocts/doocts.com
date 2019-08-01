import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styled, { css } from 'styled-components'
import Settings from '../../styles/settings'
import { Media } from '../../styles/mixins'

import Button from '../button'

const Container = styled.section`
  position: relative;
  margin-top: 6rem;
  padding: 2rem 0 8rem;
  text-align: center;

  ${props => props.bgImage && css`
    background: url(${props.bgImage}) no-repeat center 0 / cover ${Settings.colors.greenColor};
  `}

  &::before,
  &::after {
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    height: 6rem;
    content: "";
  }

  &::before {
    bottom: 100%;
    background-image: url('data:image/svg+xml;charset=utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M71.5 99.6656C57.8 96.0982 65.7 0.672511 57.4 0.00363862C51.9 -0.442276 46.5 40.2474 38.4 39.2441C31.6 38.3523 29.7 12.8237 24.6 13.4926C18.4 14.2729 18.6 51.3953 11.5 52.3986C8.2 52.8445 3.5 45.3755 0 34.0046V100H100V65.3301C90.5 86.2881 77.4 101.226 71.5 99.6656Z" fill="%2362bca2"/></svg>');
  }

  &::after {
    bottom: 0;
    background-image: url('data:image/svg+xml;charset=utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0 69.3307V100H100V75.2248C95.1 81.5185 89.1 107.992 80.3 97.5025C69.7 84.9151 69.8 36.3636 60.1 29.1708C48 20.0799 44.2 94.2058 33.7 78.5215C24.4 64.5355 23.8 0.0999001 15.1 0C6.20001 0 0.7 60.5395 0 69.3307Z" fill="%2348629A"/></svg>');
  }

  ${Media.desktop`
    margin-top: 16rem;
    padding: 4rem 0 20rem;

    &::before,
    &::after {
      height: 16rem;
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
`;

const ContactButton = styled.div`
  width: 100%;
  margin-top: 2rem;
  text-align: center;

  ${Media.desktop`
    margin-top: 4rem;
  `}
`;

const Contact = ({ bgImage }) => (
  <Container bgImage={ bgImage }>
    <Inner>
      <div>ドークツではWebに関するご相談をお待ちしております。<br />まずはお気軽にお問い合わせください！</div>

      <ContactButton>
        <Button red to="/contact" title="お問い合わせ">お問い合わせ</Button>
      </ContactButton>
    </Inner>
  </Container>
)

Contact.propTypes = {
  bgImage: PropTypes.string,
}

export default Contact
