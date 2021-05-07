import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/dashboard'
import Login from './pages/login.js'
import Home from './pages/home.js'
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  const [userDetails, setUserdetails] = useState('');
  const [accountKey, setAccountkey] = useState('');
  return (
    <div>
      <BrowserRouter>
        <main className='form-signin'>
          <Route path='/login' exact component={() => <Login setUserdetails={setUserdetails}/>}/>
          <Route path='/dashboard' exact component={() => <Dashboard userList={userDetails}/>}/>
        </main>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
