import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CreateProfile from './components/CreateProfile';
import SignUp from './components/SignUp';
import CreateCompanyProfile from './components/CreateCompanyProfile';
// import CreateJobListing from './components/CreateJobListing';
import JobCard from './components/JobCard';
import LogIn from './components/LogIn';

function App() {

  const [listings, setNewListing] = useState([{position: 'Full Stack Developer', req_skills: 'HTML, CSS, JS', bonus_skills: 'Teamwork'}]);
  // const [companies, setNewCompany] = useState([]);
  // const [users, setNewUser] = useState([]);
  const [members, setMembers] = useState();
  console.log(members)

  return (
    <div className='App'>
      <Route path='/' component={LogIn} />
      <Route exact path='/' render={props => <SignUp {...props} members={members} setMembers={setMembers} />} />
      <Route path='/employeeprofile' component={CreateProfile} />
      <Route path='/companyprofile' component={CreateCompanyProfile} />

      {/* <Route path='/newjob' component={CreateJobListing} /> */}

      <Route render={(props) => (
        <JobCard path='job' {...props} listings={listings} setNewListing={setNewListing} />
      )} />

    </div>
  );
}

export default App;
