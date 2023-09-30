import styled from 'styled-components/native';
import {ScrollView} from 'react-native-gesture-handler';

export const Search = styled(ScrollView)`
  padding: 0 12px;
`;

export const SearchInput = styled.TextInput`
  height: 36px;
  border-radius: 12px;
  background: #292929;
  padding: 12px;
  color: #fff;
`;
