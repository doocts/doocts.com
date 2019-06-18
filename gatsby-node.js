const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('./src/templates/post.js')
    resolve(
      graphql(
        `
          {
            allContentfulPosts {
              edges {
                node {
                  id
                  title
                  slug
                  content {
                    content
                  }
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulPosts.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/post/${post.node.slug}/`,
            component: postTemplate,
            context: {
              id: post.node.id,
              title: post.node.title,
              slug: post.node.slug,
              content: post.node.content,
            },
          })
        })
      })
    )
  })
}