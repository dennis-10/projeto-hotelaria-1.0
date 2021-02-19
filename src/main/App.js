import logo from '../logo.svg';
import '../styles/App.css';

import Menu from '../components/Menu.jsx'
import Header from '../components/Header.jsx'
import Routes from './routes.jsx'

function App() {
  return (
    <div className="App">
      <Menu/>
      <div className="App-div">
        <Header/>
        <div className="App-conteudo">
          <Routes/>
        </div>
      </div>
    </div>
  );
}

export default App;
