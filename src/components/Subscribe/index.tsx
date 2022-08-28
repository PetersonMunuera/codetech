import styles from './styles.module.scss'

export function Subscribe() {
  return (
    <section className={styles.subscribe}>
      <div className={styles.container}>
        <p>Faça parte do clube Codetech e ganhe 10% de desconto na sua primeira compra!</p>

        <div className={styles.input}>
          <input type="email" placeholder='Digite seu email' />
          <button>Enviar</button>
        </div>
      </div>
    </section>
  )
}