import React from 'react';

function FormularioAlunos() {
  return (
    <form>
      <h2>Cadastro de Alunos</h2>

      <div>
        <label htmlFor="nomeAluno">Nome do Aluno:</label>
        <input type="text" id="nomeAluno" />
      </div>

      <div>
        <label htmlFor="matricula">Matrícula:</label>
        <input type="text" id="matricula" />
      </div>

      <div>
        <label htmlFor="telefone">Telefone de Contato:</label>
        <input type="tel" id="telefone" />
      </div>

      <div>
        <label htmlFor="curso">Curso:</label>
        <select id="curso">
          <option value="">Selecione um curso</option>
          <option value="ads">Análise e Desenvolvimento de Sistemas</option>
          <option value="engcomp">Engenharia de Computação</option>
          <option value="ciencia">Ciência da Computação</option>
          <option value="redes">Redes de Computadores</option>
        </select>
      </div>

      <div>
        <label>Notas:</label>
        <input type="number" id="nota1" placeholder="Nota 1" />
        <input type="number" id="nota2" placeholder="Nota 2" />
        <input type="number" id="nota3" placeholder="Nota 3" />
      </div>

      <button type="submit">Cadastrar Aluno</button>
    </form>
  );
}

export default FormularioAlunos;