import './App.css';
import {Header} from "./components/Header"
import Cryptotable from "./components/cryptoTable/cryptoTable.js"

function App() {
  return (
    <div class="app">
      <Header/>
      <Cryptotable/>
    </div>
  );
}

export default App;
