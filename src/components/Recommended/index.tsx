import { useState } from 'react'
import { ProductsList } from '../ProducstList'
import { ProductProps } from '../ProducstList/types'

import styles from './styles.module.scss'

export function Recommended() {

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
    },
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
    <section className={styles.recommended}>
      <div className={styles.container}>
        <h1>VOCÊ TAMBÉM PODE GOSTAR</h1>

        <ProductsList products={products} />
      </div>
    </section>
  )
}