import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Api from '../../config/Service/Api'

import Button from '../../components/Forms/Button/Index';
import Header from '../../components/Header/Main_header/Index';
import Second_header from '../../components/Header/Second_header/Index';

import Input_img from '../../components/Forms/Input_img/Index';
import { insertMaskCep } from '../../components/Mask/Mask_cep/Index';
import './Index.css'

function Create_donate() {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAdress] = useState('');
    const [category, setCategory] = useState('');
    const [imageProductKey, setImageProductKey] = useState('');
    const [streetName, setStreetName] = useState('');
    const [streetNumber, setStreetNumber] = useState('');
    const [uf, setUf] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [complement, setComplement] = useState('');
    const navigate = useNavigate();

    const accessToken = localStorage.getItem('accessToken');

    async function new_donate(e) {

        e.preventDefault();

        const data = {
            name,
            description,
            quantity,
            category,
            imageProductKey,
            addressDto:
            {
                streetName,
                streetNumber,
                uf,
                zipCode,
                complement
            }
        };

        try {
            await Api.post("/api/v1/product", data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })

            navigate("/feed", { replace: true });

        } catch (err) {
            alert('Prencha todos os campos corretamente!!!');
        }

    }
    return (
        <div>
            <Header />
            <Second_header title={"Inicie uma nova história"} />
            <div className='back-create-donate'>
                <form className='form-create-donate' onSubmit={new_donate}>
                    <h2>Dados da doação</h2>
                    <input
                        type="text"
                        value={name}
                        placeholder="*Titulo"
                        onChange={e => setName(e.target.value)}
                    />
                    <textarea
                        type="text"
                        cols="0"
                        rows="4"
                        value={description}
                        placeholder="*Descrição"
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        type="text"
                        value={quantity}
                        placeholder="*Quantidade"
                        onChange={e => setQuantity(e.target.value)}
                    />
                    <div className='admin-inputs'>
                        <Input_img legend={"Subir foto"}
                            value={imageProductKey}
                            onChange={e => setImageProductKey(e.target.value)}
                        />
                        <div className='small-input'>
                            <input
                                type="text"
                                maxLength="9"
                                value={insertMaskCep(zipCode)}
                                placeholder="*CEP"
                                onChange={e => setZipCode(e.target.value)}
                            />

                            <input
                                type="text"
                                value={address}
                                placeholder="*Endereço"
                                onChange={e => setAdress(e.target.value)}
                            />

                            <input
                                type="text"
                                value={complement}
                                placeholder="*Complemento"
                                onChange={e => setComplement(e.target.value)}
                            />

                            <input
                                type="text"
                                value={category}
                                placeholder="*Categoria"
                                onChange={e => setCategory(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button type={"submit"} value={"Publicar"} />
                </form>
            </div>
        </div>
    );
}


export default Create_donate;