import styled from 'styled-components/native';

import price from 'assets/icons/price.png';
import heart from 'assets/icons/heart.png';
import heartActive from 'assets/icons/heart-active.png';
import { LinearGradient } from 'expo-linear-gradient';

export const Saved = styled.FlatList`
  padding: 0 12px;
  padding-top: 30px;
`;

export const SavedItem = styled.TouchableOpacity`
  margin-bottom: 40px;
  margin-bottom: 32px;
`;

export const SavedItemImage = styled.Image`
  width: 100%;
  height: 190px;
  background: #ccc;
  border-radius: 6px;
  background: #d9d9d9;
  margin-bottom: 16px;
`;

export const SavedItemContent = styled.View``;

export const SavedItemWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SavedItemTitle = styled.Text`
  color: #fff;
  font-weight: 800;
  font-size: 22px;
`;

export const SavedItemSubTitle = styled.Text`
  color: #fff;
  margin-bottom: 12px;
  font-size: 15px;
  font-weight: 200;
`;

export const SavedItemPrice = styled.View`
  font-size: 14px;
  font-weight: 500;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const SavedItemPriceText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  padding-left: 8px;
`;

export const SavedItemPriceIcon = styled.Image.attrs({
  source: price,
})`
  width: 18px;
  height: 18px;
`;

export const SavedItemTags = styled.Text`
  color: #676767;
  font-size: 12px;
  font-weight: 300;
`;

export const Plug = styled.View`
  height: 124px;
`;

export const SavedItemSave = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const SavedItemSaveIcon = styled.Image.attrs((props: any) => ({
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
