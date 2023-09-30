import React from 'react';

import useLogin from './useLogin';
import {Text} from 'react-native-paper';

import * as s from './styles';

const Login = () => {
  const {} = useLogin();

  return <Text>Login</Text>;
};

export default Login;
