import Header from '../../components/Header/Main_header/Index';
import Button from '../../components/Forms/Button/Index';
import './Index.css';
import Product from '../../components/Product/Index';
import Catalog from '../../components/Catalog/Index';
import { useNavigate, useParams } from 'react-router-dom';
import Api from '../../config/Service/Api';
import { useState, useEffect } from 'react';
import Select from '../../components/Forms/Select/Index';

function Feed() {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const accessToken = localStorage.getItem('accessToken');
    const navigate = useNavigate();

    async function editProduct(id) {
        try {
            navigate(`/editProduct/${id}`)
        } catch (error) {
            alert('Edit failed! Try again.');
        }
    }

    async function deleteProduct(id) {
        var check = window.confirm("Deseja excluir o item selecionado?");

        if (check === false) return

        try {
            await Api.delete(`/api/v1/product/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })

            setProducts(products.filter(product => product.id !== id))
        } catch (err) {
            alert('Delete failed! Try again.');
        }
    }

    async function fetchMoreProducts() {
        const response = await Api.get('/api/v1/product', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }

        });
        setProducts(response.data.data.content)
    }

    useEffect(() => {
        fetchMoreProducts();
    }, [])

    
    async function loadCategories() {
        try {
            const response = await Api.get(`api/v1/product/findAllCategories`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            console.log(response.data.data)
            setCategories(response.data.data);

        } catch (error) {
            alert('Error recovering category name! Try again!');
            navigate("./home", { replace: true });
        }
    }

    useEffect(() => {
        loadCategories();
    }, [])

    return (
        <div>
            <Header />
            <header>
                <div className='create-donate'>
                    <button className='button-feed'>Fazer doação</button>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Categorias</button>
                    <div className="dropdown-content">
                        <Select categories={categories}
                        />
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn">Região</button>
                    <div className="dropdown-content">
                        <a href="#">Exemplo</a>
                    </div>
                </div>

                <div id="divBusca">
                    <input type="text" id="txtBusca" placeholder="Buscar por doações" />
                </div>
            </header>

            <Catalog products={products} />

        </div>
    );
}

export default Feed;