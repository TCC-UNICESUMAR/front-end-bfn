import './Index.css';

function Product(props) {

    return ( 
           <div className="prod">
                <p>{props.product.name} </p>
                <p>{props.product.description}</p>
            </div>
    );
}

export default Product;