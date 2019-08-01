import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Section from '../components/section'
import SectionNav from '../components/section/nav'
import Card from '../components/section/card'

const Topics = ({ data }) => {
  const { title, slug, works } = data.contentfulTopics
  const types = data.allContentfulTypes.edges
  return (
    <Layout pageTitle={`${ title }の制作実績`}>
      <SEO
        title={`${ title }の制作実績`}
        description={`${ title }を利用した制作実績の一覧です。`}
        keywords={ title }
        url={`https://doocts.com/work/${ slug }`} />
      <SectionNav menus={ types } />
      <Section archive>
        { works && works.map(( work ) => (
          <Card
            key={ work.id }
            link={`/work/${ work.slug }`}
            title={ work.title }
            thumbnail={ work.image01.fixed.src }
            date={ work.date }
            updatedAt={ work.updatedAt }
            createdAt={ work.createdAt } />
        ))}
      </Section>
    </Layout>
  )
}

export default Topics

export const query = graphql`
  query($slug: String!) {
    contentfulTopics(slug: { eq: $slug }) {
      id
      slug
      title
      description
      works {
        id
        title
        slug
        date(formatString: "YYYY.MM.DD")
        createdAt(formatString: "YYYY.MM.DD")
        updatedAt(formatString: "YYYY.MM.DD")
        image01 {
          fixed(width: 1200) {
            src
          }
        }
      }
    }

    allContentfulTypes(filter: {node_locale: {eq: "ja-JP"}}, sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
          id
          title
          slug
          description
        }
      }
    }
  }
`