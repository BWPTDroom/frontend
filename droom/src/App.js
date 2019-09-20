import React from 'react';
import './App.css';
import CreateProfile from './components/CreateProfile';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className='App'>
      <CreateProfile />
      <SignUp />
    </div>
  );
}

export default App;
