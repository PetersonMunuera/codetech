import styles from './styles.module.scss'

export function Subscribe() {
  return (
    <section className={styles.subscribe}>
      <div className={styles.container}>
        <img src="/images/logo.svg" alt="Codetech" />
        <p>Faça parte do clube Codetech e ganhe <br /><strong>10% de desconto</strong> na sua primeira compra!</p>

        <div className={styles.input}>
          <input type="email" placeholder='Digite seu email' />
          <button>Enviar</button>
        </div>
      </div>
    </section>
  )
}