import styles from './styles.module.scss'

export function Highlights() {
  return (
    <section className={styles.highlights}>
      <div className={styles.container}>
        <h1>PRODUTOS EM DESTAQUE</h1>

        <ul className={styles.productsList}>
          <li>
            <header style={{backgroundImage: 'url(/images/product-1.png)'}}>
              <span>10% OFF</span>
            </header>
            <div className={styles.productData}>
              <h1>Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata</h1>
              <div className={styles.rating}>
                <img src="/icons/star.svg" alt="" />
                <img src="/icons/star.svg" alt="" />
                <img src="/icons/star.svg" alt="" />
                <img src="/icons/star.svg" alt="" />
                <img src="/icons/star-empty.svg" alt="" />
                <span>4.6</span>
              </div>
              <span className={styles.oldPrice}>R$ 600,00</span>
              <span className={styles.currentPrice}>R$ 500,00</span>
              <button>Comprar</button>
            </div>
          </li>
          <li>
            <header style={{backgroundImage: 'url(/images/product-1.png)'}}>
              <span>10% OFF</span>
            </header>
            <div className={styles.productData}>
              <h1>Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata</h1>
              <div className={styles.rating}>
                <img src="/icons/star.svg" alt="" />
                <img src="/icons/star.svg" alt="" />
                <img src="/icons/star.svg" alt="" />
                <img src="/icons/star.svg" alt="" />
                <img src="/icons/star-empty.svg" alt="" />
                <span>4.6</span>
              </div>
              <span className={styles.oldPrice}>R$ 600,00</span>
              <span className={styles.currentPrice}>R$ 500,00</span>
              <button>Comprar</button>
            </div>
          </li>
          <li>
            <header style={{backgroundImage: 'url(/images/product-1.png)'}}>
              <span>10% OFF</span>
            </header>
            <div className={styles.productData}>
              <h1>Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata</h1>
              <div className={styles.rating}>
                <img src="/icons/star.svg" alt="" />
                <img src="/icons/star.svg" alt="" />
                <img src="/icons/star.svg" alt="" />
                <img src="/icons/star.svg" alt="" />
                <img src="/icons/star-empty.svg" alt="" />
                <span>4.6</span>
              </div>
              <span className={styles.oldPrice}>R$ 600,00</span>
              <span className={styles.currentPrice}>R$ 500,00</span>
              <button>Comprar</button>
            </div>
          </li>
          <li>
            <header style={{backgroundImage: 'url(/images/product-1.png)'}}>
              <span>10% OFF</span>
            </header>
            <div className={styles.productData}>
              <h1>Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata</h1>
              <div className={styles.rating}>
                <img src="/icons/star.svg" alt="" />
                <img src="/icons/star.svg" alt="" />
                <img src="/icons/star.svg" alt="" />
                <img src="/icons/star.svg" alt="" />
                <img src="/icons/star-empty.svg" alt="" />
                <span>4.6</span>
              </div>
              <span className={styles.oldPrice}>R$ 600,00</span>
              <span className={styles.currentPrice}>R$ 500,00</span>
              <button>Comprar</button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}