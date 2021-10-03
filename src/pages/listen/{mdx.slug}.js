import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

const ListenSingle = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
        <p>{data.mdx.frontmatter.date}</p>
        <GatsbyImage
            image={getImage(data.mdx.frontmatter.image)}
            alt={`The album cover of ${data.mdx.frontmatter.title}`}
        />
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        image {
          childImageSharp {
              gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default ListenSingle