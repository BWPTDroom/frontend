import React from 'react';
import './css/index.css';
import CreateProfile from './components/CreateProfile';
import SignUp from './components/SignUp';
import CreateCompanyProfile from './components/CreateCompanyProfile';
import CreateJobListing from './components/CreateJobListing';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Route path='/' component={Nav} />
      <Route exact path='/' component={SignUp} />
      <Route path='/employeeprofile' component={CreateProfile} />
      <Route path='/companyprofile' component={CreateCompanyProfile} />
      <Route path='/newjob' component={CreateJobListing} />
    </div>
  );
}

export default App;
