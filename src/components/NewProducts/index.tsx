import { useState } from 'react'
import { ProductsList } from '../ProducstList'
import { ProductProps } from '../ProducstList/types'

import styles from './styles.module.scss'

export function NewProducts() {
  const [products, setProducts] = useState<ProductProps[]>([
    {
      image: '/images/product-1.png',
      name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
      rating: 4.6,
      oldPrice: 600,
      currentPrice: 500
    },
    {
      image: '/images/product-1.png',
      name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
      rating: 4.6,
      oldPrice: 600,
      currentPrice: 500
    }
  ])

  return (
    <section className={styles.newProducts}>
      <div className={styles.container}>
        <h1>NOVIDADES</h1>

        <div className={styles.products}>
          <div className={styles.highlight}>
            <header>
              <span className={styles.tag}>10% OFF</span>
            </header>
            <img src="/images/highlight-product.png" alt="" />
            <h1>Notebook VAIO® FE15 Intel® Core™ i7 + Headphone G300</h1>
            <span className={styles.oldPrice}>R$ 600,00</span>
            <span className={styles.currentPrice}>R$ 500,00</span>
            <button>Comprar</button>
          </div>

          <ProductsList products={products} />
        </div>
      </div>
    </section>
  )
}