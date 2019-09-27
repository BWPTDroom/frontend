import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaRegHeart, FaRegTimesCircle } from "react-icons/fa";
import { Spinner } from 'reactstrap';


function JobCard(props) {
    const [listings, setListings] = useState([])
    console.log(listings)
    useEffect(() => {
        axios
            .get('https://droomapi.herokuapp.com/api/sample/postings')
            .then((res) => {
                // console.log(res)
                setListings(res.data)
            })
            .catch((err) => {
                console.log(`Error: ${err}`)
            })
    }, [])

    useEffect (() => {
        const timer = setTimeout(() => {
            if(props.loading === true) {
                return <Spinner color='dark' />
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        listings.map((job, index) => (
            <div className='jobCard' key={index}>
                <p>{job.company_name}</p>
                <p>Position: {job.position}</p>
                <p>Required Skills: {job.req_skills}</p>
                <p>Bonus Skills: {job.bonus_skills}</p>

<<<<<<< HEAD
                    <button className='dislike'>
                        <FaRegTimesCircle />
=======
                <div className='reaction'>
                    <button className='like'>
                        <FaRegHeart onClick={(e) => e.target.style.color = 'green'} />
                    </button>
                    <button className='dislike'  >
                        <FaRegTimesCircle onClick={(e) => e.target.style.color = 'red'} />
>>>>>>> 5b8b61b58a5e74a3f8346b2ccf453c9dabd2465f
                    </button>
                    <button className='like'>
                        <FaRegHeart />
                    </button>

            </div>
    )))
};

export default JobCard;