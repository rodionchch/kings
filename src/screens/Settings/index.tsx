import React from 'react';

import List from 'components/List';
import Avatar from 'components/Avatar';
import useSettings from './useSettings';
import ListDataItemType from 'types/ListDataItemType';

import * as s from './styles';

const Settings = () => {
  const {navigate, profile, books, settings} = useSettings();

  return (
    <s.Settings>
      <s.SettingsUserInfo>
        <Avatar
          label={`${profile?.firstName?.[0] || ''}${
            profile?.lastName?.[0] || ''
          }`}
          size={94}
        />
        <s.SettingsTitle>
          {profile?.firstName} {profile?.lastName}
        </s.SettingsTitle>
      </s.SettingsUserInfo>
      <s.SettingsSection>
        <List
          data={books}
          onPress={({route}: ListDataItemType) => {
            navigate(route);
          }}
        />
      </s.SettingsSection>
      <s.SettingsSection>
        <List
          data={settings}
          onPress={({title}: ListDataItemType) => {
            navigate(title);
          }}
        />
      </s.SettingsSection>
    </s.Settings>
  );
};

export default Settings;
