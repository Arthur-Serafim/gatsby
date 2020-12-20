import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/HomePage/Hero"
import ProductsDisplay from "../components/HomePage/ProductsDisplay"
import { Container } from "../components/Grid"
import NavbarProvider from '../context/NavbarContext'

function Provider({ children }) {
  return (
    <NavbarProvider>
      { children }
    </NavbarProvider>
  )
}

export default function IndexPage() {
  return (
    <Provider>
      <Layout>
        <SEO title="Home" />
        <Container>
          <Hero />
        </Container>
        <Container css={{ marginTop: '222px' }}>
          <ProductsDisplay />
        </Container>
      </Layout>
    </Provider>
  )
}
