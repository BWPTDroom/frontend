import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup'

const CreateProfile = ({ errors, touched, status }) => {
    const [users, setNewUser] = useState([]);

    useEffect(() => {
        if(status) {
            setNewUser([...users, status])
        }
    }, [status])

    return (
        <Form>
            {touched.name && errors.name && <p className='error'>{errors.name}</p>}
            <Field type='text' name='name' placeholder='Name' />

            {touched.occupation && errors.occupation && <p className='error'>{errors.occupation}</p>}
            <Field type='text' name='occupation' placeholder='Occupation' />

            {touched.pastExperiences && errors.pastExperiences && <p className='error'>{errors.pastExperiences}</p>}
            <Field type='textarea' name='pastExperiences' placeholder='Past Experiences' />
            <Field type='textarea' name='interests' placeholder='Interests' />
        </Form>
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
    }
//post here
})(CreateProfile)