import { FiSearch } from 'react-icons/fi'
function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de cep</h1>

    <div className="containerInput">
      <input
      type="text"
      placeholder="Digite seu cep..."
      />
    </div>

    <button className="buttonSearch">
      <FiSearch size={25} color="#fff"/>
    </button>
    </div>
  );
}

export default App;
