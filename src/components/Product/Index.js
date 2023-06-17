import './Index.css';

function Product(props) {

    return (
           <div className="prod">
                <div className='product-header'>
                    <h2>{props.product.name}</h2>
                </div>
                <div>
                    <img src={props.product.imageProductKey} />
                </div>
                <div>
                    <div className='product-footer'>
                        <h3>Doado por {props.product.user.name}</h3>
                    </div>
                </div>
            </div>
    );
}

export default Product;