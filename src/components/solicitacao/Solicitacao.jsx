import NavBar from "../navbar/NavBar.jsx";
import styles from "./Solicitacao.module.scss";
import Home from "../../assets/Dashboard/home header.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Deletar from "../../assets/Solicitacao/deletar.png";
import Lixeira from "../../assets/Solicitacao/lixeira.png";
import Motivo from "../../assets/Solicitacao/motivo.png"
function Solicitacao() {
  return (
    <div className={styles.layoutSolicitacao}>
      <NavBar />

      <div className={styles.containerPrincipalSolicitacao}>
        <header className={styles.headerSolicitacao}>
          <img src={Home} alt="Vetor da casinha" />
          <img src={Seta} alt="Vetor da setinha" />
          <p> Reembolsos</p>
          <img src={Seta} alt="Vetor da setinha" />
          <p>Solicitação de Reembolsos</p>
        </header>

        <main className={styles.mainSolicitacao}>
          <form className={styles.formSolicitacao}>
            <div className={styles.grupo1}>
              <div className={styles.inputNome}>
                <label htmlFor="">Nome Completo</label>
                <input type="text" />
              </div>

              <div className={styles.inputEmpresa}>
                <label htmlFor="">Empresa</label>
                <input type="text" />
              </div>

              <div className={styles.inputPrestacao}>
                <label htmlFor="">Nº Prest. Contas</label>
                <input type="text" />
              </div>

              <div className={styles.inputMotivo}>
                <label htmlFor=""> Descrição / Motivo do Reembolso </label>
                <textarea name="" id="">
                  {" "}
                </textarea>
              </div>
            </div>

            <div className={styles.barraVertical}></div>

            <div className={styles.grupo2}>
              <div className={styles.inputData}>
                <label htmlFor="">Data</label>
                <input type="date" name="" id="" />
              </div>

              <div className={styles.tipoDeDespesas}>
                <label htmlFor=""> Tipo de Despesa </label>

                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value=""> Alimentação </option>
                  <option value=""> Combustível</option>
                  <option value=""> Condução</option>
                  <option value=""> Estacionamento</option>
                  <option value=""> Viagem Admin.</option>
                  <option value=""> Viagem Operacional</option>
                  <option value=""> Eventos de representação</option>
                </select>
              </div>

              <div className={styles.centroDeCusto}>
                <label htmlFor=""> Centro de Custo </label>

                <select name="" id="">
                  <option value=""> Selecionar</option>
                  <option value="">
                    1100109002 - FIN CONTROLES INTERNOS MTZ
                  </option>
                  <option value="">
                    1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                  </option>
                  <option value="">1100110101 - FIN CONTABILIDADE MTZ</option>
                </select>
              </div>

              <div className={styles.ordem}>
                <label> Ord. Int.</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.divisoes}>
                <label> Div.</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.pep}>
                <label> PEP</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.moeda}>
                <label htmlFor=""> Moeda</label>
                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value="">BRL</option>
                  <option value="">ARS</option>
                  <option value="">USD</option>
                </select>
              </div>

              <div className={styles.distancia}>
                <label htmlFor=""> Dist / Km</label>
                <input type="text" name="" id="" />
              </div>

              <div className={styles.valorKm}>
                <label> Valor / Km</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.valorFaturado}>
                <label> Val. Faturado</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.despesa}>
                <label> Despesa</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.botoes}>
                <button className={styles.botaoSalvar}> + Salvar</button>
                <button className={styles.botaoDeletar}>
                  {" "}
                  <img src={Deletar} alt="" />
                </button>
              </div>
            </div>
          </form>

          {/* table é a tag principal que vai definir a tabela */}
          {/* thead é a tag que agrupa o cabeçalho */}
          {/* tr é a linha da tabela */}
          {/* th título da tabela, um para cada título, ex: nome - idade - estado */}
          {/* tbody agrupa o corpo da tabela (os dados que será recebido) */}

          <table>
            <thead>
              <tr>
                <th></th>
                <th>Colaborador(a)</th>
                <th>Empresa</th>
                <th>Nº Prest.</th>
                <th>Data</th>
                <th>Motivo</th>
                <th>Tipo de despesa</th>
                <th>Ctr. Custo</th>
                <th>Ord. Int.</th>
                <th>Div.</th>
                <th>PEP</th>
                <th>Moeda</th>
                <th>Dist. Km</th>
                <th>Val. Km</th>
                <th>Val. Faturado</th>
                <th>Despesa</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td> <img src={Lixeira} alt="ícone da lixeira" /></td>
                <td>Samuel Prata</td>
                <td>VnW</td>
                <td>10</td>
                <td>12/08/23</td>
                <td> <img src={Motivo} alt="ícone do motivo" /></td>
                <td>Gosta muito de pagode </td>
                <td>Tomar muita água</td>
                <td>200</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>BRL</td>
                <td>12</td>
                <td>20</td>
                <td>300</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
export default Solicitacao;
