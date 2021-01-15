import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Section from '../components/section'
import List from '../components/section/list'
import Item from '../components/section/item'

const News = ({ data }) => {
  const news = data.allContentfulNews.edges
  return (
    <Layout pageTitle="お知らせ">
      <SEO
        title="お知らせ"
        description="ドークツからのお知らせ一覧です。"
        keywords="お知らせ,ニュース"
        url="https://doocts.com/news" />
      <Section>
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
      </Section>
    </Layout>
  )
}

export default News

export const query = graphql`
  query {
    allContentfulNews(filter: {node_locale: {eq: "ja-JP"}}, sort: {fields: createdAt, order: DESC}) {
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
    }
  }
`