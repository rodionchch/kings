import React from 'react';
import {Appbar as PaperAppbar, Text as PaperText} from 'react-native-paper';
import {getHeaderTitle} from '@react-navigation/elements';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

import routes from 'constants/routes';
import NavigationType from 'types/NavigationType';
import {Image, TouchableOpacity} from 'react-native';
import iconBack from 'assets/icons/back.png';

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
        {back && (
          <TouchableOpacity
            style={{
              width: 25,
              height: 30,
              justifyContent: 'center',
              marginRight: -20,
              marginLeft: 8,
              zIndex: 10,
            }}
            onPress={navigation.goBack}>
            <Image
              style={{
                width: 9,
                height: 17,
              }}
              source={iconBack}
            />
          </TouchableOpacity>
        )}

        <PaperText style={{fontWeight: 800, fontSize: 24, paddingLeft: 12}}>
          {getTitle()?.toUpperCase()}
        </PaperText>

        {/* <PaperAppbar.Content title={getTitle()} /> */}
      </PaperAppbar.Header>
    </>
  );
};

export default AppBar;
