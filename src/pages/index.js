import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BlogList from "../components/BlogList";

const IndexPage = ({ data }) => {
  console.log(data)
  const { allFile, allMarkdownRemark } = data

  return (
    <Layout>
      <SEO title="Home" />
      <h1>This is a homepage</h1>
    </Layout>
  )
}

export default IndexPage

