import { v4 as uuid } from "uuid";
import './App.css';

function App() {
  const newId = uuid();
  const abbId = newId.slice(0, 8);

  
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
