import styled from 'styled-components/native';
import {Button} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

import heart from 'assets/icons/heart.png';
import price from 'assets/icons/price.png';
import heartActive from 'assets/icons/heart-active.png';

import lamborghini from 'assets/logos/lamborghini.png';
import rr from 'assets/logos/rr.png';
import mclaren from 'assets/logos/mclaren.png';
import porshe from 'assets/logos/porshe.png';
import mers from 'assets/logos/mers.png';
import bmw from 'assets/logos/bmw.png';
import loadrover from 'assets/logos/loadrover.png';
import audi from 'assets/logos/audi.png';
import ferrari from 'assets/logos/ferrari.png';
import chevrolet from 'assets/logos/chevrolet.png';

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

export const OpenLogo = styled.Image.attrs(({brand}) => {
  obj = {
    source: null,
  };

  if (brand === 'rr') {
    obj.source = rr;
  }

  if (brand === 'mclaren') {
    obj.source = mclaren;
  }

  if (brand === 'lamborghini') {
    obj.source = lamborghini;
  }

  if (brand === 'porshe') {
    obj.source = porshe;
  }

  if (brand === 'mers') {
    obj.source = mers;
  }

  if (brand === 'bmw') {
    obj.source = bmw;
  }

  if (brand === 'loadrover') {
    obj.source = loadrover;
  }

  if (brand === 'audi') {
    obj.source = audi;
  }

  if (brand === 'ferrari') {
    obj.source = ferrari;
  }

  if (brand === 'chevrolet') {
    obj.source = chevrolet;
  }

  return obj;
})`
  width: 40px;
  height: 46px;
  margin-right: 16px;

  ${props =>
    props.brand === 'rr' &&
    `
    width: 36px;
    height: 59px
  `}
  ${props =>
    props.brand === 'audi' &&
    `
    width: 48px;
    height: 29px
  `}
  ${props =>
    props.brand === 'bmw' &&
    `
    width: 45px;
    height: 45px
  `}
  ${props =>
    props.brand === 'lamborghini' &&
    `
    width: 41px;
    height: 47px
  `}
  ${props =>
    props.brand === 'loadrover' &&
    `
    width: 54px;
    height: 28px
  `}
  ${props =>
    props.brand === 'mclaren' &&
    `
    width: 76px;
    height: 10px
  `}
  ${props =>
    props.brand === 'mers' &&
    `
    width: 47px;
    height: 47px
  `}
  ${props =>
    props.brand === 'porshe' &&
    `
    width: 36px;
    height: 47px
  `}
  ${props =>
    props.brand === 'ferrari' &&
    `
    width: 30px;
    height: 46px
  `}
  ${props =>
    props.brand === 'chevrolet' &&
    `
    width: 55px;
    height: 24px
  `}
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
