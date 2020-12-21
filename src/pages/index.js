import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/HomePage/Hero"
import ProductsDisplay from "../components/HomePage/ProductsDisplay"
import { Container } from "../components/Grid"
import NavbarProvider from "../context/NavbarContext"
import { graphql } from 'gatsby'

function Provider({ children }) {
  return <NavbarProvider>{children}</NavbarProvider>
}

export default function IndexPage({ data }) {
  const products = data.allMarkdownRemark.edges

  return (
    <Provider>
      <Layout>
        <SEO title="Home" />
        <Container>
          <Hero />
        </Container>
        <Container css={{ marginTop: "222px" }}>
          <ProductsDisplay products={products} />
        </Container>
      </Layout>
    </Provider>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            description
            image
            name
          }
        }
      }
    }
  }
`
