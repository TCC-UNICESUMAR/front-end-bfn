import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

import Header from '../../components/Header/Main_header/Index';
import './Index.css';
import Second_header from "../../components/Header/Second_header/Index";
import Button from "../../components/Forms/Button/Index";

//Validação de campos
const schema = Yup.object().shape({
      name: Yup.string().required('Campo obirgatório'),
      cpf_cnpj: Yup.string().required('Campo obrigatório'),
     /* cep: Yup.string().required(),
      telephone: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().min(7, 'A senha precisa ter no mínimo 7 caractreres')
      .required('Campo obrigatório'),
      password_confirm: Yup.string()
      .oneOf([Yup.ref('password'), null],
      'As senhas precisam ser iguais')
      .required('Campo obrigatório') */
});

function User_register() {

  const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm({
      mode: 'onSubmit',
      resovler: yupResolver(schema),
      /*defaultValues: {
        name: '',
        cpf_cnpj: '',
        cep: '',
        telephone : '',
        email: '',
        password: '',
        password_confirm: ''
      }*/
  });

  console.log('erros:', errors);  
  
  const handleSubmitData = async (data) => {
    console.log('submit', data);
  }

  return (
    <div>
      <Header />
      <Second_header  
        title={"CADASTRO"} 
        sub_title={"INICIE UMA NOVA HISTÓRIA"} 
      />
      <form className="User_register_cad" onSubmit={handleSubmit(handleSubmitData)}>
        <div className="input_register_cad">
            <input
              {...register('name')}
              name='name'
              type="text"
              placeholder="*Nome"
            />
            <p>{errors.name?.message}</p>
        </div>
        <div className="input_register_cad">
            <input 
              {...register('cpf_cnpj')}
              name='cpf_cnpj'
              type="text"
              placeholder="*CPF/CNPJ"
            />
            <p>{errors.cpf_cnpj?.message}</p>
        </div>
        
        <Button value={"Finalizar"}></Button>
      </form>
    </div>
  );
}

export default User_register;
