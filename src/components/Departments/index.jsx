import styles from './styles.module.scss'

export function Departments() {
  return (
    <section className={styles.container}>
      <ul className={styles.departamentsList}>
        <li>
          <div className={styles.imgContainer}>
            <img src="/images/fone.png" alt="Fone de ouvido" />
          </div>
          <span>Fone de ouvido</span>
        </li>
        <li>
          <div className={styles.imgContainer}>
            <img src="/images/carregador.png" alt="Carregador" />
          </div>
          <span>Carregador</span>
        </li>
        <li>
          <div className={styles.imgContainer}>
            <img src="/images/computador.png" alt="Computador" />
          </div>
          <span>Computador</span>
        </li>
        <li>
          <div className={styles.imgContainer}>
            <img src="/images/lampada.png" alt="Casa inteligente" />
          </div>
          <span>Casa inteligente</span>
        </li>
        <li>
          <div className={styles.imgContainer}>
            <img src="/images/hd.png" alt="Acessórios" />
          </div>
          <span>Acessórios</span>
        </li>
        <li>
          <div className={styles.imgContainer}>
            <img src="/images/tv.png" alt="Televisores" />
          </div>
          <span>Televisores</span>
        </li>
        <li>
          <div className={styles.imgContainer}>
            <img src="/images/projetor.png" alt="Projetores" />
          </div>
          <span>Projetores</span>
        </li>
        <li>
          <div className={styles.imgContainer}>
            <img src="/images/celulares.png" alt="Celulares" />
          </div>
          <span>Celulares</span>
        </li>
      </ul>
    </section>
  )
}