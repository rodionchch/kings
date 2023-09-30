import styled from 'styled-components/native';
import done from 'assets/logos/done.png';
import {Button} from 'react-native-paper';

export const Done = styled.View`
  padding: 0 12px;
  padding-top: 30px;
  justify-content: center;
  align-items: center;
`;

export const DoneLogo = styled.Image.attrs({
  source: done,
})`
  width: 72px;
  height: 72px;
  margin-bottom: 26px;
`;

export const DoneTitle = styled.Text`
  color: #fff;
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 26px;
`;

export const DoneText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 85px;
`;

export const DoneButtons = styled.View`
  flex-direction: row;
`;

export const DoneButton = styled(Button).attrs(props => ({
  mode: 'contained',
  contentStyle: {
    height: 58,
  },
  labelStyle: {
    color: props?.green ? 'rgba(0, 255, 10, 0.73)' : '#0578FF',
    fontSize: 16,
    fontWeight: 300,
  },
}))`
  width: 92px;
  height: 58px;
  border-radius: 7px;
  background: #1e1e1e;
  margin: 0 26px;
`;
