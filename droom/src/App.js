import React from 'react';
import './App.css';
import CreateProfile from './components/CreateProfile';
import SignUp from './components/SignUp';
import CreateCompanyProfile from './components/CreateCompanyProfile';

function App() {
  return (
    <div className='App'>
      <SignUp />
      <CreateProfile />
      <CreateCompanyProfile />
    </div>
  );
}

export default App;
