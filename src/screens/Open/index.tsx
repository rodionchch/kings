import React from 'react';
import {useRoute} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {setSaved} from 'store/appSlice';

import * as s from './styles';

const Open = () => {
  const dispatch = useAppDispatch();
  const {saved} = useAppSelector(({app}) => app);
  const {params} = useRoute();

  const onSave = item => {
    dispatch(setSaved(item));
  };

  console.log('route=====>', params);

  return (
    <s.Open>
      <s.OpenHeader>
        <s.OpenMainImage />
        <s.OpenImages>
          <s.OpenImage />
          <s.OpenImage second />
        </s.OpenImages>
        <s.OpenHeaderInner>
          <s.OpenLogo />
          <s.OpenHeaderTitleWrapper>
            <s.OpenHeaderTitle>{params?.title}</s.OpenHeaderTitle>
            <s.OpenHeaderTitleSubtitle>
              {params?.subtitle}
            </s.OpenHeaderTitleSubtitle>
          </s.OpenHeaderTitleWrapper>

          <s.OpenSave
            onPress={() => {
              onSave(params);
            }}>
            <s.OpenSaveIcon active={saved.find(el => el.id === params.id)} />
          </s.OpenSave>
        </s.OpenHeaderInner>
      </s.OpenHeader>
      <s.OpenTags>#cabrio #sportscar #lambo</s.OpenTags>
      <s.OpenDescription>
        Engine: Petrol {'\n'}
        Engine volume: 6498 cc {'\n'}
        Max. speed: 320 km/h {'\n'}
        Transmission: Robotic 7 {'\n'}
        0–100 km/h: 3 seconds {'\n'}
        Power: 700 HP
      </s.OpenDescription>
      <s.OpenPrice>
        <s.OpenPriceIcon />
        <s.OpenPriceText>{params?.price}</s.OpenPriceText>
      </s.OpenPrice>

      <s.OpenButton onPress={() => {}}>Book now</s.OpenButton>
    </s.Open>
  );
};

export default Open;
