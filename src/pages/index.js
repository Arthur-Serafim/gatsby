import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/HomePage/Hero"
import ProductsDisplay from "../components/HomePage/ProductsDisplay"
import { Container } from "../components/Grid"
import NavbarProvider from "../context/NavbarContext"
import CartProvider from "../context/CartContext"
import { graphql } from "gatsby"

function Provider({ children }) {
  return (
    <CartProvider>
      <NavbarProvider>{children}</NavbarProvider>
    </CartProvider>
  )
}

export default function IndexPage({ data }) {
  return (
    <Provider>
      <Layout>
        <SEO title="Home" />
        <Container>
          <Hero />
        </Container>
        <Container css={{ marginTop: "222px" }}>
          <ProductsDisplay products={data.allMarkdownRemark.edges} />
        </Container>
      </Layout>
    </Provider>
  )
}

export const query = graphql`
  query Products {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            description
            name
            image
            price
            slug
            tag
          }
        }
      }
    }
  }
`
