import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const SignUp = ({ errors, touched, status }) => {

       const [members, setMembers] = useState([]);

       useEffect(() => {
              if (status) {
                     setMembers([...members, status])
              }
       }, [status])

       return (
       <>
              <Form>
                     {touched.username && errors.username && <p className="error">{errors.username}</p>}
                     <Field name="username" 
                            type="text" 
                            placeholder="Username" 
                            /> 
                     {touched.password && errors.password && <p className="error">{errors.password}</p>}
                     <Field name="password" 
                            type="password" 
                            placeholder="Password" 
                            /> 
                     {touched.role && errors.role && <p className="error">{errors.role}</p>}
                     <Field component="select" name="role" 
                            type="select"
                            value={members.role}  
                            >
                                <option value="">Pick a role:</option>
                                <option value="employee">Employee</option>
                                <option value="employer">Employer</option>
                     </Field> 
                     <button type="submit">
                            Submit
                     </button>
              </Form>
              {members.map(member => {
                     return ( 
                     <div key={member.username}>
                            <p>{member.username}</p>
                           <p>{member.role}</p>
                     </div>
              )})}
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
       handleSubmit: (values, {setStatus}) => {
              axios.post('https://reqres.in/api/users', values)
              .then(response => {
                     setStatus(response.data)
                     console.log("res", response.data)
              })
              .catch(err => {
                     console.log("Error:", err)
              })
       }
})(SignUp);