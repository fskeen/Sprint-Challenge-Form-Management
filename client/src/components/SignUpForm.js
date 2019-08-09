import React, { useEffect, useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function SignUpForm ({errors, touched, values, handleSubmit, status}) {

    const [userList, setUserList] = useState([])

    useEffect (() => {
        if (status) {
            setUserList([...userList, status])
        }
    }, [ status ]);

    return (
        <div>
        <Form>
            <h1>Create your account</h1>
    
            <label htmlFor="username">Username</label>
            <Field
                type="text"
                name="username"
                placeholder="Username"
                id="username" />
                {touched.username && errors.username && <p className="error-text">{errors.username}</p>}
            
            <br/>
            <label htmlFor="email">Email address</label>
            <Field
                type="email"
                name="email"
                placeholder="Email address"
                id="email" />
            {touched.email && errors.email && <p className="error-text">{errors.email}</p>}
            
            <div className="password-wrapper">
                <div className="option">
                    <label htmlFor="password">Password</label>
                        <Field
                            type="password"
                            name="password"
                            placeholder="Password"
                            id="password" />
                        {touched.password && errors.password && <p className="error-text">{errors.password}</p>}
                </div>

                <div className="option">
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <Field
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        id="confirmPassword" />
                    {touched.confirmPassword && errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
                </div>
                
            </div>
            
            <div className="TOS-checkbox">
                <Field
                    type="checkbox"
                    name="TOS"
                    checked={values.TOS}
                    id="TOS" />
                    <label htmlFor="TOS">By selecting this, you are confirming that you have read the <a href="#">Terms of Service</a></label>
                {touched.TOS && errors.TOS && <p className="error-text">{errors.TOS}</p>}
            </div>
            
            
            <button type="submit" data-testid="submit">Create account</button>
        </Form>
        </div>
    )
}

const FormikSignUpForm = withFormik({
    mapPropsToValues({username, email, password, confirmPassword, TOS}) {
        return {
            username: username || '',
            email: email || '',
            password: password || '',
            confirmPassword: confirmPassword || '',
            TOS: TOS || false
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().min(2, "Your username must be at least 2 characters.").required("You must enter a username."),
        email: Yup.string().email("Not a valid email address.").required("You must enter a valid email address."),
        password: Yup.string().min(8, "Password must be at least 8 characters.").required("You must enter a password."),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords do not match.").required("You must confirm your password."),
        TOS: Yup.bool().oneOf([true],"You must accept the terms and conditions to continue.")
    }),

    handleSubmit(values, { setStatus, resetForm }, fakeLog) {
        axios
            .post('http://localhost:5000/api/register', values)
            .then(res => {
                setStatus(res.data);
                console.log(res.data)
                resetForm();
            })
            .catch(err => console.log(err.response));
    }

})(SignUpForm);

export default FormikSignUpForm;