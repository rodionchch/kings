import styled from 'styled-components/native';
import {BottomNavigation as PaperBottomNavigation} from 'react-native-paper';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import house from 'assets/icons/house.png';
import houseActive from 'assets/icons/house-active.png';
import search from 'assets/icons/search.png';
import searchActive from 'assets/icons/search-active.png';
import saved from 'assets/icons/saved.png';
import savedActive from 'assets/icons/saved-active.png';
import profile from 'assets/icons/profile.png';
import profileActive from 'assets/icons/profile-active.png';

export const BottomNavigation = styled(PaperBottomNavigation).attrs({
  barStyle: {
    maxHeight: 86,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
    zIndex: 100,
  },
  activeColor: '#fff',
})``;

export const BottomNavigationButton = styled.View`
  flex: 1;
`;

export const BottomNavigationTouchable = styled(TouchableWithoutFeedback)`
  ${(props: any) => props.disabled && `opacity: 0.3;`}
`;

export const BottomNavigationIcon = styled.Image.attrs((props: any) => {
  const obj = {
    source: null,
  };
  if (props.icon === 'list') {
    if (props.icon === 'list' && props.active) {
      obj.source = houseActive;
    } else {
      obj.source = house;
    }
  } else if (props.icon === 'saved') {
    if (props.icon === 'saved' && props.active) {
      obj.source = savedActive;
    } else {
      obj.source = saved;
    }
  } else if (props.icon === 'search') {
    if (props.icon === 'search' && props.active) {
      obj.source = searchActive;
    } else {
      obj.source = search;
    }
  } else if (props.icon === 'profile') {
    if (props.icon === 'profile' && props.active) {
      obj.source = profileActive;
    } else {
      obj.source = profile;
    }
  }

  return obj;
})`
  width: 20px;
  height: 20px;
  ${(props: any) =>
    props.icon === 'list' &&
    `
    width: 30px;
    height: 26px;
  `}
  ${(props: any) =>
    props.icon === 'saved' &&
    `
    width: 26px;
    height: 25px;
  `}
  ${(props: any) =>
    props.icon === 'search' &&
    `
    width: 24px;
    height: 24px;
  `}
  ${(props: any) =>
    props.icon === 'profile' &&
    `
    width: 23px;
    height: 24px;
  `}
`;
