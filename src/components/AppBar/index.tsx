import React from 'react';
import {
  Appbar as PaperAppbar,
  Text as PaperText,
  Text,
} from 'react-native-paper';
import {getHeaderTitle} from '@react-navigation/elements';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

import routes from 'constants/routes';
import NavigationType from 'types/NavigationType';

export const getAppBar = (
  props: BottomTabHeaderProps | NativeStackHeaderProps | NavigationType,
) => <AppBar {...props} />;

const AppBar = ({
  navigation,
  route,
  options,
  back,
}: BottomTabHeaderProps | NativeStackHeaderProps | NavigationType) => {
  const title = getHeaderTitle(options, route.name);
  const {params} = route;

  const getTitle = () => {
    if (route.name === routes.Dashboard) {
      return params?.dashboard === 'Sms'
        ? params?.dashboard?.toUpperCase()
        : params?.dashboard;
    }
    return params?.name || title;
  };

  return (
    <>
      <PaperAppbar.Header mode="center-aligned">
        <PaperText style={{fontWeight: 800, fontSize: 24, paddingLeft: 12}}>
          {getTitle()?.toUpperCase()}
        </PaperText>
        {/* {back && <PaperAppbar.BackAction onPress={navigation.goBack} />} */}

        {/* <PaperAppbar.Content title={getTitle()} /> */}
      </PaperAppbar.Header>
    </>
  );
};

export default AppBar;
