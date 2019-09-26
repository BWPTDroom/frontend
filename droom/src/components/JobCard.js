import React, { useEffect } from 'react';
import axios from 'axios';
import { FaRegHeart, FaRegTimesCircle } from "react-icons/fa";
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

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

    useEffect (() => {
        const timer = setTimeout(() => {
            if(props.loading === true) {
                return <ClipLoader css={override} />
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        props.listings.map((job, index) => (
            <div className='jobCard' key={index}>
                <p>Company: {job.company}</p>
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