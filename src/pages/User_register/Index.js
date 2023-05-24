import Button from '../../components/forms/Button/Index';
import Input from '../../components/forms/Input/Index';
import Header from '../../components/header/Index';
import './Index.css';

function User_register() {
  return (
    <div>
      <Header />
      <h1>CADASTRO</h1>
      <h3>Inicie uma nova história</h3>
      <form>
        <Input 
          name="name"
          placeholder="Nome"
        />
        <Input 
          name="cpf_cnpj"
          placeholder="CPF/CPNJ"
        />
        <Input 
          name="address"
          placeholder="Endereço"
        />
        <Input 
          name="telephone"
          placeholder="Telefone"
        />
        <Input 
          name="date_of_birth"
          placeholder="Data de nascimento"
          type="date"
        />
        <Input 
          name="email"
          placeholder="E-mail"
          type="e-mail"
        />
        <Input 
          name="password"
          placeholder="Senha"
          type="password"
        />
        <Button 
          value="Cadastrar"
        />
      </form>
    </div>
  );
}

export default User_register;
