import styles from './styles.module.scss'
import { ProductsList } from './types'

export function ProductsList({products}: ProductsList) {
  return (
    <ul className={styles.productsList}>
      {products.map((product, key) => (
        <li key={key}>
          <header style={{ backgroundImage: `url(${product.image})` }}>
            <span>10% OFF</span>
          </header>
          <div className={styles.productData}>
            <h1>{product.name}</h1>
            <div className={styles.rating}>
              <img src="/icons/star.svg" alt="" />
              <img src="/icons/star.svg" alt="" />
              <img src="/icons/star.svg" alt="" />
              <img src="/icons/star.svg" alt="" />
              <img src="/icons/star-empty.svg" alt="" />
              <span>{product.rating}</span>
            </div>
            <span className={styles.oldPrice}>R$ {product.oldPrice.toFixed(2).replace('.',',')}</span>
            <span className={styles.currentPrice}>R$ {product.currentPrice.toFixed(2).replace('.',',')}</span>
            <button>Comprar</button>
          </div>
        </li>
      ))}
    </ul>
  )
}