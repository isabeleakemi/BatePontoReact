import './App.css';
import Login from './components/Login/login';
import Menu from './components/Menu/menu';
import CadastroFuncionario from './components/CadastroFuncionario/cadastroFuncionario';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <CadastroFuncionario/>
    </Router>
  );
}

export default App;
