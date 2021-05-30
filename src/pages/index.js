import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Lesson from "../components/lesson/Lesson"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Lesson />
  </Layout>
)

export default IndexPage
