import React from 'react';
import './App.css';
import CreateProfile from './components/CreateProfile';
import SignUp from './components/SignUp';
import CreateCompanyProfile from './components/CreateCompanyProfile';
import CreateJobListing from './components/CreateJobListing';

function App() {
  return (
    <div className='App'>
      <SignUp />
      <CreateProfile />
      <CreateCompanyProfile />
      <CreateJobListing />
    </div>
  );
}

export default App;
