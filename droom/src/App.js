import React from 'react';
import './App.css';
import CreateProfile from './components/CreateProfile';
import SignUp from './components/SignUp';
import CreateCompanyProfile from './components/CreateCompanyProfile';
import CreateJobListing from './components/CreateJobListing';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/signup' component={SignUp} />
      <Route path='/employeeprofile' component={CreateProfile} />
      <Route path='/companyprofile' component={CreateCompanyProfile} />
      <Route path='/newjob' component={CreateJobListing} />
    </div>
  );
}

export default App;
