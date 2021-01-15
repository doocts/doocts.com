import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Section from '../components/section'
import SectionContent from '../components/section/content'

const News = ({ data }) => {
  const { title, content, slug } = data.contentfulNews
  return (
    <Layout pageTitle={ title }>
      <SEO
        title={ title }
        description={ content.childMarkdownRemark.excerpt.replace(/\r?\n/g, '') }
        keywords=""
        url={`https://doocts.com/news/${ slug }`} />
      <Section>
        <SectionContent content={{ __html: content.childMarkdownRemark.html }} />
      </Section>
    </Layout>
  )
}

export default News

export const query = graphql`
  query($slug: Date!) {
    contentfulNews(slug: { eq: $slug }) {
      id
      title
      slug
      date(formatString: "YYYY.MM.DD")
      createdAt(formatString: "YYYY.MM.DD")
      updatedAt(formatString: "YYYY.MM.DD")
      content {
        childMarkdownRemark {
          excerpt
          html
        }
      }
    }
  }
`