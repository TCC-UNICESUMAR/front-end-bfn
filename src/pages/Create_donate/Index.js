import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ReactModal from 'react-modal';
import { useEffect } from 'react';

import Api from '../../config/Service/Api'

import Button from '../../components/Forms/Button/Index';
import Header from '../../components/Header/Main_header/Index';
import Second_header from '../../components/Header/Second_header/Index';

import Input_img from '../../components/Forms/Input_img/Index';
import { insertMaskCep } from '../../components/Mask/Mask_cep/Index';
import './Index.css'
import Select from '../../components/Forms/Select/Index';
import Modal_info from '../../components/Modal/Modal_info/Index';


ReactModal.setAppElement('#root');

function Create_donate() {

    //MODAL
    const [isOpen, setIsOpen] = useState(false);

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

    //CREATE DONATE
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [imageProductKey, setImageProductKey] = useState('');
    const [streetName, setStreetName] = useState('');
    const [city, setCity] = useState('');
    const [streetNumber, setStreetNumber] = useState('');
    const [uf, setUf] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [complement, setComplement] = useState('');
    const navigate = useNavigate();
    const { setFocus } = useForm();
    const accessToken = localStorage.getItem('accessToken');

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
            complement,
            city
        }
    };

    async function loadCategories() {
        try {
            const response = await Api.get(`api/v1/product/findAllCategories`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            setCategories(response.data.data);

        } catch (error) {
            alert('Error recovering category name! Try again!');
        }
    }

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            console.log(data);
            setUf(data.uf)
            setStreetName(data.logradouro)
            setCity(data.localidade)
        });
    }

    async function newDonate(e) {

        e.preventDefault();

        data.name = name;
        data.description = description;
        data.quantity = quantity;
        data.category = category;
        data.imageProductKey = imageProductKey
        data.addressDto.streetName = streetName;
        data.addressDto.streetNumber = complement;
        data.addressDto.uf = uf;
        data.addressDto.zipCode = zipCode;
        data.addressDto.city = city;

        try {
            await Api.post("/api/v1/product", data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })

        } catch (err) {
            alert('Prencha todos os campos corretamente!!!');
        }
        
    }

    useEffect(() => {
        loadCategories();
    }, [])

    return (
        <div>
            <Header />
            <Second_header title={"Inicie uma nova história"} />
            <div className='back-create-donate'>
                <form className='form-create-donate' onSubmit={newDonate}>
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
                    <select className='select-form' name="idCategory" id="idCategory" value={category}
                        onChange={e => setCategory(e.target.value)}>
                        <option className='option-form' value="0">Selecione uma categoria</option>
                        {categories.map(category => (<option key={category.categoryId}> {category.categoryName} </option>))}
                    </select>
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
                                onBlur={checkCEP}
                            />

                            <input
                                type="text"
                                value={streetName}
                                placeholder="*Endereço"
                                readonly
                            />
                            <input
                                type="text"
                                value={city}
                                placeholder="*Cidade"
                                readonly
                            />
                            <input
                                type="text"
                                value={uf}
                                placeholder="*UF"
                                readonly
                            />
                            <input
                                type="text"
                                value={complement}
                                placeholder="*Complemento"
                                onChange={e => setComplement(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button
                        type={"submit"}
                        value={"Publicar"}
                        onClick={handleOpenModal}
                        background={"#04D939"}
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
                            p={"Doacao salva com sucesso"}
                            btn={"OK"}
                            redirectTo={"/feed"}
                        />
                    </ReactModal>
                </form>
            </div>
        </div>
    );
}


export default Create_donate;