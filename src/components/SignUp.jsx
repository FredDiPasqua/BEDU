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
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Required'),
                    lastname: Yup.string()
                        .required('Required'),
                    user: Yup.string()
                        .min(3, 'Necesita contener al menos 3 caracteres')
                        .max(15, 'maximo son 15 caracteres')
                        .required('Required'),
                    email: Yup.string()
                        .email('El email es invalido')
                        .required('Required')

                })}
        />
    )
};

export default SignUp;