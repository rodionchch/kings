import {useEffect, useState} from 'react';
// import {useAppDispatch} from 'store/hooks';
import {BottomNavigation} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {AvoidSoftInput} from 'react-native-avoid-softinput';

import NavigationType from 'types/NavigationType';
// import {getProfileStorage} from 'storage/profile';

import List from 'screens/List';
import Saved from 'screens/Saved';
import Profile from 'screens/Profile';
import Search from 'screens/Search';

const useDashboard = () => {
  const navigation = useNavigation<NavigationType>();
  // const route = useRoute<NavigationType>();
  // const dispatch = useAppDispatch();
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   getProfileStorage().then(data => {
  //     if (data) {
  //       const dataParse = JSON.parse(data);

  //       const profileData = {
  //         firstName: dataParse.firstName,
  //         lastName: dataParse.lastName,
  //       };

  //       // dispatch(setProfile(profileData));
  //     }
  //   });
  // }, [dispatch]);

  useEffect(() => {
    AvoidSoftInput.setAdjustResize();
  }, []);

  const [routes] = useState([
    {
      key: 'list',
      title: 'Kings',
      focusedIcon: 'format-list-bulleted',
      unfocusedIcon: 'format-list-bulleted',
    },
    {
      key: 'saved',
      title: 'Saved',
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
    },
    {
      key: 'search',
      title: 'Search',
      focusedIcon: 'magnify',
      unfocusedIcon: 'magnify',
    },
    {
      key: 'profile',
      title: 'Profile',
      focusedIcon: 'account',
      unfocusedIcon: 'account-outline',
    },
  ]);

  const onSetDashboard = (dashboard: string) => {
    navigation.setParams({dashboard});
  };

  const renderScene = BottomNavigation.SceneMap({
    list: List,
    saved: Saved,
    search: Search,
    profile: Profile,
  });

  return {index, setIndex, routes, renderScene, onSetDashboard};
};

export default useDashboard;
