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

            {touched.occupation && errors.occupation && <p className='error'>{errors.occupation}</p>}
            <Field type='text' name='occupation' placeholder='Occupation' />

            {touched.pastExperiences && errors.pastExperiences && <p className='error'>{errors.pastExperiences}</p>}
            <Field type='textarea' name='pastExperiences' placeholder='Past Experiences' />

            {touched.interests && errors.interests && <p className='error'>{errors.interests}</p>}
            <Field type='textarea' name='interests' placeholder='Interests' />

            <button type='submit'>Submit</button>
        </StyledForm>
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
            name: values.name || '',
            occupation: values.occupation || '',
            pastExperiences: values.pastExperiences || '',
            interests: values.interests || ''
        }
    },

    validationSchema: yup.object().shape({
        name: yup.string().required('Name is required!'),
        occupation: yup.string().required('Occupation is required!'),
        pastExperiences: yup.string().required('Past experience is required!'),
        interests: yup.string().required('Interests are required!')
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