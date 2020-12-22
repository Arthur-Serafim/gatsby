/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import "glider-js/glider.min.css"
import Glider from "glider-js"
import ArrowLeft from "../../../images/elements/arrow-left.svg"
import ArrowRight from "../../../images/elements/arrow-right.svg"
import "./index.css"
import Card from '../Card/index'

function HomepageProductsDisplay({ products }) {
  React.useEffect(() => {
    new Glider(document.querySelector(".glider"), {
      slidesToScroll: 1,
      slidesToShow: 4,
      draggable: true,
      arrows: {
        prev: ".glider-prev",
        next: ".glider-next",
      },
      responsive: [
        {
          breakpoint: 1087,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 870,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 790,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 631,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 613,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    })
  }, [])

  return (
    <section sx={styles.section}>
      <h2 sx={styles.title}>Explore community choices</h2>
      <h2 sx={styles.subtitle}>
        Updated daily based on most popular choices among dev community
      </h2>
      <div>
        <button className="glider-prev glider-arrow" sx={styles.prevArrow}>
          <img
            src={ArrowLeft}
            alt="Show left cards"
            sx={{ height: "26px", objectFit: "cover", marginRight: "5px" }}
          />
        </button>
        <div class="glider">
          {products.map(product => {
            return (
              <Card styles={styles} product={product} />
            )
          })}
        </div>
        <button className="glider-next glider-arrow" sx={styles.nextArrow}>
          <img
            src={ArrowRight}
            alt="Show right cards"
            sx={{ height: "26px", objectFit: "cover", marginLeft: "5px" }}
          />
        </button>
      </div>
    </section>
  )
}

export default HomepageProductsDisplay

const styles = {
  section: {
    boxSizing: "border-box",
  },
  title: {
    fontWeight: "bold",
    fontSize: "28px",
    lineHeight: "34px",
    color: "#EEE",
  },
  subtitle: {
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#C4C4C4",
    width: "370px",
  },
  card: {
    background: "#331F41",
    border: "3px solid #969393",
    boxSizing: "border-box",
    borderRadius: "2px",
    padding: "30px 22px",
    height: "273px !important",
    width: "265px !important",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  },
  prevArrow: {
    left: "32px",
  },
  nextArrow: {
    right: "32px",
  },
}
