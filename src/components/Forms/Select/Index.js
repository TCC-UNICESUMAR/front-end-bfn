import './Index.css'


function Select(props) {

    var categories = []
    for (let x = 0; x < props.categories.length; x++) {
        categories.push(props.categories[x])
    }


    return (
        <select className='select-form' name="idCategory" id="idCategory">
        <option className='option-form' value="0">Selecione uma categoria</option>  
        {categories.map(category => (<option key={category.categoryId}> {category.categoryName} </option>))}
        </select>
    );
}

export default Select;

//<select class='select-form' name="idCategory" id="idCategory" value={category}>
  //       <option className='option-form' value="0">*Selecione uma categoria</option>
    //     {categories.map(category => (<option key={category.categoryId}> {category.categoryName} </option>))}
    // </select>