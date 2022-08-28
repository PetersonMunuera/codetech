import styles from './styles.module.scss'

export function Benefits() {
  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.benefit}>
          <img src="/icons/cards.svg" alt="Cartões" />
          <span>PAGAMENTO COM DOIS CARTÕES</span>
        </div>
        <div className={styles.benefit}>
          <img src="/icons/codebar.svg" alt="10% OFF" />
          <span>ATÉ 10% OFF NO BOLETO</span>
        </div>
        <div className={styles.benefit}>
          <img src="/icons/pix.svg" alt="Pix" />
          <span>ATÉ 15% OFF NO PIX</span>
        </div>
        <div className={styles.benefit}>
          <img src="/icons/delivery.svg" alt="Frete Grátis" />
          <span>FRETE GRÁTIS</span>
        </div>
        <div className={styles.benefit}>
          <img src="/icons/flash.svg" alt="Entrega" />
          <span>ENTREGA EXPRESSA</span>
        </div>
      </div>
    </section>
  )
}