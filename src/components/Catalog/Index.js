import Product from '../Product/Index';
import './Index.css';

function Catalog(props) {

    var listProduct = [];

    for (let x = 0; x < props.products.length; x++) {
        listProduct.push(<Product product={props.products[x]}/>)
    }

    return (
        <div className="feed-donate">
            { listProduct }
        </div>
    );
}

export default Catalog;