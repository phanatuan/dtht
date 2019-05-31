const { createFilePath } = require("gatsby-source-filesystem")
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name:`slug`,
      value: slug,
    })

    // const fileNode = getNode(node.parent)
    // console.log('\n', fileNode.relativePath)
    // console.log('***', createFilePath({node, getNode, basePath: `content`}))
  }
  // console.log('******', node.internal.type);
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/BlogPost.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
