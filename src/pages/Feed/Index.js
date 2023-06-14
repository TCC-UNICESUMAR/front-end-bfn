import Header from '../../components/Header/Main_header/Index';
import Button from '../../components/Forms/Button/Index';
import './Index.css';
import Product from '../../components/Product/Index';
import Catalog from '../../components/Catalog/Index';

function Feed() {
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
                        <a href="#">Exemplo 1</a>
                        <a href="#">Exemplo 2</a>
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

            
        </div>
    );
}

export default Feed;