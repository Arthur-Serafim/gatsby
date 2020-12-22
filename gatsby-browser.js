/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import NavbarProvider from "./src/context/NavbarContext"
import CartProvider from "./src/context/CartContext"

function Provider({ children }) {
  return (
    <CartProvider>
      <NavbarProvider>{children}</NavbarProvider>
    </CartProvider>
  )
}

export const wrapRootElement = ({ element }) => (
  <Provider>{element}</Provider>
)