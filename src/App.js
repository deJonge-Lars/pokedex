import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import NavBar from"./components/layout/NavBar";
import Dasboard from './components/layout/Dasboard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Dasboard />
      </div>
    </div>
  );
}

export default App;
