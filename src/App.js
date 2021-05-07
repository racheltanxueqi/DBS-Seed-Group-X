import logo from './logo.svg';
import './App.css';
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
          <Route path='/' exact component={() => <Home userList={userDetails}/>}/>
          <Route path='/login' exact component={() => <Login setUserdetails={setUserdetails}/>}/>
        </main>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
