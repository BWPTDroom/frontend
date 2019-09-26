import React, { useEffect } from 'react';
import axios from 'axios';

function JobCard(props) {
    useEffect(() => {
        axios
            .get('https://droomapi.herokuapp.com/api/sample/postings')
            .then((res) => {
                console.log(res)
                props.setNewListing(res.data)
            })
            .catch((err) => {
                console.log(`Error: ${err}`)
            })
    }, [])
    return (
        props.listings.map((job, index) => (
            <div className='jobCard' key={index}>
                <p>Company: {job.company_name}</p>
                <p>Position: {job.position}</p>
                <p>Required Skills: {job.req_skills}</p>
                <p>Bonus Skills: {job.bonus_skills}</p>
            </div>
    )))
}

export default JobCard;