/** @jsx jsx */
import { jsx } from "theme-ui"

function HomepageProductsDisplay() {
  return (
    <section sx={styles.section}>
      <h2 sx={styles.title}>Explore community choices</h2>
      <h2 sx={styles.subtitle}>Updated daily based on most popular choices among dev community</h2>
    </section>
  )
}

export default HomepageProductsDisplay

const styles = {
  section: {
    boxSizing: 'border-box',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '28px',
    lineHeight: '34px',
    color: '#EEE'
  },
  subtitle: {
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#C4C4C4',
    width: '370px'
  }
}