import styled from 'styled-components/native';
import {ScrollView} from 'react-native-gesture-handler';

import heart from 'assets/icons/heart.png';
import price from 'assets/icons/price.png';
import heartActive from 'assets/icons/heart-active.png';

import lamborghini from 'assets/logos/lamborghini.png';
import {Button} from 'react-native-paper';

export const Open = styled(ScrollView)`
  padding: 0 12px;
`;

export const OpenHeader = styled.View`
  margin-bottom: 12px;
`;

export const OpenMainImage = styled.Image`
  height: 190px;
  border-radius: 6px;
  background: #d9d9d9;
  margin-bottom: 9px;
`;
export const OpenImages = styled.View`
  flex-direction: row;
`;

export const OpenImage = styled.Image`
  height: 130px;
  border-radius: 6px;
  background: #d9d9d9;
  margin-bottom: 22px;
  flex: 1;
  margin-right: 10px;
  ${(props: any) =>
    props.second &&
    `
    margin-right: 0;
  `}
`;

export const OpenHeaderInner = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const OpenLogo = styled.Image.attrs({
  source: lamborghini,
})`
  width: 40px;
  height: 46px;
  margin-right: 16px;
`;

export const OpenHeaderTitleWrapper = styled.View`
  flex: 1;
`;

export const OpenHeaderTitle = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: 800;
`;

export const OpenHeaderTitleSubtitle = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: 200;
`;

export const OpenSave = styled.TouchableOpacity`
  width: 30px;
  height: 28px;
`;

export const OpenSaveIcon = styled.Image.attrs((props: any) => ({
  source: props.active ? heartActive : heart,
}))`
  width: 30px;
  height: 28px;
`;

export const OpenTags = styled.Text`
  color: #676767;
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 12px;
`;

export const OpenDescription = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 16px;
`;

export const OpenPrice = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 22px;
`;

export const OpenPriceText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  padding-left: 6px;
`;

export const OpenPriceIcon = styled.Image.attrs({
  source: price,
})`
  width: 18px;
  height: 18px;
`;

export const OpenButton = styled(Button).attrs({
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
`;
