import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {setSaved} from 'store/appSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';

import data from './data';
import * as s from './styles';
import routes from 'constants/routes';

const List = () => {
  const dispatch = useAppDispatch();
  const {saved} = useAppSelector(({app}) => app);
  const {navigate} = useNavigation();

  const onSave = item => {
    dispatch(setSaved(item));
  };

  return (
    <>
      <s.List
        data={data}
        renderItem={({item, index}) => {
          return (
            <>
              <s.ListItem
                onPress={() => {
                  navigate(routes.Open, {
                    ...item,
                  });
                }}>
                <s.ListItemImage
                  source={item?.preview ? {uri: item?.preview} : undefined}
                />
                <s.ListItemContent>
                  <s.ListItemTitle>{item?.title}</s.ListItemTitle>
                  <s.ListItemSubTitle>{item?.subtitle}</s.ListItemSubTitle>
                  <s.ListItemPrice>
                    <s.ListItemPriceIcon />
                    <s.ListItemPriceText>5500 AED</s.ListItemPriceText>
                  </s.ListItemPrice>

                  <s.ListItemTags>#cabrio #sportscar #lambo</s.ListItemTags>

                  <s.ListItemSave
                    onPress={() => {
                      onSave(item);
                    }}>
                    <s.ListItemSaveIcon
                      active={saved.find(el => el.id === item.id)}
                    />
                  </s.ListItemSave>
                </s.ListItemContent>
              </s.ListItem>
              {index === data?.length - 1 && <s.Plug />}
            </>
          );
        }}
        keyExtractor={item => item.id}
      />
      <s.BottomNavigationGradient />
    </>
  );
};

export default List;
