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
import Open from 'screens/Open';

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
        {!auth ? (
          <>
            <Stack.Screen name={routes.Login} component={Login} />
          </>
        ) : (
          <>
            <Stack.Screen
              name={routes.Dashboard}
              component={Dashboard}
              options={{animation: 'none'}}
              initialParams={{dashboard: 'Kings'}}
            />
            <Stack.Screen
              name={routes.Open}
              component={Open}
              options={{title: 'Kings'}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Home;
