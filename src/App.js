import logo from './logo.svg';
import './App.css';
import { TextComponent } from './componets/TextComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TextComponent />
      </header>
    </div>
  );
}

export default App;
