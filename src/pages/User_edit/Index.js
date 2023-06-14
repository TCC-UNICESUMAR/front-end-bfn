import { useState } from "react";

import Header from "../../components/Header/Main_header/Index";

import "./Index.css"
import photo_user from "../../assets/image/foto-user.png"
import Button from "../../components/Forms/Button/Index";
import { insertMaskCep } from "../../components/Mask/Mask_cep/Index";
import { insertMaskPhone } from "../../components/Mask/Mask_phone/Index";

function User_edit() {
    const [name, setName] = useState('');
    const [cpf_cnpj, setCpfCnpj] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [telephone, setTelephone] = useState('');
    const [password, setPassword] = useState('');
    const nomeUser = localStorage.getItem('nome');
    const accessToken = localStorage.getItem('accessToken');

    async function updateUser(e){
        e.preventDefault();

        const data = {
            name,
            cpf_cnpj,
            cep,
            telephone,
            email,
            password
        }
    
        // try {
        //     await api.post("auth/singup", data ,{
        //         headers: {
        //             Authorization: `Bearer ${accessToken}`
        //         }
        //     });

        //     history.push('/')
        // } catch (err) {
        //     alert('Preencha todos os campos e tente novamente!!!');
        // }
    };


    return(
        <div className="main-edit-user">
            <Header />
            <div className="header-photo">
                <img src={photo_user} />
                <h3>Hello ...</h3>
            </div>
            <form onSubmit={updateUser}>
                <h2 className="title-edit-user">Seus dados</h2>
                <div className="back-edit-user">
                    <div>
                        <h3>Dados pessoais</h3>
                        <input
                            type="text"
                            value={name}
                            placeholder="*Name"
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            value={cpf_cnpj}
                            placeholder="*CPF/CNPJ"
                            onChange={e => setCpfCnpj(e.target.value)}
                        />
                        <input
                            type="text"
                            value={insertMaskCep(cep)}
                            placeholder="*CEP"
                            maxLength="9"
                            onChange={e => setCep(e.target.value)}
                        />
                        <input
                            type="text"
                            maxLength="15"
                            value={insertMaskPhone(telephone)}
                            placeholder="*Telefone"
                            onChange={e => setTelephone(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3>Dados do sistema</h3>
                        <input
                            type="text"
                            value={email}
                            placeholder="*E-mail"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            value={password}
                            placeholder="*Senha"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <Button type={"submit"} value={"Salvar alterações"} />
            </form>
        </div>
    );
}

export default User_edit;