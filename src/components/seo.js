/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ meta, lang, title, description, ogpImage, url, keywords }) {
  const site = useStaticQuery(
    graphql`
      query {
        contentfulSettings {
          siteDescription
          siteTitle
          creator
          siteCaption
          siteKeywords
          creator
          domain
          facebookAppId
          themeColor
          twitterCreatorId
          twitterSiteId
          ogpImage {
            fixed(width: 1200, height: 630) {
              src
            }
          }
        }
      }
    `
  )

  const metaSiteTitle = site.contentfulSettings.siteTitle
  const metaPageTitle = title || site.contentfulSettings.siteTitle
  const metaDescription = description ? description + site.contentfulSettings.siteDescription + "「" + site.contentfulSettings.siteTitle + "」"
    : site.contentfulSettings.siteDescription + "「" + site.contentfulSettings.siteTitle + "」"
  const metaOgpImage = ogpImage || site.contentfulSettings.ogpImage.fixed.src
  const metaUrl = url || 'https://' + site.contentfulSettings.domain
  const metaKeywords = keywords ? keywords + ',' + site.contentfulSettings.siteKeywords
    : site.contentfulSettings.siteKeywords

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={ title }
      titleTemplate={`%s - ${ site.contentfulSettings.siteTitle }`}
      defaultTitle={`${ site.contentfulSettings.siteTitle } - ${ site.contentfulSettings.siteDescription }`}
      meta={[
        {
          charset: `utf-8`,
        },
        {
          name: `viewport`,
          content: `width=device-width,initial-scale=1`,
        },
        {
          name: `mobile-web-app-capable`,
          content: `yes`,
        },
        {
          name: `apple-mobile-web-app-capable`,
          content: `yes`,
        },
        {
          name: `apple-mobile-web-app-title`,
          content: metaSiteTitle,
        },
        {
          name: `apple-mobile-web-app-status-bar-style`,
          content: `default`,
        },
        {
          name: `application-name`,
          content: metaSiteTitle,
        },
        {
          name: `apple-mobile-web-app-title`,
          content: metaSiteTitle,
        },
        {
          id: `chrome-statusbar`,
          name: `theme-color`,
          content: site.contentfulSettings.themeColor,
        },
        {
          property: `og:image`,
          content: metaOgpImage,
        },
        {
          property: `og:site_name`,
          content: metaSiteTitle,
        },
        {
          property: `og:locale`,
          content: `ja_JP`,
        },
        {
          property: `fb:app_id`,
          content: site.contentfulSettings.facebookAppId,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          property: `twitter:image`,
          content: metaOgpImage,
        },
        {
          property: `twitter:site:id`,
          content: site.contentfulSettings.twitterSiteId,
        },
        {
          property: `twitter:creator:id`,
          content: site.contentfulSettings.twitterCreatorId,
        },
        {
          property: `twitter:domain`,
          content: site.contentfulSettings.domain,
        },
        {
          name: `note:card`,
          content: `summary_large_image`,
        },
        {
          itemprop: `image`,
          content: metaOgpImage,
        },
        {
          name: `msapplication-TileColor`,
          content: site.contentfulSettings.themeColor,
        },
        {
          name: `theme-color`,
          content: site.contentfulSettings.baseColor,
        },
        {
          name: `author`,
          content: site.contentfulSettings.creator,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:title`,
          content: metaPageTitle,
        },
        {
          property: `twitter:title`,
          content: metaPageTitle,
        },
        {
          itemprop: `name`,
          content: metaPageTitle,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `twitter:description`,
          content: metaDescription,
        },
        {
          itemprop: `description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          property: `twitter:url`,
          content: metaUrl,
        },
        {
          name: `keywords`,
          content: metaKeywords,
        },
      ].concat(meta)}
      link={[
        {
          rel: `canonical`,
          href: metaUrl
        },
        {
          rel: `icon`,
          type: `image/x-icon`,
          href: `/favicon.ico`
        },
        {
          rel: `apple-touch-startup-image`,
          href: `/apple-touch-startup-image-640x1136.png`,
          media: `(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)`,
        },
        {
          rel: `apple-touch-startup-image`,
          href: `/apple-touch-startup-image-750x1334.png`,
          media: `(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)`,
        },
        {
          rel: `apple-touch-startup-image`,
          href: `/apple-touch-startup-image-1242x2208.png`,
          media: `(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)`,
        },
        {
          rel: `apple-touch-startup-image`,
          href: `/apple-touch-startup-image-1125x2436.png`,
          media: `(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)`,
        },
        {
          rel: `apple-touch-startup-image`,
          href: `/apple-touch-startup-image-1536x2048.png`,
          media: `(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)`,
        },
        {
          rel: `apple-touch-startup-image`,
          href: `/apple-touch-startup-image-1668x2224.png`,
          media: `(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)`,
        },
        {
          rel: `apple-touch-startup-image`,
          href: `/apple-touch-startup-image-2048x2732.png`,
          media: `(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)`,
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `ja-JP`,
  meta: [],
  title: ``,
  description: ``,
  ogpImage: ``,
  url: ``,
  keywords: ``,
}

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  ogpImage: PropTypes.string,
  url: PropTypes.string,
  keywords: PropTypes.string,
}

export default SEO
