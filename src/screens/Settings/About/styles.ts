import styled from 'styled-components/native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';

export const About = styled(ScrollView)``;

export const AboutInner = styled.View`
  padding: 48px 12px 0;
  align-items: center;
`;

export const AboutText = styled(Text).attrs({
  variant: 'bodyMedium',
})`
  margin: 48px 0 72px;
  text-align: center;
  max-width: 240;
`;

export const AboutVersion = styled(Text).attrs({
  variant: 'bodyMedium',
})`
  text-align: center;
`;
