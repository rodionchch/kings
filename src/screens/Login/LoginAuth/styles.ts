import styled from 'styled-components/native';
import {Text} from 'react-native-paper';

export const LoginAuth = styled.View`
  flex: 1;
`;

export const LoginAuthTouchableWithoutFeedback = styled.TouchableWithoutFeedback`
  flex: 1;
`;

export const LoginAuthInner = styled.View`
  align-items: center;
  justify-content: center;
  padding: 0 12px;
`;

export const LoginAuthForm = styled.View<any>`
  width: 100%;
  max-width: 370px;
  height: 100%;
  padding-top: 6%;
  ${(props: any) => props.landscape && `padding-top: 0;`}
`;

export const LoginAuthInput = styled.View`
  margin-bottom: 8px;
`;

export const LoginAuthButton = styled.View`
  margin-top: 8px;
`;

export const LoginAuthDevMode = styled.View`
  position: absolute;
  bottom: 20%;
  left: 12px;
  right: 12px;
`;

export const LoginAuthDevModeTitle = styled(Text).attrs({
  variant: 'titleMedium',
})`
  text-align: center;
  margin-bottom: 8px;
`;

export const LoginAuthDevModeButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export const LoginAuthDevModeButton = styled.View`
  margin-right: 12px;
  ${(props: any) => props.second && `margin-right: 0;`}
`;
