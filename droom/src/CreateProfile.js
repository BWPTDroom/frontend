import React, { useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup'

const CreateProfile = ({errors, touched}) => {
    const [users, setNewUser] = useState([]);

    return (
        <Form>
            <Field type='text' name='name' placeholder='Name' />
        </Form>
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
            name: values.name || ''
        }
    }
//post here
})(CreateProfile)