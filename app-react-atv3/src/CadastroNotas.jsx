import React from 'react';

function FormularioNotas() {
  return (
    <form>
      <h2>Cadastro de Notas do Aluno</h2>

      <div>
        <label htmlFor="nomeAluno">Nome do Aluno:</label>
        <input type="text" id="nomeAluno" />
      </div>

      <div>
        <label htmlFor="nota1">Nota 1:</label>
        <input type="number" id="nota1" />
      </div>

      <div>
        <label htmlFor="nota2">Nota 2:</label>
        <input type="number" id="nota2" />
      </div>

      <div>
        <label htmlFor="nota3">Nota 3:</label>
        <input type="number" id="nota3" />
      </div>

      <button type="submit">Cadastrar Notas</button>
    </form>
  );
}

export default FormularioNotas;