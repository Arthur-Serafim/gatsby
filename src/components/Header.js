/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Container } from "../components/Grid"
import ShoppingCart from '../images/elements/shopping-cart.svg'

export default function Header() {
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Link to="/" sx={styles.mainLink}>
          JAM SHOP
        </Link>
        <div sx={{ position: 'relative', padding: '0 5px', cursor: 'pointer' }} >
          <img src={ShoppingCart} alt="Vector Monitor" sx={styles.shoppingCart} />
          <div sx={styles.cartCount} >
            0
          </div>
        </div>
      </Container>
    </header>
  )
}

Header.propTypes = {}

Header.defaultProps = {}

const styles = {
  header: {
    padding: "20px 0",
    position: "absolute",
    top: 0,
    left: 0,
    width: "1",
    background: "transparent",
  },
  mainLink: {
    variant: "text.link",
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
  shoppingCart: {
    maxWidth: 1,
    margin: '0',
  },
  cartCount: {
    position: 'absolute',
    top: '8px',
    right: 0,
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    background: '#301346',
    fontSize: '8px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
