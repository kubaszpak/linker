import plusLogo from './static/plus.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Start now!
      </header>
      <button className="plusButton">
        <img src={plusLogo} alt="plus" style={{
          height: '100%',
          width: '100%'
        }} />
      </button>
    </div>
  );
}

export default App;
