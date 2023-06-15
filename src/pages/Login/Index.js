import './Index.css';

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Api from '../../config/Service/Api'

import Button from '../../components/Forms/Button/Index';
import Header from '../../components/Header/Main_header/Index';
import Second_header from '../../components/Header/Second_header/Index';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function login(e){
        e.preventDefault();

        const data = {
            email,
            password,
        };

        try {
            const response = await Api.post('api/v1/auth/authenticate', data);

            localStorage.setItem('accessToken',response.data.data.accessToken)
            localStorage.setItem('refreshToken',response.data.data.refreshToken)

            navigate("/feed", { replace: true });
        } catch (err) {
            alert('Insira os dados corretamente e tente novamente!!!');
        }
    };

  return (
    <>
    <Header />
    <Second_header 
      title={"LOGIN"}
      sub_title={"CONTIUNUE DE ONDE PAROU"}
    />

    <div class="login-main">
      <div class="login-register">
        <h2>Criar uma nova conta</h2>
        <Link to="cadastro_usuario">Cadastre-se</Link>
      </div>
      <div class="login-enter">
        <form class="form-login" onSubmit={login}>
          <h2>Já tenho conta</h2>
          <input
            class="field-login"
            value={email}
            type="email"
            placeholder="*E-mail"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            class="field-login"
            value={password}
            type="password"
            placeholder="*Senha"
            onChange={e => setPassword(e.target.value)}
          />
          <div class="check-login">
            <input type="checkbox" />
            <label>Lembrar senha</label>
          </div>
          <Button type={"submit"} value={"Entrar"} />
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;