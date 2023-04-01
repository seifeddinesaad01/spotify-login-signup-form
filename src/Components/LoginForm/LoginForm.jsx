import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = () => {
  return (
    <div className='login__form'>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className='input__field'>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div className='input__field'>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
            <input type="checkbox" /><label htmlFor="save">Remember me</label>
            </div>
           
            <button className='login__btn' type="submit">login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
