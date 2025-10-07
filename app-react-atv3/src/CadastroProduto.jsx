import React from 'react';

function FormularioProduto() {
  return (
    <form>
      <h2>Cadastro de Produtos</h2>
      
      <div>
        <label htmlFor="nome">Nome do Produto:</label>
        <input type="text" id="nome" />
      </div>

      <div>
        <label htmlFor="preco">Preço do Produto:</label>
        <input type="number" id="preco" />
      </div>

      <div>
        <label htmlFor="validade">Data de Validade:</label>
        <input type="date" id="validade" />
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormularioProduto;