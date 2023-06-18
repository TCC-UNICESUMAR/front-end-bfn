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
import ReactModal from 'react-modal';
import Modal_info from '../../components/Modal/Modal_info/Index';
ReactModal.setAppElement('#root');


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
  const [isOpen, setIsOpen] = useState(false);

  const data = {
    name,
    cnpjOrCpf,
    phone,
    email,
    password
  };

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  const customModal = {
    content: {
        backgroundColor: 'transparent',
        padding: 0,
        width: '30%',
        height: '15vw',
        margin: 'auto',
        display: 'flex',
        borderRadius: '10px',
        border: 'none'
    }
}

  async function new_user(e) {

    e.preventDefault();

    data.name = name
    data.cnpjOrCpf = cnpjOrCpf
    data.email = email
    data.password = password
    data.phone = phone

    console.log(data)

    try {
      await Api.post("/api/v1/user/register", data)
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
          <Button
            type={"submit"}
            value={"Finalizar"}
            onClick={handleOpenModal}
          />
          <ReactModal
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            style={customModal}
          >
            <Modal_info
              data={data}
              background={"#04D939"}
              title={"SUCESSO"}
              p={"Cadastro realizo com sucesso"}
              btn={"OK"}
              redirectTo={"/login"}
            />
          </ReactModal>
        </form>
      </div>
    </div>
  );
}

export default User_register;
