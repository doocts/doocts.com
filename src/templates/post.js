import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = ({ data }) => {
  const { title, content } = data.contentfulPosts
  return (
    <Layout>
      <SEO title={ title } />
      <div>
        <h1>{ title }</h1>
        <div dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPosts(slug: { eq: $slug }) {
      id
      title
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`