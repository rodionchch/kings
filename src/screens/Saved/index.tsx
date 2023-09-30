import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {setSaved} from 'store/appSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';

import * as s from './styles';
import routes from 'constants/routes';

const Saved = () => {
  const dispatch = useAppDispatch();
  const {saved} = useAppSelector(({app}) => app);
  const {navigate} = useNavigation();

  const onSave = item => {
    dispatch(setSaved(item));
  };

  return (
    <>
      <s.Saved
        data={saved}
        renderItem={({item, index}) => {
          return (
            <>
              <s.SavedItem
                onPress={() => {
                  navigate(routes.Open, {
                    ...item,
                  });
                }}>
                <s.SavedItemImage source={{uri: item?.images?.[0]}} />
                <s.SavedItemWrapper>
                  <s.SavedItemContent>
                    <s.SavedItemTitle>{item?.title}</s.SavedItemTitle>
                    <s.SavedItemSubTitle>{item?.subtitle}</s.SavedItemSubTitle>
                    <s.SavedItemPrice>
                      <s.SavedItemPriceIcon />
                      <s.SavedItemPriceText>5500 AED</s.SavedItemPriceText>
                    </s.SavedItemPrice>

                    <s.SavedItemTags>#cabrio #sportscar #lambo</s.SavedItemTags>
                  </s.SavedItemContent>

                  <s.SavedItemSave
                    onPress={() => {
                      onSave(item);
                    }}>
                    <s.SavedItemSaveIcon
                      active={saved.find(el => el.id === item.id)}
                    />
                  </s.SavedItemSave>
                </s.SavedItemWrapper>
              </s.SavedItem>
              {index === saved?.length - 1 && <s.Plug />}
            </>
          );
        }}
        keyExtractor={item => item.id}
      />

      <s.BottomNavigationGradient />
    </>
  );
};

export default Saved;
