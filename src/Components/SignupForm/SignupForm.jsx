import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(8, 'Must be at least 8 characters')
            .required('Required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='input__field'>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" />
              {/* <p className='error'> <ErrorMessage name="name" /></p> */}
            </div>

            <div className='input__field'>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              {/* <p className='error'> <ErrorMessage name="email" /></p> */}
            </div>

            <div className='input__field'>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              {/* <p className='error'> <ErrorMessage name="password" /></p> */}
            </div>

            <div className='input__field'>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field type="password" name="confirmPassword" />
             {/* <p className='error'> <ErrorMessage name="confirmPassword" /></p> */}
            </div>

            <button  className="login__btn" type="submit">
              SignUp
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
