import React, { useState } from 'react';
import './Index.css';

function Product() {

    const [donates, setDonates] = useState([]);

    return (
        /*{donates.map(donate =>
            <div className="prod">
                <img src={ donate.photo } />
            </div>
            <p> {donate.title} </p>
        )};*/
        <>
            <h1>Product</h1>
        </>
    );
}

export default Product;