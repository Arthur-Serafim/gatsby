import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/HomePage/Hero"
import ProductsDisplay from "../components/HomePage/ProductsDisplay"
import { Container } from "../components/Grid"
import { graphql } from "gatsby"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Hero />
      </Container>
      <Container css={{ marginTop: "222px" }}>
        <ProductsDisplay products={data.allMarkdownRemark.edges} />
      </Container>
    </Layout>
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
