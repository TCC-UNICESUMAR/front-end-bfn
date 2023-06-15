import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header/Main_header/Index';
import './Index.css';
import Second_header from "../../components/Header/Second_header/Index";
import Button from "../../components/Forms/Button/Index";
import { insertMaskPhone } from "../../components/Mask/Mask_phone/Index";
import { insertMaskCpfCnpj } from '../../components/Mask/Mask_cpf_cnpj/Index';
import { insertMaskCep } from '../../components/Mask/Mask_cep/Index';
import Api from '../../config/Service/Api'

function User_register() {
  const [name, setName] = useState('');
  const [cnpjOrCpf, setCnpjOrCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirm, setPasswordConfirm] = useState('');
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  async function new_user(e) {

    e.preventDefault();

    const data = {
      name,
      cnpjOrCpf,
      phone,
      email,
      password
    };

    console.log(data)

    try {
        await Api.post("/api/v1/user/register", data)
        alert('Sucesso!!!');
        navigate("/", { replace: true });
    } catch (err) {
        alert('Prencha todos os campos corretamente!!!');
    }

  }

  return (
    <div>
      <Header />
      <Second_header
        title={"CADASTRO"}
        sub_title={"INICIE UMA NOVA HISTÓRIA"}
      />
      <div className="back-user-register">
        <form className="User_register_cad" onSubmit={new_user}>
          <div className="input_register_cad">
            <input
              value={name}
              minLength="3"
              type="text"
              placeholder="*Nome"
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="input_register_cad">
            <input
              value={insertMaskCpfCnpj(cnpjOrCpf)}
              maxLength="18"
              type="text"
              placeholder="*CPF/CNPJ"
              onChange={e => setCnpjOrCpf(e.target.value)}
            />
          </div>
          <div className="input_register_cad">
            <input
              value={insertMaskPhone(phone)}
              maxLength="15"
              type="text"
              placeholder="*Telefone"
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <div className="input_register_cad">
            <input
              value={insertMaskCep(cep)}
              maxLength="9"
              type="text"
              placeholder="*CEP"
              onChange={e => setCep(e.target.value)}
            />
          </div>
          <div className="input_register_cad">
            <input
              value={email}
              type="email"
              placeholder="*E-mail"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="input_register_cad">
            <input
              value={password}
              type="password"
              placeholder="*Senha"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="input_register_cad">
            <input
              value={password_confirm}
              type="password"
              placeholder="*Confirmar senha"
              onChange={e => setPasswordConfirm(e.target.value)}
            />
          </div>

          <Button type={"Submit"} value={"Finalizar"}></Button>
        </form>
      </div>
    </div>
  );
}

export default User_register;
