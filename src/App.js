import logo from './logo.svg';
import './App.css';
import Board from './components/board';

function App() {
  return (
    <div className="App">
      <h2 style={{justifyContent: "center"}}>KANBAN</h2>
      <Board/>
    </div>
  );
}

export default App;
