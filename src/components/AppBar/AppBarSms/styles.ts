import styled from 'styled-components/native';
import {Appbar, Text} from 'react-native-paper';

export const AppBarSms = styled(Appbar.Header).attrs({
  mode: 'center-aligned',
})``;

export const AppBarSmsBack = styled(Appbar.BackAction)``;

export const AppBarSmsContent = styled.View`
  justify-content: center;
  height: 100%;
  align-items: center;
  flex: 1;
`;

export const AppBarSmsTitle = styled(Text).attrs({
  variant: 'titleLarge',
})`
  text-align: center;
`;

export const AppBarSmsSubTitle = styled(Text).attrs({
  variant: 'labelMedium',
})`
  margin: 4px 0 6px;
  text-align: center;
`;

export const AppbarAction = styled(Appbar.Action)``;
