import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default function Blog(props) {
  const data = props.data.markdownRemark

  return (
    <Layout>
      <article>
        <h1>{data.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.html }} />
      </article>
    </Layout>
  )
}

// dynamic page query, must occur within each post context
// $slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
      html
    }
  }
`
