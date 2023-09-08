import React from 'react';

import LoginAuth from './LoginAuth';
import useLogin from './useLogin';

import * as s from './styles';

const Login = () => {
  const {} = useLogin();

  return <LoginAuth />;
};

export default Login;
