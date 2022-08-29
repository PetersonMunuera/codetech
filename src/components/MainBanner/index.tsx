import styles from './styles.module.scss'

export function MainBanner() {
  return (
    <section className={styles.container} >
      <div>
        <h1>Conheça a nova linha de tecnologia 6G</h1>
        <button>SAIBA MAIS</button>
      </div>
      <img src="/images/banner-notebook.png" alt="Notebook" />
      <img src="/images/logo-mobile.svg" alt="Codetech" />
      <div className={styles.search}>
        <input type="text" placeholder='O que você procura?' />
        <img src="/icons/input-search.svg" alt="Buscar" />
      </div>

    </section>
  )
}