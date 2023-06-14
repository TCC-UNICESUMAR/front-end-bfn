import './Index.css';

function Input_img({legend}) {

    function escolherArquivo(){
        var file = document.getElementById("file-img");
        file.click();
        return file.value;
    }

    return (
        <div className='input-img-create-donate'>
            <label onClick={escolherArquivo}></label>
            <input
                className='input-img'
                id='file-img'
                type="file"
                accept="image/*"
            />
            <h3>{legend}</h3>
        </div>
    );
}

export default Input_img;