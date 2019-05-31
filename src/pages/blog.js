import React from "react"
import BlogList from "../components/BlogList"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Link } from "gatsby"

const renderBlogList = data => {
  const { allMarkdownRemark } = data

  return allMarkdownRemark.edges.map(({ node }) => (
    <Link to={node.fields.slug}>
      <h1>{node.frontmatter.title}</h1>
    </Link>
  ))
}

const blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <h2>There are {data.allMarkdownRemark.totalCount} Blog Post</h2>
      {renderBlogList(data)}
    </Layout>
  )
}

export default blog

export const allBlogQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            description
            date
            title
          }
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`
