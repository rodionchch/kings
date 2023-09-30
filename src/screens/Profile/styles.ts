import styled from 'styled-components/native';

import profile from 'assets/images/profile.jpg';
import rightIcon from 'assets/icons/chevron.right.png';
import {Button} from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';

export const Profile = styled.ScrollView`
  padding: 0 18px;
`;

export const ProfileHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 36px;
`;

export const ProfileAvatar = styled.Image.attrs({
  source: profile,
})`
  width: 140px;
  height: 140px;
  border-radius: 250px;
`;

export const ProfileHeaderContent = styled.View`
  padding-left: 18px;
`;

export const ProfileHeaderName = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 6px;
`;

export const ProfileHeaderUsername = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 200;
`;

export const ProfileContent = styled.View`
  margin-bottom: 62px;
`;

export const ProfileContentItem = styled.View`
  height: 50px;
  border-radius: 8px;
  margin-bottom: 12px;
  background: #1e1e1e;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px 0 25px;
  align-items: center;
`;

export const ProfileContentLabel = styled.Text`
  color: #676767;
  font-size: 16px;
  font-weight: 300;
  color: #676767;
  font-size: 16px;
  font-weight: 300;
`;

export const ProfileContentIcon = styled.Image.attrs({
  source: rightIcon,
})`
  width: 7px;
  height: 12px;
`;

export const ProfileButton = styled(Button).attrs({
  mode: 'contained',
  contentStyle: {
    height: 50,
  },
  labelStyle: {
    color: '#F00',
    fontSize: 16,
    fontWeight: 300,
  },
})`
  border-radius: 7px;
  background: #1e1e1e;
  margin-bottom: 100px;
`;

export const BottomNavigationGradient = styled(LinearGradient).attrs({
  colors: [
    'rgba(0, 0, 0, 0)',
    'rgba(0, 0, 0, 0.6) 56%',
    'rgba(0, 0, 0, 0.9) 100%)',
  ],
})`
  height: 86px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
`;
