/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import './LoginForm.scss';

import { postLogin } from '../../redux/actions';
import { setFormErrors } from '../../utils';

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
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState(defaultErrors);
  const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await loginSchema.validate(values, { abortEarly: false });
      setErrors(defaultErrors);
    } catch (error) {
      setFormErrors({ setter: setErrors, errors: error.inner });
      return;
    }
    try {
      await dispatch(postLogin({ data: values }));
      setValues(defaultValues);
      // redirect user beyond the login page
    } catch (error) {
      // handle login error
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues(oldValues => ({ ...oldValues, [name]: value }));
  };

  return (
    <div className="container">
      <div className="login-form">
        <h2 className="form-title">Log In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && (<p className="error">{errors.username}</p>)}
          <input
            type="password"
            name="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (<p className="error">{errors.password}</p>)}
          <button type="submit" className="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
