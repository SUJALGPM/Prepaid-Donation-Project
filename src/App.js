import React from 'react';
import './App.css';
import {Service} from './container';
import About from './container/About/About';
import Home from './container/Home/Home';
import Donate from './container/Donate/Donate';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './container/Login/Login';
import Signup from './container/Signup/Signup';
import Profile from './container/Profile/Profile';

const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/services' Component={Service}/>
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={Signup} />
        <Route path='/donate' Component={Donate} />
        <Route path='/profile' Component={Profile} />
      </Routes>
    </Router>
  </div>
);

export default App;
