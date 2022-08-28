import styles from './styles.module.scss'

export function Header() {
  return (
    <>
      <header className={styles.contactHeader}>
        <div className={styles.container}>
          <nav>
            <a href="#">Institucional</a>
            <a href="#">Contato</a>
          </nav>
          <div className={styles.socialMedias}>
            <a href="#">
              <img src='/icons/instagram.svg' alt="Instagram" />
            </a>
            <a href="#">
              <img src='/icons/facebook.svg' alt="Facebook" />
            </a>
          </div>
        </div>
      </header>

      <header className={styles.mainHeader}>
        <img src="/images/logo.svg" alt="Codetech" />
        <nav>
          <a href="#">Todos os departamentos</a>
          <a href="#">Lançamentos</a>
          <a href="#">Destaques</a>
          <a href="#">PC Gamer</a>
          <a href="#">Eletrônicos</a>
          <a href="#" className={styles.active}>Ofertas</a>
        </nav>

        <div className={styles.menu}>
          <a href="#">
            <img src="/icons/search.svg" alt="Buscar" />
          </a>
          <a href="#">
            <img src="/icons/profile.svg" alt="Perfil" />
          </a>
          <a href="#">
            <img src="/icons/cart.svg" alt="Carrinho" />
          </a>
        </div>
      </header>
    </>
  )
}