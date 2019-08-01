import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

import Settings from '../../styles/settings'
import { Media } from '../../styles/mixins'

import Logo from '../svg/logo'
import Icon from '../svg/icon'
import Header from '../header'
import HeaderTitle from '../header/title'
import Contact from '../contact'
import Footer from '../footer'

const GlobalStyle = createGlobalStyle`
  ::selection {
    background: ${Settings.colors.keyColor};
    color: ${Settings.colors.baseColor};
  }

  ::-moz-selection {
    background: ${Settings.colors.keyColor};
    color: ${Settings.colors.baseColor};
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${Settings.colors.baseColor};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background: ${Settings.colors.keyColor};
  }

  /*! minireset.css v0.0.2 | MIT License | github.com/jgthms/minireset.css */
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
  }

  button {
    border-width: 0;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  img,
  embed,
  object,
  audio,
  video {
    height: auto;
    max-width: 100%;
  }

  iframe {
    border: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
    text-align: left;
  }

  small {
    font-size: 100%;
  }

  body {
    line-height: 1.74;
    font-family: ${Settings.fonts.defaultFont};
    font-size: ${Settings.fonts.fontSizeMobile};
    color: ${Settings.colors.textWhiteColor};
    background-color: ${Settings.colors.baseColor};
    scrollbar-width: thin;

    ${Media.desktop`
      font-size: ${Settings.fonts.fontSizeDesktop};
    `}
  }

  textarea {
    font-size: ${Settings.fonts.fontSizeDesktop};
    font-family: ${Settings.fonts.defaultFont};
  }
`;

const Layout = ({
  children,
  wideHeader,
  largeTitle,
  imageHeader,
  pageTitle,
  pageDescription
}) => (
  <StaticQuery
    query={ graphql`
      query {
        forest:file(relativePath: {eq: "forest.png"}) {
          childImageSharp{
            fixed(width: 3000) {
              ...GatsbyImageSharpFixed
            }
          }
        },
        allContentfulMainMenus(
          filter: {
            node_locale: { eq: "ja-JP" }
          },
          sort: { fields: order, order: ASC }
        ) {
          edges {
            node {
              id
              title
              url
              order
              isHeader
              isSmartphoneOnly
              isButton
            }
          }
        }

        contentfulSettings {
          siteTitle
          siteCaption
          siteDescription
          companyName
          twitter
          facebook
          instagram
          blog
          since
        }
      }
    `}
    render={ data => (
      <>
        <GlobalStyle />
        <Logo />
        <Icon />
        <Header
          settings={ data.contentfulSettings }
          mainMenus={ data.allContentfulMainMenus.edges } />
        <HeaderTitle
          pageTitle={ pageTitle }
          pageDescription={ pageDescription }
          wideHeader={ wideHeader }
          largeTitle={ largeTitle }
          imageHeader={ imageHeader } />

        { children }

        <Contact bgImage={data.forest.childImageSharp.fixed.src} />

        <Footer
          settings={ data.contentfulSettings }
          mainMenus={ data.allContentfulMainMenus.edges } />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  wideHeader: PropTypes.string,
  largeTitle: PropTypes.string,
  imageHeader: PropTypes.string,
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
}

export default Layout
