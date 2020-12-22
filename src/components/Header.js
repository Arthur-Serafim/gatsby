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
  const { cart, setCart } = useCart()

  function handleSubmit() {
    setShowCart(false)
    setCart([])
  }

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
              <div sx={styles.productItem} key={Math.random() * 100000}>
                <img
                  css={{ height: "40px", marginRight: "15px" }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAYAAAB/E6/TAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARFSURBVHgBvVZ9TFtVFD+DtnRjtA9aGHYbloBQQeAhmAGiFOPEmDSg4pYt0zE1mZjo5rZ/lpix6n/bsrCYuWRmWZ1m6jTiskUXM9NidH6RQTWDQaYUQWYrH4+CUNqV6zmXV0KTbe+5kP2Sm3vuufee3z0f990HoB52bG5brsAK81IZybJuSdFSvz6LdX71NLt+eStvP59/llWVZRLhTjUGlqlYY32o2Nz//uFHITUtJW4iOBmG5175Wvq1ZzQbh9LtjCSAMlqan7fB8uQk+OTcNRgcnuLtDMqGFB20vFEugAqvNMo86FGJGXRaDRTmpcGLu9ycoNX5MJ98ID+NOlHJiKJHglEnxGQjErBFMsEw3xuV7CgSSRNh77B/GqLROXjvdDf3ZIMjB46jTLjU8Td1XiU7ibfQkxd6bCFZbsiyJENluQX0SYk8XGVF6RAYnUHyHrjSN9aMa4jRCrcoiptV3Q6jQbffliMIP3UGpMqyVcJ92fGRobA51lvhw8/7+HhgaBLaf7zuW1eaYQ2MhHz9g0EXqp03IzoZ82SjI6eh1VkNpz7thsBYGN58vQxWJmv5pBScRYPDIBiSoKbCEke+661LUCGa4bHqLNiGBXPB8+cXsnc+IqXQWUuzV7t2OGrEoRHJdtC5jp/4/MV+EAvTochmAo0mgRNsee0bbrT3dwkOHvNCSYEZMtNXcJ3/n2kY9v/L92SYlsNQ35zt1aeqxd6/AvbgTMjJiyESjcJAYBwmQyFYa1nJNxZgKdN9iWARUGh244kvfuwA6xoDiEhw4pAdXtrj5l4SurpHIWv1/F6yEZyZ4Tbn2Fxc6HbKSa/vbd8kUskGRqagee/30HbiSZ4LwaADLxqLlTeFj3SYT9jamA+1G87CB0dqsVh0cKV3DB7fdK4Ll52VQ+eKlXcrtv00QbefkGrUQ+RGFMt7FsYnQnDvmhTwYPgO76vi7VuUSwpM3FspGIbZ0A3Qaubv/wXPIHVHZJuuxR7FQF65NzpyxcryVXDg3U545+1H4OofEuh1lE6GXo3xhTUV93ACOgDhwNHLsPmZPLxXfvo8eVBVCyrQIIezaff2Etb/wxaGp2fXvtvMPjtexzBXXMbKYxHfdvZCYz5btMcOdwCBngJ/VxPr+LKRG65/woqG8xaIiai0yDyuZEjNM+HGArFTJWm1CQv3iPJDoBzlVp92objtdkbUPBPOfYd+gWlMNoEuaoyE8FvPKFWXU8lIIijDh9+yZQNDU/ZC/MaZ0/RcSZ68vKcdnK0de3HogSWEu7zYzIrvNzGstNh/w0m1m9XkiKMgVxg/c6xWMJkMCzqb/SNpIhhOVbNfTY4I9geLTIJWGx/pupq1dO8UX1eCmqecINLjd/TUVVhMFpyMUGfF1gVLCLqQbXWijVXZrJSfNlmnCmpDR6D3xZuTaYZ8SwaNvbJuyYnuKpr0Oi1bkaSl0DX9n43/AeyNm3onNmK2AAAAAElFTkSuQmCC"
                  alt={product.description}
                />
                <h3 sx={styles.productName}>{product.name}</h3>
                <h4 sx={styles.productPrice}>${product.price}</h4>
              </div>
            ))}
            <button sx={styles.submitButton} onClick={handleSubmit}>
              Submit
            </button>
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
    right: "20px",
    width: "14px",
    top: "8px",
  },
  addToCartContainer: {
    maxHeight: "calc(100vh - 100px)",
    border: "2px solid #F5F5F5",
    boxSizing: "border-box",
    transition: "all .5s",
    background: "#220538",
    height: "max-content",
    position: "absolute",
    borderRadius: "4px",
    minHeight: "276px",
    bottom: "-290px",
    overflow: "auto",
    padding: "18px",
    width: "281px",
    top: "50px",
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
    alignItems: "center",
    display: "flex",
  },
  productPrice: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "14px",
    marginLeft: "auto",
    fontSize: "12px",
    color: "#EEEEEE",
  },
  productName: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "14px",
    fontSize: "12px",
    color: "#EEEEEE",
  },
  submitButton: {
    textTransform: "uppercase",
    justifyContent: "center",
    background: "#AB528D",
    alignItems: "center",
    marginLeft: "auto",
    marginTop: "25px",
    cursor: "pointer",
    fontSize: "12px",
    display: "flex",
    height: "26px",
    border: "none",
    color: "#EEE",
    width: "88px",
  },
}
