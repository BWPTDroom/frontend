import React, { useEffect } from 'react';
import axios from 'axios';
import { FaRegHeart, FaRegTimesCircle } from "react-icons/fa";

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
            <div className='jobCard clicked-like' key={index}>
                <p className='company-name'> {job.company}</p>
                <p>Position: {job.position}</p>
                <p>Required Skills: {job.req_skills}</p>
                <p>Bonus Skills: {job.bonus_skills}</p>

                <div className='reaction'>
                    <button className='like'>
                        <FaRegHeart />
                    </button>
                    <button className='dislike'>
                        <FaRegTimesCircle />
                    </button>
                </div>
            </div>
    )))
}

export default JobCard;