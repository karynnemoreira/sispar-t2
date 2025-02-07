import Capa from "../../assets/Tela Login/imagem tela de login.png";
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from "./Login.module.scss"; //importando o componente de estilização do Login

function Login() {
  return (
    <main>
      <section className={styles.containerLogin}>
        <img src={Capa} alt="Foto de um navio cargueiro" />
      </section>

      <section>
        <div>
          <img src={Logo} alt="Logo da wilson sons" />
          <h1>Boas vindas ao Novo Portal SISPAR </h1>

          <p>Sistema de Emissão de Boletos e Parcelamento</p>
        </div>

        <form action="">
          <input type="email" name="email" id="email" placeholder="Email" />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
          />

          <p>Esqueci minha senha</p>

          <div>
            <button>Entrar</button>
            <button>Criar conta</button>
          </div>
        </form>
      </section>
    </main>
  );
}
export default Login;
