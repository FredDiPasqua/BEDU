import React from 'react';
import { formik } from 'formik';
import * as Yup from 'yup';
import '../assets/styles/components/SignUp.scss'

const SignUp = () => {
    return (
        <Formik 
                initialvalues={{
                    name:'',
                    lastname:'',
                    user:'',
                    email: '',
                    password: '',
                    passwordverification: ''
                }}
        />
    )
};

export default SignUp;