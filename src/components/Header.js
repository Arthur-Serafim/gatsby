/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import React from 'react'

import { Container } from "../components/Grid"
import ShoppingCart from "../images/elements/shopping-cart.svg"
import ArrowBottom from "../images/elements/arrow-bottom.svg"
import ArrowTop from "../images/elements/arrow-top.svg"
import { useShowCart } from "../context/NavbarContext"
import { useCart } from "../context/CartContext"

export default function Header() {
  const { showCart, setShowCart } = useShowCart()
  const { cart } = useCart()

  React.useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <header sx={styles.header}>
      <Container
        sx={{
          maxWidth: [
            "100%",
            "552px",
            "732px",
            "910px",
            "1100px",
            "1320px",
            "1480px",
          ],
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Link to="/" sx={styles.mainLink}>
          JAM SHOP
        </Link>
        <div sx={{ position: "relative", padding: "0 5px", zIndex: 200 }}>
          <div
            sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
            onClick={() => cart.length > 0 && setShowCart(!showCart)}
          >
            <img
              src={ShoppingCart}
              alt="Shopping Cart"
              sx={styles.shoppingCart}
            />
            {showCart ? (
              <img
                src={ArrowTop}
                alt="Arrow Top"
                sx={styles.shoppingCart}
                sx={{ marginLeft: "15px", marginTop: "2px" }}
              />
            ) : (
              <img
                src={ArrowBottom}
                alt="Arrow Bottom"
                sx={styles.shoppingCart}
                sx={{ marginLeft: "15px", marginTop: "2px" }}
              />
            )}
            <div sx={styles.cartCount}>{cart.length}</div>
          </div>
          <div
            sx={styles.addToCartContainer}
            css={{
              opacity: showCart ? 1 : 0,
              pointerEvents: showCart ? "auto" : "none",
            }}
          >
            {cart.map(product => (
              <div sx={styles.productItem}>
                <img src={require(`../../../${product.image}`)} alt={product.description}/>
                <h3 sx={styles.productName}>{product.name}</h3>
                <h4 sx={styles.productPrice}>${product.price}</h4>
              </div>
            ))}
          </div>
        </div>
        <div
          onClick={() => setShowCart(false)}
          sx={styles.backgroundBlur}
          css={{
            opacity: showCart ? 1 : 0,
            pointerEvents: showCart ? "auto" : "none",
          }}
        />
      </Container>
    </header>
  )
}

Header.propTypes = {}

Header.defaultProps = {}

const styles = {
  header: {
    background: "transparent",
    position: "absolute",
    padding: "20px 0",
    width: "1",
    left: 0,
    top: 0,
  },
  mainLink: {
    variant: "text.link",
    fontWeight: "bold",
    color: "white",
    fontSize: 22,
    zIndex: 200,
  },
  shoppingCart: {
    maxWidth: 1,
    margin: "0",
  },
  cartCount: {
    justifyContent: "center",
    background: "#301346",
    alignItems: "center",
    position: "absolute",
    borderRadius: "50%",
    display: "flex",
    fontSize: "8px",
    height: "14px",
    color: "white",
    width: "14px",
    top: "8px",
    right: "20px",
  },
  addToCartContainer: {
    maxHeight: "calc(100vh - 100px)",
    padding: '18px 18px 50px 18px',
    border: "2px solid #F5F5F5",
    boxSizing: "border-box",
    transition: "all .5s",
    background: "#220538",
    height: "max-content",
    position: "absolute",
    borderRadius: "4px",
    minHeight: "276px",
    bottom: "-290px",
    overflow: 'auto',
    width: "281px",
    top: '50px',
    right: 0,
  },
  backgroundBlur: {
    background: "rgba(28, 4, 46, 0.55)",
    backdropFilter: "blur(10px)",
    transition: "all .5s",
    position: "fixed",
    zIndex: 100,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  productItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between"
  },
  productPrice: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '14px',
    color: '#EEEEEE',
  },
  productName: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '14px',
    color: '#EEEEEE'
  }
}
