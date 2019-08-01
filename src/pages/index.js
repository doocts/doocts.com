import React from 'react'
import { graphql } from 'gatsby'

import styled, { css } from 'styled-components'
import { Media } from '../styles/mixins'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Section from '../components/section'
import SectionTitle from '../components/section/title'
import Card from '../components/section/card'
import List from '../components/section/list'
import Item from '../components/section/item'
import Service from '../components/section/service'
import Button from '../components/button'

const ArchiveButton = styled.div`
  width: 100%;
  margin-top: 2rem;
  text-align: center;

  ${Media.desktop`
    margin-top: 4rem;
  `}
`;

const IndexPage = ({ data }) => {
  const services = data.allContentfulServices.edges
  const works = data.allContentfulWorks.edges
  const news = data.allContentfulNews.edges
  const settings = data.contentfulSettings
  return (
    <Layout
      wideHeader
      largeTitle
      pageTitle={settings.siteCaption}
      pageDescription="いいものを作ろう。"
      imageHeader={data.mountain.childImageSharp.fixed.src}>
      <SEO />
      <Section archive sectionType1>
        <SectionTitle title="Service" caption="ドークツがやること" />

        { services && services.map(({ node: service }) => (
          <Service
            key={ service.id }
            title={ service.title }
            description={ service.description.childMarkdownRemark.excerpt }
            image={ service.image.file.url } />
        ))}

        <ArchiveButton>
          <Button to="/contact" title="お問い合わせ">お問い合わせ</Button>
        </ArchiveButton>
      </Section>

      <Section archive sectionType2>
        <SectionTitle title="Works" caption="ドークツの制作実績" />
        { works && works.map(({ node: work }) => (
          <Card
            key={ work.id }
            link={`/work/${ work.slug }`}
            title={ work.title }
            date={ work.date }
            thumbnail={ work.image01.fixed.src }
            updatedAt={ work.updatedAt }
            createdAt={ work.createdAt } />
        ))}

        <ArchiveButton>
          <Button to="/work" title="制作実績">もっとみる</Button>
        </ArchiveButton>
      </Section>

      <Section sectionType3>
        <SectionTitle title="News" caption="ドークツからのお知らせ" />
        <List>
          { news && news.map(({ node: post }) => (
            <Item
              key={ post.id }
              link={`/news/${ post.slug }`}
              title={ post.title }
              date={ post.date }
              week={ new Date(post.date).getDay() }
              updatedAt={ post.updatedAt }
              createdAt={ post.createdAt } />
          ))}
        </List>

        <ArchiveButton>
          <Button to="/news" title="お知らせ">もっとみる</Button>
        </ArchiveButton>
      </Section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    mountain:file(relativePath: {eq: "mountain.png"}) {
      childImageSharp{
        fixed(width: 3000) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    allContentfulWorks(limit: 6, filter: {node_locale: {eq: "ja-JP"}}, sort: {fields: date, order: DESC}) {
      edges {
        node {
          id
          title
          image01 {
            fixed(width: 1200) {
              src
            }
          }
          slug
          date(formatString: "YYYY.MM.DD")
          createdAt(formatString: "YYYY.MM.DD")
          updatedAt(formatString: "YYYY.MM.DD")
        }
      }
    },
    allContentfulServices(limit: 3, filter: {node_locale: {eq: "ja-JP"}}) {
      edges {
        node {
          id
          title
          slug
          description {
            childMarkdownRemark {
              excerpt
            }
          }
          image {
            file {
              url
            }
          }
          createdAt(formatString: "YYYY.MM.DD")
          updatedAt(formatString: "YYYY.MM.DD")
        }
      }
    },
    allContentfulNews(limit: 6, filter: {node_locale: {eq: "ja-JP"}}, sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
          id
          title
          slug
          date(formatString: "YYYY.MM.DD")
          createdAt(formatString: "YYYY.MM.DD")
          updatedAt(formatString: "YYYY.MM.DD")
        }
      }
    },
    contentfulSettings {
      siteTitle
      siteCaption
      siteDescription
      companyName
      twitter
      twitterCreatorId
      facebook
      blog
      since
    }
  }
`