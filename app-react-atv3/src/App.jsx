

import CadastroProduto from './CadastroProduto';
import CadastroPessoa from './CadastroPessoa';
import CadastroNotas from './CadastroNotas';
import CadastroCursos from './CadastroCursos';
import CadastroAlunos from './CadastroAlunos';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Formulários React</h1>
      <CadastroProduto/>
      <br></br>
      <CadastroPessoa/>
      <br></br>
      <CadastroNotas/>
      <br></br>
      <CadastroCursos/>
      <br></br>
      <CadastroAlunos/>

    </div>
  );
}

export default App;