import './Index.css';

function Modal({ background, title, p, btn1, btn2, onClick }) {

    //STYLE STATE BTN
    const btn1Style = {
        backgroundColor: '#048CD9',
        color: 'white',
        border: 'none',
        margin: '1%',
        fontWeight: '600',
        padding: '2%',
        borderRadius: '5px',
        fontSize: '1.2vw',
        display: 'block'
    };

    const btn2Style = {
        backgroundColor: '#048CD9',
        color: 'white',
        border: 'none',
        margin: '1%',
        fontWeight: '600',
        padding: '2%',
        borderRadius: '5px',
        fontSize: '1.2vw',
        display: 'block'
    };

    if (btn1 == undefined) {
        btn1Style.display = 'none';
    } else if (btn2 == undefined) {
        btn2Style.display = 'none';
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
                <button onClick={onClick} style={btn1Style}>{btn1}</button>
                <button onClick={onClick} style={btn2Style}>{btn2}</button>
            </div>
        </div>
    );
}

export default Modal;