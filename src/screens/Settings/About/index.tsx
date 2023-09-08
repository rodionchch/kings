import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import List from 'components/List';
import useAbout from './useAbout';
import {Text} from 'react-native-paper';

import * as s from './styles';
import Logo from 'components/Logo';

const About = () => {
  const {about} = useAbout();

  return (
    <s.About>
      <s.AboutInner>
        <Logo />
        <s.AboutText>
          History Vision is a specialized system designed for use by clients of
          history group.
        </s.AboutText>
        <s.AboutVersion variant="bodyLarge">{about[0]?.title}</s.AboutVersion>
      </s.AboutInner>
    </s.About>
  );
};

export default About;
