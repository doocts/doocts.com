import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Section from '../components/section'
import SectionContent from '../components/section/content'

const Page = ({ data }) => {
  const { title, content, slug } = data.contentfulPages
  return (
    <Layout pageTitle={ title }>
      <SEO
        title={ title }
        description={ content.childMarkdownRemark.excerpt.replace(/\r?\n/g, '') }
        keywords={ title }
        url={`https://doocts.com/work/${ slug }`} />
      <SEO title={ title } />
      <Section>
        <SectionContent content={{ __html: content.childMarkdownRemark.html }} />
      </Section>
    </Layout>
  )
}

export default Page

export const query = graphql`
  query($slug: String!) {
    contentfulPages(slug: { eq: $slug }) {
      id
      title
      slug
      content {
        childMarkdownRemark {
          excerpt
          html
        }
      }
    }
  }
`