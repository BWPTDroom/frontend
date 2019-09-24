import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    margin: 18px auto;
    padding: 30px;
    width: 380px;
    height: auto;
    max-width: 100%;
    background-image: linear-gradient(75deg, #17242A, #327A77);
    color: #FEFFFF;
    box-shadow: 5px 10px 15px rgb(95, 99, 102, 0.3);
    font-family: Roboto;
`;

const StyledErrors = styled.p`
    color: #DEF2F1;
    font-weight: light;
    margin: 0;
    margin-left: 32px;
    padding: 0;
    align-self: flex-start;
`;

const Title = styled.label`
    font-size: 1.8rem;
    font-weight: bold;
    margin-top: 60px;
    font-family: Maven Pro;
`;

const StyledField = styled(Field)`
    width: 318px;
    height: 50px;
    margin: 18px 0;
    border-radius: 2px;
    border: 1px solid #DEF2F1;
    font-size: 16px;
`;

const StyledButton = styled.button`
    height: 50px;
    width: 318px;
    margin: 30px 0;
    border-radius: 2px;
    background-color: #17242A;
    border: 1px solid #327a77;
    color: #FEFFFF;
    font-family: Maven Pro;
    font-size: 16px;
    text-transform: uppercase;
`;

const CreateJobListing = ({ errors, touched, status }) => {

    // useEffect(() => {
    //     if(status) {
    //         setNewListing([...listings, status])
    //     }
    // }, [status])
    return (
        <StyledForm className='createJobListing'>
            <Title className='title'>Create New Job</Title>
            
            <StyledField type='text' name='position' placeholder='Position Title' />
            {touched.position && errors.position && <StyledErrors className='error'>{errors.position}</StyledErrors>}
            
            <StyledField type='textarea' name='req_skills' placeholder='Required Skills' />
            {touched.req_skills && errors.req_skills && <StyledErrors className='error'>{errors.req_skills}</StyledErrors>}

            <StyledField type='textarea' name='bonus_skills' placeholder='Bonus Skills' />
            {touched.bonus_skills && errors.bonus_skills && <StyledErrors className='error'>{errors.bonus_skills}</StyledErrors>}
            
            <StyledButton type='submit'>Submit</StyledButton>

        </StyledForm>
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        // console.log(values)
        return {
            position: values.position || '',
            req_skills: values.req_skills || '',
            bonus_skills: values.bonus_skills || '',
            company: values.companies.id 
        }
    },

    validationSchema: yup.object().shape({
        position: yup.string().required('Position title is required'),
        req_skills: yup.string().required('Skills are required'),
        bonus_skills: yup.string()
    }),

    handleSubmit: (values, { setStatus, props }) => {
        console.log(values);
        axios.post('https://droomapi.herokuapp.com/api/sample/postings', values)
            .then((res) => {
                setStatus(res.data)
                console.log(res)
                props.history.push('/joblistings')
            })
            .catch((err) => {
                console.log('Error:', err)
            })
    }
})(CreateJobListing)