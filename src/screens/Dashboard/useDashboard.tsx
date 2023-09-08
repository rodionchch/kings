import {useEffect, useState} from 'react';
import {useAppDispatch} from 'store/hooks';
import {BottomNavigation} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AvoidSoftInput} from 'react-native-avoid-softinput';

import NavigationType from 'types/NavigationType';
import {getProfileStorage} from 'storage/profile';
import sleep from 'utils/sleep';

import ChatScreen from 'screens/Chat';
import Default from 'screens/Default';
// import SettingsScreen from 'screens/Settings';

enum Dashboard {
  Default,
}

const useDashboard = () => {
  const navigation = useNavigation<NavigationType>();
  const route = useRoute<NavigationType>();
  const dispatch = useAppDispatch();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getProfileStorage().then(data => {
      if (data) {
        const dataParse = JSON.parse(data);

        const profileData = {
          firstName: dataParse.firstName,
          lastName: dataParse.lastName,
        };

        // dispatch(setProfile(profileData));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    AvoidSoftInput.setAdjustResize();
  }, []);

  const [routes] = useState([
    {
      key: 'one',
      title: 'Screen 1',
      focusedIcon: 'format-list-bulleted',
      unfocusedIcon: 'format-list-bulleted',
    },
    {
      key: 'two',
      title: 'Screen 2',
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
    },
    {
      key: 'three',
      title: 'Screen 3',
      focusedIcon: 'magnify',
      unfocusedIcon: 'magnify',
    },
    {
      key: 'four',
      title: 'Screen 4',
      focusedIcon: 'account',
      unfocusedIcon: 'account-outline',
    },
    // {
    //   key: 'mail',
    //   title: 'Mail',
    //   focusedIcon: 'email',
    //   unfocusedIcon: 'email-outline',
    // },
    // {
    //   key: 'sms',
    //   title: 'SMS',
    //   focusedIcon: 'chat-processing',
    //   unfocusedIcon: 'chat-outline',
    // },
    // {
    //   key: 'settings',
    //   title: 'Settings',
    //   focusedIcon: 'cog',
    //   unfocusedIcon: 'cog-outline',
    // },
  ]);

  const onSetDashboard = (dashboard: string) => {
    navigation.setParams({dashboard});
  };

  const renderScene = BottomNavigation.SceneMap({
    one: Default,
    two: Default,
    three: Default,
    four: Default,
  });

  return {index, setIndex, routes, renderScene, onSetDashboard};
};

export default useDashboard;
