import React from "react"

const NavbarContext = React.createContext()

export default function NavbarProvider({ children }) {
  const [showCart, setShowCart] = React.useState(false)

  return (
    <NavbarContext.Provider
      value={{
        showCart,
        setShowCart,
      }}
    >
      {children}
    </NavbarContext.Provider>
  )
}

export function useShowCart() {
  const context = React.useContext(NavbarContext)

  if (!context) throw new Error("useShowCart must be within NavbarContext")

  const { showCart, setShowCart } = context
  return { showCart, setShowCart }
}
