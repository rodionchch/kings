import React from 'react';
import {useNavigation} from '@react-navigation/native';
import routes from 'constants/routes';
import * as s from './styles';
import data from 'screens/List/data';

const Search = () => {
  const {navigate} = useNavigation();

  const onPress = () => {
    navigate(routes.Open, {
      ...data[0],
    });
  };

  return (
    <>
      <s.Search>
        <s.SearchInput placeholder="Search" />
        <s.SearchList>
          <s.SearchListItem onPress={onPress}>
            <s.SearchListItemImageWrapper>
              <s.SearchListItemImage rr />
            </s.SearchListItemImageWrapper>
            <s.SearchListItemTitle>Rolls-Royce</s.SearchListItemTitle>
          </s.SearchListItem>
          <s.SearchListItem onPress={onPress}>
            <s.SearchListItemImageWrapper>
              <s.SearchListItemImage mclaren />
            </s.SearchListItemImageWrapper>
            <s.SearchListItemTitle>McLaren</s.SearchListItemTitle>
          </s.SearchListItem>
          <s.SearchListItem onPress={onPress}>
            <s.SearchListItemImageWrapper>
              <s.SearchListItemImage lamborghini />
            </s.SearchListItemImageWrapper>
            <s.SearchListItemTitle>Lamborghini</s.SearchListItemTitle>
          </s.SearchListItem>
          <s.SearchListItem onPress={onPress}>
            <s.SearchListItemImageWrapper>
              <s.SearchListItemImage porshe />
            </s.SearchListItemImageWrapper>
            <s.SearchListItemTitle>Porsche</s.SearchListItemTitle>
          </s.SearchListItem>
          <s.SearchListItem onPress={onPress}>
            <s.SearchListItemImageWrapper>
              <s.SearchListItemImage mers />
            </s.SearchListItemImageWrapper>
            <s.SearchListItemTitle>Mercedez-Benz</s.SearchListItemTitle>
          </s.SearchListItem>
          <s.SearchListItem onPress={onPress}>
            <s.SearchListItemImageWrapper>
              <s.SearchListItemImage bmw />
            </s.SearchListItemImageWrapper>
            <s.SearchListItemTitle>BMW</s.SearchListItemTitle>
          </s.SearchListItem>
          <s.SearchListItem onPress={onPress}>
            <s.SearchListItemImageWrapper>
              <s.SearchListItemImage loadrover />
            </s.SearchListItemImageWrapper>
            <s.SearchListItemTitle>Land Rover</s.SearchListItemTitle>
          </s.SearchListItem>
          <s.SearchListItem onPress={onPress}>
            <s.SearchListItemImageWrapper>
              <s.SearchListItemImage audi />
            </s.SearchListItemImageWrapper>
            <s.SearchListItemTitle>Audi</s.SearchListItemTitle>
          </s.SearchListItem>
        </s.SearchList>
      </s.Search>

      <s.BottomNavigationGradient />
    </>
  );
};

export default Search;
