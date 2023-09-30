import { Button } from 'react-native-paper';
import styled from 'styled-components/native';

export const Order = styled.ScrollView`
  padding: 0 12px;
  padding-top: 30px;
`;

export const OrderHeader = styled.View`
  margin-bottom: 48px;
`;

export const OrderTitle = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: 800;
`;

export const OrderSubTitle = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: 200;
`;

export const OrderItem = styled.View`
  border-radius: 7px;
  background: #1e1e1e;
  height: 50px;
  align-items: center;
  flex-direction: row;
  padding: 0 25px;
  margin-bottom: 12px;
`;

export const OrderItemLabel = styled.Text`
  color: #676767;
  font-size: 16px;
  font-weight: 300;
  margin-right: 12px;
`;

export const OrderKeyboardAvoidingView = styled.KeyboardAvoidingView.attrs(
  () => ({
    behavior: 'padding',
    keyboardVerticalOffset: 162,
  }),
)<any>`
  flex: 1;
`;

export const OrderItemInput = styled.TextInput`
  flex: 1;
  color: #fff;
`;

export const OrderButton = styled(Button).attrs({
  mode: 'contained',
  contentStyle: {
    height: 50,
  },
  labelStyle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 800,
  },
})`
  border-radius: 7px;
  background: #0578ff;
  margin-bottom: 140px;
`;
