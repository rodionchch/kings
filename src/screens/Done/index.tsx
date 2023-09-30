import React from 'react';
import {useNavigation} from '@react-navigation/native';
import routes from 'constants/routes';
import * as s from './styles';

const Done = () => {
  const {navigate} = useNavigation();

  return (
    <s.Done>
      <s.DoneLogo />
      <s.DoneTitle>Done!</s.DoneTitle>
      <s.DoneText>
        You’re all set! {'\n'}Our manager will contact you soon.
      </s.DoneText>
      <s.DoneButtons>
        <s.DoneButton
          green
          onPress={() => {
            navigate(routes.Dashboard);
          }}>
          Call
        </s.DoneButton>
        <s.DoneButton
          onPress={() => {
            navigate(routes.Dashboard);
          }}>
          Chat
        </s.DoneButton>
      </s.DoneButtons>
    </s.Done>
  );
};

export default Done;
