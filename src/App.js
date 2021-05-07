import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    // --------- To be removed ---------
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    // ---------

    // ===== start react routing here =========
    // <Router>
    // <Navbar/>
    // <Switch>
    //   <Route path='/' exact component={} />
    // </Switch>
    // </Router>
    // ====================
  );
}

export default App;
