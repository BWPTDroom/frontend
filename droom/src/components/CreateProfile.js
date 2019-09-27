import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

// const StyledForm = styled(Form)`
//     display: flex;
//     flex-direction: column;
//     justify-content: left;
//     align-items: center;
//     margin: 18px auto;
//     padding: 30px;
//     width: 380px;
//     height: auto;
//     max-width: 100%;
//     background-image: linear-gradient(75deg, #17242A, #327A77);
//     color: #FEFFFF;
//     box-shadow: 5px 10px 15px rgb(95, 99, 102, 0.3);
//     font-family: Roboto;
// `;

const StyledErrors = styled.p`
    color: red;
    font-weight: light;
    margin: 0;
    margin-left: 105px;
    padding: 10px 0;
    align-self: flex-start;
    font-family: Roboto;
    font-size: 0.7rem;
`;

// const Title = styled.label`
//     font-size: 1.8rem;
//     font-weight: bold;
//     margin-top: 60px;
//     font-family: Maven Pro;
// `;

// const StyledField = styled(Field)`
//     width: 318px;
//     height: 50px;
//     margin: 18px 0;
//     border-radius: 2px;
//     border: 1px solid #DEF2F1;
//     font-size: 16px;
// `;

// const StyledButton = styled.button`
//     height: 50px;
//     width: 318px;
//     margin: 30px 0;
//     border-radius: 2px;
//     background-color: #17242A;
//     border: 1px solid #327a77;
//     color: #FEFFFF;
//     font-family: Maven Pro;
//     font-size: 16px;
//     text-transform: uppercase;
// `;

const CreateProfile = ({ errors, touched, status }) => {




    return (
        <Form className='setProfile'>
            <h1 className='title'>Set Up Employee Profile</h1>
            
            <Field className='field' type='text' name='name' placeholder='Full Name' />
            {touched.name && errors.name && <StyledErrors className='error'>{errors.name}</StyledErrors>}
            
            <Field className='field' type='text' name='email' placeholder='Email' />
            {touched.email && errors.email && <StyledErrors className='error'>{errors.email}</StyledErrors>}
            
            <Field className='field' type='text' name='phone_number' placeholder='Phone Number' />
            {touched.phone_number && errors.phone_number && <StyledErrors className='error'>{errors.phone_number}</StyledErrors>}

            <Field className='field' type='text' name='job_title' placeholder='Current Job Title' />
            {touched.job_title && errors.job_title && <StyledErrors className='error'>{errors.job_title}</StyledErrors>}

            <Field className='field' type='text' name='desired_position' placeholder='Desired Position' />
            {touched.desired_position && errors.desired_position && <StyledErrors className='error'>{errors.desired_position}</StyledErrors>}
            
            <Field className='field' type='textarea' name='skills' placeholder='Skills' />
            {touched.skills && errors.skills && <StyledErrors className='error'>{errors.skills}</StyledErrors>}

            <button type='submit'>SUBMIT</button>
        </Form>
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
            name: values.name || '',
            email: values.email || '',
            phone_number: values.phone_number || '',
            job_title: values.job_title || '',
            // desired_position: values.desired_position || '',
            skills: values.skills || ''
          
    
        }
    },

    validationSchema: yup.object().shape({
        name: yup.string().required('*Name is required'),
        email: yup.string().email().required('*Email is required'),
        phone_number: yup.number().min(9).required('*Phone number is required'),
        job_title: yup.string().required('*Current job title is required'),
        desired_position: yup.string().required('*Desired position is required'),
        skills: yup.string().required('*Skills are required')
    }),

    handleSubmit: (values, { setStatus, props }) => {
        console.log(values)
        axios.post('https://droomapi.herokuapp.com/api/sample/prospects', values)
            .then((res) => {
                setStatus(res.data)
                console.log(res)
                props.setProspects(res.data)
                props.history.push('./joblistings')
            })
            .catch((err) => {
                console.log('Error:', err)
            })
    }
})(CreateProfile)
