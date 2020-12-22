/** @jsx jsx */
import { jsx } from "theme-ui"
import { useCart } from "../../../context/CartContext"

export default function Description({ selectedProduct, styles }) {
  const { cart, setCart } = useCart()

  function handleCart() {
    setCart([...cart, selectedProduct])
  }

  return (
    <div sx={styles.productItem}>
      <span sx={styles.productTag}>{selectedProduct.tag}</span>
      <h1 sx={styles.productName}>{selectedProduct.name}</h1>
      <p sx={styles.productDescription}>{selectedProduct.description}</p>
      <span sx={styles.productPrice}>${selectedProduct.price}</span>
      <button sx={styles.submitButton} onClick={handleCart}>
        Add to cart
      </button>
    </div>
  )
}
