import styles from "./Reembolsos.module.scss";
import Home from "../../assets/Dashboard/home header.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Analises from "../../assets/Dashboard/Análises.png";
import NumeroAnalises from "../../assets/Dashboard/N-Análises.png";
import NumeroAprovados from "../../assets/Dashboard/N-Aprovados.png";
import NumeroRejeitados from "../../assets/Dashboard/N-Rejeitados.png";
import NumeroSolicitados from "../../assets/Dashboard/N-Solicitados.png";
import Sistema from "../../assets/Dashboard/Sistema-atualizado.png";
import SolicitarHistorico from "../../assets/Dashboard/Solicitar - Histórico.png";
import SolicitarReembolso from "../../assets/Dashboard/Solicitar - Reembolso.png";
function Rembolsos() {
  return (
    <div>
      <header>
        <img src={Home} alt="Casinha da header" />
        <img src={Seta} alt="Setinha da header" />
        <p>Reembolsos</p>
      </header>

      <main>
        <h1>Sistema de Reembolsos</h1>
        <p>
          Solicite novos pedidos de reembolso, visualize solicitações em análise
          e todo o histórico.
        </p>

        <section className={styles.containerCards}>

          <article className={styles.card}>
            <img src={SolicitarReembolso} alt="" />
            <p>Solicitar Reembolso</p>
          </article>

          <article className={styles.card}>
            <img src={Analises} alt="" />
            <p>Verificar análises</p>
          </article>

          <article className={styles.card}>
            <img src={SolicitarHistorico} alt="" />
            <p>Histórico</p>
          </article>




        </section>


      </main>
    </div>
  );
}
export default Rembolsos;
