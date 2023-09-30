import React from 'react';
import {useNavigation} from '@react-navigation/native';
import routes from 'constants/routes';
import * as s from './styles';

const Order = () => {
  const {navigate} = useNavigation();

  return (
    <s.Order>
      <s.OrderHeader>
        <s.OrderTitle>Porsche</s.OrderTitle>
        <s.OrderSubTitle>911 Turbo S</s.OrderSubTitle>
      </s.OrderHeader>
      <s.OrderKeyboardAvoidingView>
        <s.OrderItem>
          <s.OrderItemLabel>City</s.OrderItemLabel>
          <s.OrderItemInput />
        </s.OrderItem>
        <s.OrderItem>
          <s.OrderItemLabel>Location</s.OrderItemLabel>
          <s.OrderItemInput />
        </s.OrderItem>
        <s.OrderItem>
          <s.OrderItemLabel>Time</s.OrderItemLabel>
          <s.OrderItemInput />
        </s.OrderItem>
        <s.OrderItem>
          <s.OrderItemLabel>Date</s.OrderItemLabel>
          <s.OrderItemInput />
        </s.OrderItem>
        <s.OrderItem>
          <s.OrderItemLabel>Period</s.OrderItemLabel>
          <s.OrderItemInput />
        </s.OrderItem>
        <s.OrderItem>
          <s.OrderItemLabel>Promocode</s.OrderItemLabel>
          <s.OrderItemInput />
        </s.OrderItem>

        <s.OrderButton
          onPress={() => {
            navigate(routes.Done);
          }}>
          Order now
        </s.OrderButton>
      </s.OrderKeyboardAvoidingView>
    </s.Order>
  );
};

export default Order;
