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
`;

const Title = styled.label`
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 60px;
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
    border: 1px solid #FEFFFF;
    color: #FEFFFF;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
`;

const CreateProfile = ({ errors, touched, status }) => {
    const [users, setNewUser] = useState([]);

    useEffect(() => {
        if(status) {
            setNewUser([...users, status])
        }
    }, [status])

    return (
        <StyledForm className='setProfile'>
            <Title className='title'>Set Up Profile</Title>
            {touched.name && errors.name && <p className='error'>{errors.name}</p>}
            <StyledField type='text' name='name' placeholder='Full Name' />

            {touched.email && errors.email && <p className='error'>{errors.email}</p>}
            <StyledField type='text' name='email' placeholder='Email' />

            {touched.phoneNumber && errors.phoneNumber && <p className='error'>{errors.phoneNumber}</p>}
            <StyledField type='text' name='phoneNumber' placeholder='Phone Number' />

            {touched.jobTitle && errors.jobTitle && <p className='error'>{errors.jobTitle}</p>}
            <StyledField type='text' name='jobTitle' placeholder='Job Title' />

            {touched.skills && errors.skills && <p className='error'>{errors.skills}</p>}
            <StyledField type='textarea' name='skills' placeholder='Skills' />

            <StyledButton type='submit'>Submit</StyledButton>
        </StyledForm>
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
            name: values.name || '',
            email: values.email || '',
            phoneNumber: values.phoneNumber || '',
            jobTitle: values.jobTitle || '',
            skills: values.skills || ''
        }
    },

    validationSchema: yup.object().shape({
        name: yup.string().required('Name is required!'),
        email: yup.string().email().required('Email is required!'),
        phoneNumber: yup.number().min(9).required('Phone number is required!'),
        jobTitle: yup.string().required('Current job title is required!'),
        skills: yup.string().required('Skills are required!')
    }),

    handleSubmit: (values, { setStatus }) => {
        axios.post('', values)
            .then((res) => {
                setStatus(res.data)
            })
            .catch((err) => {
                console.log('Error:', err)
            })
    }
})(CreateProfile)