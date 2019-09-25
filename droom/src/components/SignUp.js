import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';


// const StyledForm = styled(Form)`
//     background-image: linear-gradient(175deg, rgb(24,38,40, 0.8), rgb(24,38,40, 1));
//     width: 380px;
//     max-width: 100%;
//     height: auto;
//     margin: 18px auto;
//     padding: 30px;
//     box-sizing: border-box;
//     box-shadow: 5px 10px 15px rgb(95, 99, 102, 0.3);
// `

// const Title = styled.h1`
//     font-size: 1.5rem;
//     margin-top: 100px;
//     color: rgb(242,242,242);
//     font-family: 'Maven Pro';
//     text-align: center;
// `

// const SubTitle = styled.h2`
//     font-size: 0.9rem;
//     margin-bottom: 50px;
//     color: rgb(101,204,184, 1);
//     font-weight: lighter;
//     font-family: 'Roboto';
//     text-align: center;
// `

// const StyledField = styled(Field)`
//     display: block;
//     height: 50px;
//     width: 318px;
//     margin: 18px 0px;
//     border-radius: 2px;
//     border: 1px solid lightgrey;
//     padding: 15px;
//     box-sizing: border-box;
//     background-color: rgb(242,242,242);
//     font-family: 'Roboto';
//     ::placeholder {
//         color: rgb(24,38,40, 1);
//         font-family: 'Roboto';
//     }
// `

// const StyledOption = styled.option`
//     width: 318px;
//     margin: 18px 0px;
//     border-radius: 2px;
//     border: 1px solid lightgrey;
//     padding: 15px;
//     box-sizing: border-box;
//     background-color: rgb(242,242,242);
//     font-family: 'Roboto';
//     color: rgb(24,38,40, 1);
// `

// const StyledButton = styled.button`
//     height: 50px;
//     width: 318px;
//     margin: 30px 0;
//     border-radius: 0px;
//     background-image: linear-gradient(75deg, rgb(101,204,184, 0.6), rgb(101,204,184, 1));
//     border: 1px solid rgb(101,204,184, 1);
//     color: rgb(24,38,40, 1);
//     text-transform: uppercase;
//     font-family: 'Maven Pro';
//     font-size: 0.8rem;
// `
const StyledP = styled.p`
    color: rgb(101,204,184, 1);
    font-family: 'Roboto';
    font-size: 0.7rem;
    margin: 0;
    padding: 0;
`


const SignUp = ({ errors, touched, status }) => {

       

       return (
       <>
              <Form className="forms">
                    <h1>Droom</h1>
                    <h2>Join the community</h2>
                     {touched.username && errors.username && <StyledP className="error">{errors.username}</StyledP>}
                     <Field name="username" 
                            type="text" 
                            placeholder="Username" 
                            /> 
                     {touched.password && errors.password && <StyledP className="error">{errors.password}</StyledP>}
                     <Field name="password" 
                            type="password" 
                            placeholder="Password" 
                            /> 
                     {touched.role && errors.role && <StyledP className="error">{errors.role}</StyledP>}
                     <Field component="select" name="role" 
                            type="select"
                            // value={value.role}
                            >
                                <option value="">Pick a role:</option>
                                <option value="employee">Employee</option>
                                <option value="employer">Employer</option>
                     </Field> 
                     <button type="submit">
                            Submit
                     </button>
              </Form>
       </>
       )
}

export default withFormik({
       mapPropsToValues: (values) => {
              return {
                     username: values.username || '',
                     password: values.password || '',
                     role: values.role || '',
              }
       },
       validationSchema: yup.object().shape({
              username: yup.string().required("Username is required."),
              password: yup.string().required("Password is required."),
              role: yup.string().required("Role is required."),
       }),
       handleSubmit: (values, {setStatus, props}) => {
              
              axios.post('https://droomapi.herokuapp.com/api/sample/register', values)
              .then(response => {
                     setStatus(response.data)
                     console.log('hey') 
                     props.setMembers(response.data)
                     values.role === 'employee' ? props.history.push('/employeeprofile') : props.history.push('/companyprofile')
                     // props.history.push('/')
              })
              .catch(err => {
                     console.log("Error:", err)
              })
       }
})(SignUp);

