import {useEffect, useMemo, useState} from 'react';
import {Keyboard} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {AvoidSoftInput} from 'react-native-avoid-softinput';

import {useAppDispatch, useAppSelector} from 'store/hooks';
import NavigationType from 'types/NavigationType';
import routes from 'constants/routes';
import useRotate from 'hooks/useRotate';
import {userAuth} from 'api';
import {setNetworkError} from 'store/appSlice';

const useLoginAuth = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NavigationType>();
  const {devMode} = useAppSelector(({app}) => app);
  const {landscape} = useRotate();

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showDevMode, setShowDevMode] = useState(false);
  const [error, setError] = useState<{
    code: number;
    message: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AvoidSoftInput.setAdjustPan();
  }, []);

  const disabled = username?.length < 1 || password?.length < 6;

  const clearCredentials = () => {
    setUsername('');
    setPassword('');
  };

  const errorText = useMemo(() => {
    switch (error?.code) {
      case 400:
        return {
          title: 'Wrong Credentials',
          text: 'Invalid username or password',
        };
      default:
        return {
          title: 'Network Error',
          text: error?.message,
        };
    }
  }, [error]);

  const onAuth = () => {
    if (!disabled) {
      Keyboard.dismiss();
      setLoading(true);
      userAuth({username, password})
        .then(() => {
          setLoading(false);
          navigate(routes.OTP, {
            username,
            password,
          });
        })
        .catch(e => {
          setLoading(false);
          onShowDialog({
            code: e?.response?.data?.code || e?.status,
            message: e?.response?.data?.message || e?.message,
          });
        })
        .catch(() => {
          dispatch(setNetworkError(true));
        });
    }
  };

  const onShowDialog = (data: {code: number; message: string}) => {
    setError(data);
  };

  const onHideDialog = () => {
    setError(null);
    setPassword('');
    // clearCredentials();
  };

  return {
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
  };
};

export default useLoginAuth;
