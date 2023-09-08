import React from 'react';
import {Keyboard} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

import NavigationType from 'types/NavigationType';
import routes from 'constants/routes';

import * as s from './styles';

export const getAppBarLogin = (
  props: BottomTabHeaderProps | NativeStackHeaderProps | NavigationType,
) => <AppBarLogin {...props} />;

const AppBarLogin = () => {
  const {goBack, navigate} = useNavigation<NavigationType>();
  const route = useRoute<NavigationType>();

  return (
    <s.AppBarLoginTouchable onPress={Keyboard.dismiss}>
      <s.AppBarLogin>
        {route?.name !== routes.Login && (
          <s.AppBarLoginBack
            onPress={
              route.name === routes.CreatePIN
                ? () => {
                    navigate(routes.Login);
                  }
                : goBack
            }
          />
        )}
      </s.AppBarLogin>
    </s.AppBarLoginTouchable>
  );
};

export default AppBarLogin;
