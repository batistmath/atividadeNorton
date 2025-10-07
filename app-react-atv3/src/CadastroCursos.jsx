import React from 'react';

function FormularioCursos() {
  return (
    <form>
      <h2>Cadastro de Cursos</h2>

      <div>
        <label htmlFor="nomeEscola">Nome da Escola:</label>
        <input type="text" id="nomeEscola" />
      </div>

      <div>
        <label htmlFor="endereco">Endereço:</label>
        <input type="text" id="endereco" />
      </div>

      <div>
        <label htmlFor="telefone">Telefone de Contato:</label>
        <input type="tel" id="telefone" />
      </div>

      <div>
        <label htmlFor="nomeCurso">Nome do Curso:</label>
        <input type="text" id="nomeCurso" />
      </div>

      <div>
        <label htmlFor="descricaoCurso">Descrição do Curso:</label>
        <textarea id="descricaoCurso" rows="4"></textarea>
      </div>

      <button type="submit">Cadastrar Curso</button>
    </form>
  );
}

export default FormularioCursos;