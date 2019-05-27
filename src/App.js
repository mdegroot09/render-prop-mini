import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/LoginForm'
import RegistrationForm from './Components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <RegistrationForm/>
      <LoginForm/>
    </div>
  );
}

export default App;
