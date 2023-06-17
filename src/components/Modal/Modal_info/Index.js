import './Index.css';

import { useNavigate } from 'react-router-dom';

function Modal_info({ background, title, p, btn }) {

    const navigate = useNavigate();
    function redirect(){
        navigate("/feed", { replace: true });
    }

    return (

        <div className="modal">
            <div style={{ background }}>
                <h2>{title}</h2>
            </div>
            <div>
                <p>{p}</p>
            </div>
            <div>
                <button onClick={redirect}>{btn}</button>
            </div>
        </div>
    );
}

export default Modal_info;