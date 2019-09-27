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
    color: #DEF2F1;
    font-weight: light;
    margin: 0;
    margin-left: 32px;
    padding: 0;
    align-self: flex-start;
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

const CreateCompanyProfile = ({ errors, touched, status }) => {



    return (
        <Form className='forms'>
            <h2 className='title'>Set Up Company Profile</h2>
            
            <Field type='text' name='company_name' placeholder='Company Name' />
            {touched.company_name && errors.company_name && <StyledErrors className='error'>{errors.company_name}</StyledErrors>}
            
            <Field type='textarea' name='about_us' placeholder='About Us' />
            {touched.about_us && errors.about_us && <StyledErrors className='error'>{errors.about_us}</StyledErrors>}
            
            <button type='submit'>Submit</button>
        </Form>
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
            company_name: values.company_name || '',
            about_us: values.about_us || ''
        }
    },

    validationSchema: yup.object().shape({
        company_name: yup.string().required('Company name is required'),
        about_us: yup.string().required('Description is required')
    }),

    handleSubmit: (values, { setStatus, props }) => {
        axios.post('https://droomapi.herokuapp.com/api/sample/employers', values)
            .then((res) => {
                setStatus(res.data)
                props.setNewCompany(res.data)
                props.history.push('/newjob')
            })
            .catch((err) => {
                console.log('Error:', err)
            })
    }
})(CreateCompanyProfile)