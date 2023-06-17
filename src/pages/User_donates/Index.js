import Catalog from "../../components/Catalog/Index";
import Header from "../../components/Header/Main_header/Index";
import Second_header from "../../components/Header/Second_header/Index";

import Api from '../../config/Service/Api';

import { useState, useEffect } from 'react'

function User_donates() {
    const [products, setProducts] = useState([]);
    const [id, setId] = useState('');

    const accessToken = localStorage.getItem('accessToken');

    async function getUser() {
        try {
            const response = await Api.get(`/api/v1/user/getUserBySession`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            setId(response.data.id);
        } catch (error) {
            alert('Error Get User By Session! Try again!');
        }
    }

    async function fetchMoreProducts() {
        const response = await Api.get(`/api/v1/product/byUser/1`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }

        });
        setProducts(response.data.data.content)
    }

    useEffect(() => {
        fetchMoreProducts();
    }, [])
    
    return(
        <div>
            <Header />
            <Second_header title={"Suas doações publicadas"}/>
            <Catalog products={products}/>
        </div>
    );
}

export default User_donates;