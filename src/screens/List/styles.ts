import {LinearGradient} from 'expo-linear-gradient';
import styled from 'styled-components/native';

import price from 'assets/icons/price.png';
import heart from 'assets/icons/heart.png';
import heartActive from 'assets/icons/heart-active.png';

export const List = styled.FlatList`
  padding: 0 12px;
  padding-top: 30px;
`;

export const ListItem = styled.TouchableOpacity`
  margin-bottom: 40px;
  flex-direction: row;
`;

export const ListItemImage = styled.Image`
  width: 160px;
  height: 160px;
  background: #ccc;
  border-radius: 6px;
  background: #d9d9d9;
`;

export const ListItemContent = styled.View`
  padding: 8px 0;
  padding-left: 18px;
`;

export const ListItemTitle = styled.Text`
  color: #fff;
  font-weight: 800;
  font-size: 22px;
`;

export const ListItemSubTitle = styled.Text`
  color: #fff;
  margin-bottom: 12px;
  font-size: 15px;
  font-weight: 200;
`;

export const ListItemPrice = styled.View`
  font-size: 14px;
  font-weight: 500;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const ListItemPriceText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  padding-left: 8px;
`;

export const ListItemPriceIcon = styled.Image.attrs({
  source: price,
})`
  width: 18px;
  height: 18px;
`;

export const ListItemTags = styled.Text`
  color: #676767;
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 20px;
`;

export const Plug = styled.View`
  height: 124px;
`;

export const ListItemSave = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const ListItemSaveIcon = styled.Image.attrs((props: any) => ({
  source: props.active ? heartActive : heart,
}))`
  width: 17px;
  height: 16px;
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
