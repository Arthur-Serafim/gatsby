/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'

import Plus from "../../../images/elements/plus.svg"
import { navigate } from "gatsby"
import { useCart } from "../../../context/CartContext"

export default function Card({ styles, product }) {
  const { cart, setCart } = useCart()

  function handleAddToCart(e) {
    e.stopPropagation()

    setCart([...cart, product.node.frontmatter])
  }

  return (
    <figure
      sx={styles.card}
      key={Math.random() * 10000}
      onClick={() => navigate(`/products/${product.node.frontmatter.slug}`)}
    >
      <img
        className="card-image"
        src={require(`../../../${product.node.frontmatter.image}`)}
        alt={product.node.frontmatter.description}
      />
      <div>
        <h2 className="card-name">{product.node.frontmatter.name}</h2>
        <figcaption className="card-description">
          {product.node.frontmatter.description}
        </figcaption>
        <button
          className="card-button"
          onClick={e => handleAddToCart(e)}
        >
          <img src={Plus} alt="Add to cart" />
        </button>
      </div>
    </figure>
  )
}