import Catalog from "../../components/Catalog/Index";
import Header from "../../components/Header/Main_header/Index";
import Second_header from "../../components/Header/Second_header/Index";

import Api from '../../config/Service/Api';

import { useState, useEffect } from 'react'

function User_donates() {
    const [products, setProducts] = useState([]);
    const accessToken = localStorage.getItem('accessToken');



    async function fetchMoreProducts() {
        try {
            const responseUser = await Api.get(`/api/v1/user/getUserBySession`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            const id = responseUser.data.data.id;

            const response = await Api.get(`/api/v1/product/byUser/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
    
            });
            
            setProducts(response.data.data.content)
            
        } catch (error) {
            alert('Error Get Products By User! Try again!');
        }
    }

    useEffect(() => {
        fetchMoreProducts();
    }, [])
    
    return(
        <div>
            <Header />
            <Second_header title={"Suas doações publicadas"}/>
            <Catalog products={products} isEdit={true}/>
        </div>
    );
}

export default User_donates;