import logo from './logo.svg';
import './App.css';
import { TextComponent } from './componets/TextComponent';
import { AjaxComponent } from './componets/AjaxComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TextComponent />

        <AjaxComponent />
      </header>
    </div>
  );
}

export default App;
