import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Autenticacao from "../../seguranca/Autenticacao";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import "primeicons/primeicons.css";

function Login() {
  const { pegaAutenticacao, gravaAutenticacao } = Autenticacao;

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [alerta, setAlerta] = useState({ status: "", message: "" });
  const [autenticado, setAutenticado] = useState(false);

  const acaoLogin = async (e) => {
    e.preventDefault();

    try {
      const body = {
        email: email,
        senha: senha,
      };
      await fetch(`${process.env.REACT_APP_ENDERECO_API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.auth === true) {
            setAlerta({ status: "success", message: JSON.stringify(json) });
            setAutenticado(true);
            gravaAutenticacao(json);
          } else {
            setAlerta({ status: "error", message: JSON.stringify(json) });
          }
        });
    } catch (err) {
      console.error(err);
    }

    try {
      const autenticacao = pegaAutenticacao();
      console.log(autenticacao);
      console.log("token: " + autenticacao.token);
      console.log("decoded: " + JSON.stringify(jwt_decode(autenticacao.token)));
    } catch {
      console.error("erro ao pegar usuario");
    }
  };

  useEffect(() => {
    const autenticacao = pegaAutenticacao();
    if (autenticacao != null) {
      console.log("autenticação não é null");
      if (autenticacao.auth === true) {
        setAutenticado(true);
      }
    }
  }, []);

  if (autenticado === true) {
    return <Navigate to="/privado" />;
  }

  return (
    <div
      class="flex justify-content-center align-items-center"
      style={{ marginTop: "5%" }}
    >
      <div>
        <div className="flex justify-content-center">
          <i
            className="pi pi-lock"
            style={{ fontSize: "2rem", color: "black" }}
          />
        </div>

        <h2 class="flex justify-content-center">Login de usuario</h2>
        <form onSubmit={acaoLogin} noValidate>
          <div>
            <span className="p-float-label" style={{ margin: "10px" }}>
              <InputText
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="username">Login</label>
            </span>
            <span
              className="p-float-label"
              style={{ margin: "10px", marginTop: "20px" }}
            >
              <InputText
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <label htmlFor="senha">Senha</label>
            </span>
            <Button
              type="submit"
              style={{ width: "100%", textAlign: "center" }}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
