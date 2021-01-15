const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('./src/templates/page.js')
    const newsTemplate = path.resolve('./src/templates/news.js')
    const workTemplate = path.resolve('./src/templates/work.js')
    const typeTemplate = path.resolve('./src/templates/type.js')
    const topicTemplate = path.resolve('./src/templates/topic.js')

    resolve(
      graphql(
        `
          {
            allContentfulPages(filter: {node_locale: {eq: "ja-JP"}}) {
              edges {
                node {
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
            }

            allContentfulNews(filter: {node_locale: {eq: "ja-JP"}}) {
              edges {
                node {
                  id
                  slug
                  title
                  date
                  createdAt
                  updatedAt
                  content {
                    childMarkdownRemark {
                      html
                    }
                  }
                }
              }
            }

            allContentfulWorks(filter: {node_locale: {eq: "ja-JP"}}) {
              edges {
                node {
                  id
                  date
                  createdAt
                  updatedAt
                  title
                  slug
                  description
                  content {
                    childMarkdownRemark {
                      html
                    }
                  }
                  color
                  bgColor
                  ogpImage {
                    fixed(width: 1200, height: 630) {
                      src
                    }
                  }
                  image01 {
                    fixed(width: 1200, height: 630) {
                      src
                    }
                  }
                  image02 {
                    fixed(width: 1200, height: 630) {
                      src
                    }
                  }
                  image03 {
                    fixed(width: 1200, height: 630) {
                      src
                    }
                  }
                  file {
                    file {
                      url
                    }
                  }
                  facebook
                  twitter
                  instagram
                  line
                  client
                  url
                  topics {
                    id
                    slug
                    title
                  }
                  types {
                    id
                    slug
                    title
                  }
                }
              }
            }

            allContentfulTypes(filter: {node_locale: {eq: "ja-JP"}}) {
              edges {
                node {
                  id
                  slug
                  title
                  description
                  works {
                    id
                    title
                    slug
                    image01 {
                      fixed(width: 1200, height: 630) {
                        src
                      }
                    }
                  }
                }
              }
            }

            allContentfulTopics(filter: {node_locale: {eq: "ja-JP"}}) {
              edges {
                node {
                  id
                  slug
                  title
                  description
                  works {
                    id
                    title
                    slug
                    image01 {
                      fixed(width: 1200, height: 630) {
                        src
                      }
                    }
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

        const pages = result.data.allContentfulPages.edges
        pages.forEach((page, index) => {
          createPage({
            path: `/${page.node.slug}`,
            component: pageTemplate,
            context: {
              id: page.node.id,
              title: page.node.title,
              slug: page.node.slug,
              content: page.node.content,
            },
          })
        })

        const news = result.data.allContentfulNews.edges
        news.forEach((post, index) => {
          createPage({
            path: `/news/${post.node.slug}`,
            component: newsTemplate,
            context: {
              id: post.node.id,
              title: post.node.title,
              slug: post.node.slug,
              date: post.node.date,
              createdAt: post.node.createdAt,
              updatedAt: post.node.updatedAt,
              content: post.node.content,
            },
          })
        })

        const works = result.data.allContentfulWorks.edges
        works.forEach((work, index) => {
          createPage({
            path: `/work/${work.node.slug}`,
            component: workTemplate,
            context: {
              id: work.node.id,
              date: work.node.date,
              createdAt: work.node.createdAt,
              updatedAt: work.node.updatedAt,
              title: work.node.title,
              slug: work.node.slug,
              description: work.node.description,
              content: work.node.content,
              color: work.node.color,
              bgColor: work.node.bgColor,
              ogpImage: work.node.ogpImage,
              image01: work.node.image01,
              image02: work.node.image02,
              image03: work.node.image03,
              file: work.node.file,
              facebook: work.node.facebook,
              twitter: work.node.twitter,
              instagram: work.node.instagram,
              line: work.node.line,
              client: work.node.client,
              url: work.node.url,
              types: work.node.types,
              topics: work.node.topics,
            },
          })
        })

        const types = result.data.allContentfulTypes.edges
        types.forEach((type, index) => {
          createPage({
            path: `/work/${type.node.slug}`,
            component: typeTemplate,
            context: {
              id: type.node.id,
              slug: type.node.slug,
              title: type.node.title,
              description: type.node.description,
              works: type.node.works,
            },
          })
        })

        const topics = result.data.allContentfulTopics.edges
        topics.forEach((topic, index) => {
          createPage({
            path: `/work/${topic.node.slug}`,
            component: topicTemplate,
            context: {
              id: topic.node.id,
              slug: topic.node.slug,
              title: topic.node.title,
              works: topic.node.works,
            },
          })
        })

      })
    )
  })
}
