import styled from 'styled-components/native';
import {Text} from 'react-native-paper';

export const Login = styled.View`
  flex: 1;
`;

export const LoginInner = styled.View`
  flex: 1 0 84%;
`;

export const LoginHeader = styled.View`
  align-items: center;
  flex: 1 0 16%;
  justify-content: center;
  justify-content: flex-end;
`;

export const LoginText = styled(Text).attrs({
  variant: 'titleMedium',
})<any>`
  margin-bottom: 4%;
  max-width: 300px;
  text-align: center
    ${(props: any) => props.error && `color: ${props.theme.colors.error};`};
`;

export const LoginPIN = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1 0 84%;
`;
