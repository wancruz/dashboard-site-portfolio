import React, { useState } from 'react';

import styles from './Login.module.css';


// import { Formik, Form } from "formik";

import * as Yup from "yup";

import Input from '../../components/forms/Input/Input';
import {  useNavigate } from 'react-router-dom';
import { login as loginService } from '../../services/authService';
import { useAuth } from '../../contexts/AuthContext';

import Form from '../../components/forms/Form';
import Button from '../../components/common/Button';
import Title from '../../components/common/Title';



interface LoginValues {
  email: string;
  password: string;
}

const initialValues: LoginValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().
    email('Email inválido').
    required('Campo obrigatário'),
    
  password: Yup.string().
    min(6, 'A senha deve conter no mínimo 6 caracteres').
    required('Campo obrigatório'),
});

const Login = () => {

  const navigate = useNavigate();
  const {login} = useAuth();

  const onSubmit = async (values: LoginValues) => {
    try {
     const user = await loginService(values.email, values.password);
      login(user);
      navigate("/");
      console.log(values);
    } catch (error) {
      console.log(error);
      alert("Senha ou email incorretos");
    }
  };
  
  return (
    <div className={styles.loginWrapper}>
          <Form
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
           
           {({ errors, touched }) => (
              <>
      
            <Title>MEU SITE PESSOAL</Title>
              <Input
                label="Email"
                name="email"
                type="email"
                errors={errors.email}
                touched={touched.email}
              />

             <Input 
              label="Password"
              name="password"
              type="password"
              errors={errors.password}
              touched={touched.password}
              />

              <Button type='submit'>Login</Button>
          </>
              )}
        </Form>
    </div>
  );
};

export default Login;
