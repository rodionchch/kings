import styled from 'styled-components/native';
import {ScrollView} from 'react-native-gesture-handler';
import {Title} from 'react-native-paper';

export const Settings = styled(ScrollView)``;

export const SettingsUserInfo = styled.View`
  margin-bottom: 8px;
  padding: 0 16px;
  align-items: center;
  padding-top: 16px;
`;

export const SettingsTitle = styled(Title)`
  margin-top: 12px;
  font-weight: bold;
`;

export const SettingsSection = styled.View`
  margin-bottom: 0px;
`;
