import { FiSearch } from 'react-icons/fi'
import './styles.css'

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de cep</h1>

    <div className="containerInput">
      <input
      type="text"
      placeholder="Digite seu cep..."
      />

    <button className="buttonSearch">
      <FiSearch size={25} color="#fff"/>
    </button>
    
    </div>

    <main>
      <h2>CEP: 40028922</h2>

      <span>Rua: Alguma rua</span>
      <span>Complemento: Algum Complemento</span>
      <span>Complemento: Algum Complemento</span>
      <span>Teste</span>
      <span>Algo aqui também</span>

    </main>
    </div>
  );
}

export default App;
