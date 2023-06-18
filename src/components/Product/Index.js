import './Index.css';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Forms/Button/Index';
import Api from "../../config/Service/Api"


function Product(props) {

    const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken');

    async function editProduct(id) {
        try {
            navigate(`/myDonate/${id}`, { replace: true });
        } catch (error) {
            alert('Edit failed! Try again.');
        }
    }

    async function deleteProduct(id) {
        try {
            await Api.delete(`/api/v1/product/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })

            window.location.reload()

        } catch (err) {
            alert('Delete failed! Try again.');
        }
    }

    return (
        <div className="prod">
            <div className='product-header'>
                <h2>{props.product.name}</h2>
            </div>
            {/* <div>
                    <img src={props.product.imageProductKey} />
                </div> */}
            <div>
                <div className='product-footer'>
                    <h3>Doado por {props.product.user.name}</h3>
                    <div>
                        {props.isEdit === true ?
                            <Button
                                type={"button"}
                                value={"Editar"}
                                onClick={() => editProduct(props.product.productId)}
                                background={"#048CD9"}
                            />
                            : null
                        }

                        {props.isEdit === true ?
                            <Button
                                type={"button"}
                                value={"Excluir"}
                                onClick={() => deleteProduct(props.product.productId)}
                                background={"#D90404"}
                            />
                            : null
                        }
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Product;