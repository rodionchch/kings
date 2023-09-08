import React from 'react';
import {Keyboard} from 'react-native';
import {TextInput} from 'react-native-paper';

import {removeDevModeStorage} from 'storage/devMode';
import {setDevMode} from 'store/appSlice';
import useLoginAuth from './useLoginAuth';

import DevMode from 'components/DevMode';
import Input from 'components/Input';
import AppBarLoginHeader from 'components/AppBar/AppBarLogin/AppBarLoginHeader';
import Button from 'components/Button';
import Dialog from 'components/Dialog';

import * as s from './styles';

const LoginAuth = () => {
  const {
    theme,
    error,
    onAuth,
    devMode,
    loading,
    disabled,
    dispatch,
    username,
    password,
    landscape,
    errorText,
    setUsername,
    setPassword,
    showDevMode,
    onHideDialog,
    setShowDevMode,
    secureTextEntry,
    setSecureTextEntry,
  } = useLoginAuth();

  return (
    <s.LoginAuth>
      <AppBarLoginHeader setShowDevMode={setShowDevMode} />
      <s.LoginAuthTouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <s.LoginAuthInner>
          <s.LoginAuthForm landscape={landscape}>
            <s.LoginAuthInput>
              <Input
                value={username}
                color={'transparent'}
                placeholder="Username"
                onChangeText={name => {
                  setUsername(name);
                }}
                autoCapitalize="none"
                autoCorrect={false}
                onSubmitEditing={onAuth}
              />
            </s.LoginAuthInput>
            <s.LoginAuthInput>
              <Input
                value={password}
                color={'transparent'}
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={secureTextEntry}
                onChangeText={name => {
                  setPassword(name);
                }}
                right={
                  <TextInput.Icon
                    onPress={() => {
                      setSecureTextEntry(!secureTextEntry);
                    }}
                    icon={secureTextEntry ? 'eye-off' : 'eye'}
                  />
                }
                onSubmitEditing={onAuth}
              />
            </s.LoginAuthInput>

            <s.LoginAuthButton>
              <Button loading={loading} disabled={disabled} onPress={onAuth}>
                Next
              </Button>
            </s.LoginAuthButton>
          </s.LoginAuthForm>
        </s.LoginAuthInner>
      </s.LoginAuthTouchableWithoutFeedback>
      {!!devMode && (
        <s.LoginAuthDevMode>
          <s.LoginAuthDevModeTitle>Dev Mode: {devMode}</s.LoginAuthDevModeTitle>
          <s.LoginAuthDevModeButtons>
            <s.LoginAuthDevModeButton>
              <Button
                onPress={() => {
                  dispatch(setDevMode(''));
                  removeDevModeStorage();
                }}
                color={theme.colors.error}>
                Disable
              </Button>
            </s.LoginAuthDevModeButton>
            <s.LoginAuthDevModeButton second>
              <Button
                onPress={() => {
                  setShowDevMode(true);
                }}>
                Change
              </Button>
            </s.LoginAuthDevModeButton>
          </s.LoginAuthDevModeButtons>
        </s.LoginAuthDevMode>
      )}
      <DevMode
        visible={!!showDevMode}
        showDevMode={showDevMode}
        setShowDevMode={setShowDevMode}
      />

      <Dialog
        text={errorText?.text || ''}
        title={errorText?.title || ''}
        visible={!!error}
        onHideDialog={onHideDialog}
      />
    </s.LoginAuth>
  );
};

export default LoginAuth;
