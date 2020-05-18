/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { postLogin } from '../../redux/actions';
import {
  newRecord,
  setFormErrorsIm,
} from '../../utils';

import './LoginForm.scss';

const loginSchema = Yup.object().shape({
  username: Yup
    .string()
    .max(25)
    .required(),
  password: Yup
    .string()
    .required()
    .min(8),
});

const defaultValues = {
  username: '',
  password: '',
};

const defaultErrors = {
  username: '',
  password: '',
};

const LoginForm = () => {
  const [values, setValues] = useState(newRecord(defaultValues));
  const [errors, setErrors] = useState(newRecord(defaultErrors));
  const dispatch = useDispatch();


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await loginSchema.validate(values, { abortEarly: false });
      setErrors(errors.clear());
    } catch (error) {
      setFormErrorsIm({
        setter: setErrors,
        errors: error.inner,
      });
      return;
    }
    try {
      await dispatch(postLogin({ finalConfigSpecs: { data: values } }));
      setValues(values.clear());
      // redirect user beyond the login page
    } catch (error) {
      // handle login error
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((oldValues) => ({ ...oldValues, [name]: value }));
  };

  return (
    <div className="container">
      <div className="login-form">
        <h2 className="form-title">Log In</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username
            <input
              id="username"
              type="text"
              name="username"
              placeholder="username"
              value={values.username}
              onChange={handleChange}
            />
          </label>
          {errors.username && (<p className="error">{errors.username}</p>)}
          <label htmlFor="password">
            <input
              id="username"
              type="password"
              name="password"
              placeholder="password"
              value={values.password}
              onChange={handleChange}
            />
          </label>
          {errors.password && (<p className="error">{errors.password}</p>)}
          <button type="submit" className="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
