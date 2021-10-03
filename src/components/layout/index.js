import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Nav from '../nav'
import Footer from '../footer'
import { GlobalStyles } from '../../styles/global'
import { LayoutEl } from './styles/layout'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <LayoutEl>
      <Helmet>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      </Helmet>
      <GlobalStyles />
      <Nav />
      {children}
      <Footer />
    </LayoutEl>
  )
}

export default Layout