import React from 'react';
import {
  NavigationContainer,
  Theme as ThemeType,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useAppSelector} from 'store/hooks';
import routes from 'constants/routes';

import {getAppBar} from 'components/AppBar';

import Login from 'screens/Login';
import Dashboard from 'screens/Dashboard';
import Profile from 'screens/Settings/Profile';
import Security from 'screens/Settings/Security';
import Theme from 'screens/Settings/Theme';
import Language from 'screens/Settings/Language';
import About from 'screens/Settings/About';

const Stack = createNativeStackNavigator();

type HomeProps = {
  theme: ThemeType;
};
const Home: React.FC<HomeProps> = ({theme}) => {
  const {auth} = useAppSelector(({app}) => app);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName={routes.Dashboard}
        screenOptions={{
          header: getAppBar,
        }}>
        {/* {!auth ? (
          <>
            <Stack.Screen name={routes.Login} component={Login} />
          </>
        ) : ( */}
        <>
          <Stack.Screen
            name={routes.Dashboard}
            component={Dashboard}
            options={{animation: 'none'}}
            initialParams={{dashboard: 'Mail'}}
          />

          {/**
           * Settings
           */}

          {/* <Stack.Screen name={routes.Profile} component={Profile} />
            <Stack.Screen name={routes.Security} component={Security} />
            <Stack.Screen name={routes.Theme} component={Theme} />
            <Stack.Screen name={routes.Language} component={Language} />
            <Stack.Screen name={routes.About} component={About} /> */}
        </>
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Home;
