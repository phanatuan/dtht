import React from 'react'

const Blog = ({blog}) => {
    return (
        <div>
            <h1>{blog.node.frontmatter.title}</h1>
            <h2>{blog.node.frontmatter.date}</h2>
            <p>{blog.node.frontmatter.description}</p>
        </div>
    )
}

export default Blog
