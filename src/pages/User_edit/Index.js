import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header/Main_header/Index";
import { useEffect } from 'react';
import "./Index.css"
import photo_user from "../../assets/image/foto-user.png"
import Button from "../../components/Forms/Button/Index";
import { insertMaskCep } from "../../components/Mask/Mask_cep/Index";
import { insertMaskPhone } from "../../components/Mask/Mask_phone/Index";
import Api from "../../config/Service/Api";

function User_edit() {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [cnpjOrCpf, setCnpjOrCpf] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [imgUrl, setIgmUrl] = useState('');
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken');


    async function getUser() {
        try {
            const response = await Api.get(`/api/v1/user/getUserBySession`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })

        
            console.log(response.data.data);
            setName(response.data.data.name)
            setCnpjOrCpf(response.data.data.cpfOrCnpj)
            setEmail(response.data.data.email)
            setPhone(response.data.data.phone)
            const idUser = response.data.data.id;
            setId(idUser);

            const responseImg = await Api.get(`/api/v1/s3/getObjectUserProfile/${idUser}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
    
            setIgmUrl(responseImg.data);
            
        } catch (error) {
            alert('Error Get User By Session! Try again!');
        }
    }

    async function updateUser(e) {
        e.preventDefault();

        const data = {
            name,
            cnpjOrCpf,
            cep,
            phone,
            email,
            password
        }

        try {
            const response = await Api.put(`/api/v1/user/editProfile/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });


        } catch (err) {
            alert('Error Edit User! Try again!');
            
        }
    };

    useEffect(() => {
        getUser();
    }, [])

    return (
        <div className="main-edit-user">
            <Header />
            <div className="header-photo">
                <div className="back-photo">
                    <img src={imgUrl} />
                </div>
                <h3>Olá {name}</h3>
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
                            value={cnpjOrCpf}
                            placeholder="*CPF/CNPJ"
                            onChange={e => setCnpjOrCpf(e.target.value)}
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
                            value={insertMaskPhone(phone)}
                            placeholder="*Telefone"
                            onChange={e => setPhone(e.target.value)}
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
                <Button type={"submit"} value={"Salvar alterações"} background={"#04D939"}/>
            </form>
        </div>
    );
}

export default User_edit;