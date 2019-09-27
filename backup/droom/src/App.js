import React, { useState } from 'react';
import './css/index.css';
import { Route } from 'react-router-dom';

import CreateProfile from './components/CreateProfile';
import SignUp from './components/SignUp';
import CreateCompanyProfile from './components/CreateCompanyProfile';

import CreateJobListing from './components/CreateJobListing';


import JobCard from './components/JobCard';
import LogIn from './components/LogIn';

function App() {

  const [listings, setNewListing] = useState([{position: 'Full Stack Developer', req_skills: 'HTML, CSS, JS', bonus_skills: 'Teamwork'}]);
  const [companies, setNewCompany] = useState([]);
  // const [users, setNewUser] = useState([]);
  const [members, setMembers] = useState();
  

  return (
    <div className='App'>
      <Route exact path='/' render={props => <SignUp {...props} members={members} setMembers={setMembers} />} />
      <Route path='/employeeprofile' component={CreateProfile} />
      <Route path='/companyprofile' render={props => <CreateCompanyProfile {...props} setNewCompany={setNewCompany} /> } />
      <Route path='/login' render={props => <LogIn {...props}  />} />
      <Route path='/newjob' render={props => <CreateJobListing {...props} companies={companies} /> } />

      <Route path={'/joblistings'} render={(props) => (
        <JobCard {...props} listings={listings} setNewListing={setNewListing} />
      )} />

    </div>
  );
}

export default App;
