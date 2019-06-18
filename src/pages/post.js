import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Posts = ({ data }) => {
  const posts = data.allContentfulPosts.edges
  return (
    <div>
      {posts.map(({ node: post }) => (
        <div key={post.id}>
          <Link to={`/post/${post.slug}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default Posts

export const query = graphql`
  query PostsQuery {
    allContentfulPosts(limit: 1000) {
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