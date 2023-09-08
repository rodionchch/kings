import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import List from 'components/List';
import useProfile from './useProfile';

const Profile = () => {
  const {profileList} = useProfile();

  return (
    <ScrollView>
      <List data={profileList} onPress={() => {}} />
    </ScrollView>
  );
};

export default Profile;
