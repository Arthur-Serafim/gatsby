/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import React from "react"
import Header from "../../components/Header"
import NavbarProvider from "../../context/NavbarContext"
import Description from "../../components/Products/Description"
import CartProvider from "../../context/CartContext"

export default function({ params, data }) {
  const [selectedProduct, setSelectedProduct] = React.useState({})
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    let filtered = data.allMarkdownRemark.edges.find(
      markdown => markdown.node.frontmatter.slug === params["*"]
    )

    if (!filtered) return;

    setSelectedProduct(filtered.node.frontmatter)
    setLoaded(true)
  }, [])

  function Provider({ children }) {
    return (
      <CartProvider>
        <NavbarProvider>{children}</NavbarProvider>
      </CartProvider>
    )
  }

  return (
    <Provider>
      <div>
        <Header />
        {loaded && (
          <div sx={styles.productGrid}>
            <div sx={styles.productItem} css={{ alignItems: "center" }}>
              <img
                css={{ height: "365px" }}
                src={require(`../../${selectedProduct.image}`)}
                alt={selectedProduct.description}
              />
            </div>
            <Description selectedProduct={selectedProduct} styles={styles} />
          </div>
        )}
      </div>
    </Provider>
  )
}

const styles = {
  productGrid: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "100%",
    boxSizing: "border-box",
    padding: "0 200px",
    gridGap: "140px",
    height: "100vh",
    display: "grid",
    width: "100%",
  },
  submitButton: {
    textTransform: "uppercase",
    justifyContent: "center",
    background: "#AB528D",
    alignItems: "center",
    marginTop: "25px",
    cursor: "pointer",
    fontSize: "13px",
    display: "flex",
    padding: '13px 33px',
    width: 'max-content',
    border: "none",
    color: "#EEE",
  },
  productItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  productTag: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#FBE067',
    textTransform: 'uppercase'
  },
  productName: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '32px',
    lineHeight: '39px',
    color: '#EEEEEE',
    marginTop: '18px',
    marginBottom: '6px'
  },
  productDescription: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '18px',
    lineHeight: '22px',
    color: '#C4C4C4',
  },
  productPrice: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '22px',
    lineHeight: '26px',
    color: '#EEEEEE',
  }
}

export const query = graphql`
  query ProductData {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            description
            image
            name
            price
            tag
            slug
          }
        }
      }
    }
  }
`
