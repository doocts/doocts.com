import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Section from '../components/section'
import SectionNav from '../components/section/nav'
import Card from '../components/section/card'

const Works = ({ data }) => {
  const works = data.allContentfulWorks.edges
  const types = data.allContentfulTypes.edges
  return (
    <Layout pageTitle="制作実績">
      <SEO
        title="制作実績"
        description="ドークツで過去制作した実績の一覧です。"
        keywords="制作実績,ポートフォリオ"
        url="https://doocts.com/work" />
      <SectionNav menus={ types } />
      <Section archive>
        { works && works.map(({ node: work }) => (
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

export default Works

export const query = graphql`
  query {
    allContentfulWorks(filter: {node_locale: {eq: "ja-JP"}}, sort: {fields: date, order: DESC}) {
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
    }

    allContentfulTypes(filter: {node_locale: {eq: "ja-JP"}}, sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`