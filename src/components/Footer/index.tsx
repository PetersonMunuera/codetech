import styles from './styles.module.scss'

export function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.siteMap}>
          <img src="/images/logo.svg" alt="Codetech" />
          <nav>
            <h1>Atendimento ao cliente</h1>
            <a href="#">Ajuda</a>
            <a href="#">Entre em contato</a>
            <a href="#">Minha conta</a>
            <a href="#">Meus pedidos</a>
          </nav>
          <nav>
            <h1>Entrega e reembolsos</h1>
            <a href="#">Entregas</a>
            <a href="#">Entregas e prazos</a>
            <a href="#">Pedidos, preços e pagamento</a>
            <a href="#">Retornos e reembolsos</a>
          </nav>
          <nav>
            <h1>Políticas</h1>
            <a href="#">Termos e condições</a>
            <a href="#">Política de Cookies</a>
            <a href="#">Pagamentos</a>
          </nav>
          <div className={styles.payments}>
            <h1>Métodos de pagamento</h1>
            <img src="/images/payments.png" alt="Métodos de pagamento" />
          </div>
        </div>
        <div className={styles.stamp}>
          <img src="/images/stamp.png" alt="Selos" />
        </div>
        <div className={styles.copyright}>
          Todos os direitos reservados © 2020 - Time Codeby Hackathon - 2022
        </div>
      </div>
    </section>
  )
}