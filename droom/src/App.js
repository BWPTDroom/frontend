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


  const [companies, setNewCompany] = useState([]);
  const [prospects, setProspects] = useState([]);
  const [members, setMembers] = useState();
  

  return (
    <div className='App'>
      <Route exact path='/' render={props => <SignUp {...props} members={members} setMembers={setMembers} />} />
      <Route path='/employeeprofile' render={props => <CreateProfile {...props} setProspects={setProspects} prospects={prospects} /> } />
      <Route path='/companyprofile' render={props => <CreateCompanyProfile {...props} setNewCompany={setNewCompany} /> } />
      <Route path='/login' render={props => <LogIn {...props}  />} />
      <Route path='/newjob' render={props => <CreateJobListing {...props} companies={companies} /> } />

      <Route path={'/joblistings'} render={(props) => (
        <JobCard {...props} />
      )} />

    </div>
  );
}

export default App;