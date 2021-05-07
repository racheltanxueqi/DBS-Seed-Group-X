import logo from './logo.svg';
import './App.css';
import Login from './pages/login.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Login />
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
