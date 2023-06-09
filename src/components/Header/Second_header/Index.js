import './Index.css';

function Second_header({title, sub_title}){

    return(
        <div className='second_header'>
            <h1 className='second_header_title'>{title}</h1>
            <h2 className='second_header_sub_title'>{sub_title}</h2>
        </div>
    );

}

export default Second_header;