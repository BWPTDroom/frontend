import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


import SignUp from './components/SignUp';

function HomePage () {
    return (
        <div className='nav'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/companyprofile'>Company Profile</NavLink>
            <NavLink to='/employeeprofile'>Employee Profile</NavLink>
            <NavLink to='/newjob'>Post New Job</NavLink>

            <SignUp />
        </div>
    )
}

export default HomePage;