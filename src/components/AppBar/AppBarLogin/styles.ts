import {Appbar} from 'react-native-paper';
import styled from 'styled-components/native';

export const AppBarLogin = styled(Appbar.Header).attrs({
  mode: 'center-aligned',
})``;

export const AppBarLoginTouchable = styled.TouchableWithoutFeedback`
  width: 100%;
  flex: 1;
`;

export const AppBarLoginBack = styled(Appbar.BackAction)``;

export const AppBarLoginHeader = styled.View<any>`
  flex: 1 0 16%;
  ${props => props.small && `flex: 1 0 9%;`}
`;

export const AppBarLoginHeaderTouchable = styled.TouchableWithoutFeedback`
  flex: 1;
`;

export const AppBarLoginHeaderInner = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const AppBarLoginHeaderLogo = styled.TouchableWithoutFeedback.attrs({
  underlayColor: 'transparent',
})``;
