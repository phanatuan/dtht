import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const BlogPost = ({data}) => {
  return (
    <Layout>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <p>By {data.markdownRemark.frontmatter.author}</p> <span>{data.markdownRemark.frontmatter.date}</span>
      <p>{data.markdownRemark.frontmatter.description}</p>
    </Layout>
  )
}

export default BlogPost

export const queryIndividualPost = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date
      }
    }
  }
`
