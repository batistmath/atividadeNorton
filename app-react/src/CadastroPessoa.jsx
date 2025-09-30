import React from 'react';

function FormularioPessoa() {
  return (
    <form>
      <h2>Cadastro de Pessoa</h2>

      <div>
        <label htmlFor="nome">Nome Completo:</label>
        <input type="text" id="nome" />
      </div>

      <div>
        <label htmlFor="nascimento">Data de Nascimento:</label>
        <input type="date" id="nascimento" />
      </div>

      <div>
        <label htmlFor="telefone">Telefone:</label>
        <input type="tel" id="telefone" />
      </div>

      <div>
        <label htmlFor="endereco">Endereço:</label>
        <input type="text" id="endereco" />
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormularioPessoa;