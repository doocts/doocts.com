import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout
    wideHeader
    largeTitle
    pageTitle="404 Not Found"
    pageDescription="ページが見つかりません。">
    <SEO
      title="404 Not Found"
      description="ページが見つかりません。"
      keywords="404,Not Found" />
  </Layout>
)

export default NotFoundPage
