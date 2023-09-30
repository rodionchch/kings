import styled from 'styled-components/native';
import {ScrollView} from 'react-native-gesture-handler';

import audi from 'assets/logos/audi.png';
import bmw from 'assets/logos/bmw.png';
import lamborghini from 'assets/logos/lamborghini.png';
import loadrover from 'assets/logos/loadrover.png';
import mclaren from 'assets/logos/mclaren.png';
import mers from 'assets/logos/mers.png';
import porshe from 'assets/logos/porshe.png';
import rr from 'assets/logos/rr.png';
import {LinearGradient} from 'expo-linear-gradient';

export const Search = styled(ScrollView)`
  padding: 0 12px;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: '#676767',
})`
  height: 36px;
  border-radius: 12px;
  background: #292929;
  padding: 12px;
  color: #fff;
`;

export const SearchList = styled.ScrollView`
  padding-top: 44px;
  margin-bottom: 60px;
  ,
`;

export const SearchListItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;

export const SearchListItemImageWrapper = styled.View`
  width: 80px;
  height: 59px;
  margin-right: 26px;
  align-items: center;
  justify-content: center;
`;

export const SearchListItemImage = styled.Image.attrs(props => {
  const obj = {};
  if (props.rr) {
    obj.source = rr;
  }
  if (props.audi) {
    obj.source = audi;
  }
  if (props.bmw) {
    obj.source = bmw;
  }
  if (props.lamborghini) {
    obj.source = lamborghini;
  }
  if (props.loadrover) {
    obj.source = loadrover;
  }
  if (props.mclaren) {
    obj.source = mclaren;
  }
  if (props.mers) {
    obj.source = mers;
  }
  if (props.porshe) {
    obj.source = porshe;
  }

  return obj;
})`
  ${props =>
    props.rr &&
    `
    width: 36px;
    height: 59px
  `}
  ${props =>
    props.audi &&
    `
    width: 48px;
    height: 29px
  `}
  ${props =>
    props.bmw &&
    `
    width: 45px;
    height: 45px
  `}
  ${props =>
    props.lamborghini &&
    `
    width: 41px;
    height: 47px
  `}
  ${props =>
    props.loadrover &&
    `
    width: 54px;
    height: 28px
  `}
  ${props =>
    props.mclaren &&
    `
    width: 76px;
    height: 10px
  `}
  ${props =>
    props.mers &&
    `
    width: 47px;
    height: 47px
  `}
  ${props =>
    props.porshe &&
    `
    width: 36px;
    height: 59px
  `}
`;

export const SearchListItemTitle = styled.Text`
  color: #676767;
  font-size: 14px;
  font-weight: 300;
  line-height: normal;
`;

export const BottomNavigationGradient = styled(LinearGradient).attrs({
  colors: [
    'rgba(0, 0, 0, 0)',
    'rgba(0, 0, 0, 0.6) 56%',
    'rgba(0, 0, 0, 0.9) 100%)',
  ],
})`
  height: 86px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
`;
