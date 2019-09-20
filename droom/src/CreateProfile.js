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
    margin: 50px;
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
            <label>Set Up Profile</label>
            {touched.name && errors.name && <p className='error'>{errors.name}</p>}
            <Field type='text' name='name' placeholder='Name' />

            {touched.email && errors.email && <p className='error'>{errors.email}</p>}
            <Field type='text' name='email' placeholder='Email' />

            {touched.phoneNumber && errors.phoneNumber && <p className='error'>{errors.phoneNumber}</p>}
            <Field type='text' name='phoneNumber' placeholder='Phone Number' />

            {touched.jobTitle && errors.jobTitle && <p className='error'>{errors.jobTitle}</p>}
            <Field type='text' name='jobTitle' placeholder='Job Title' />

            {touched.skills && errors.skills && <p className='error'>{errors.skills}</p>}
            <Field type='textarea' name='skills' placeholder='Skills' />

            <button type='submit'>Submit</button>
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