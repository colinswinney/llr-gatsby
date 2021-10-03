import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const ListenPage = ({ data }) => {

    return (
        <Layout pageTitle="Listen">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            {
            data.allMdx.nodes.map((node) => (
                <article key={node.id}>
                    <h2>
                        <Link to={`/listen/${node.slug}`}>
                            {node.frontmatter.title}
                        </Link>
                    </h2>
                    <Link to={`/listen/${node.slug}`}>
                        <GatsbyImage
                            image={getImage(node.frontmatter.image)}
                            alt={`The album cover of ${node.frontmatter.title}`}
                        />
                    </Link>
                    <p>Released: {node.frontmatter.date}</p>
                </article>
            ))
            }
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                    image {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
                id
                slug
            }
        }
    }
`

export default ListenPage