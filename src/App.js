import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import NavBar from"./components/layout/NavBar";
import Dasboard from './components/layout/Dasboard';
import Pokemon from './components/pokemon/Pokemon';

import backgroundImage from './pattern.png';

function App() {
  return (
    <Router>
    <div className="App" style={{background: `url(${backgroundImage})`}}> 
      <NavBar />
      <div className="container mt-3">
        <Switch>
          <Route exact path="/" component={Dasboard} />
          <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
          
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
