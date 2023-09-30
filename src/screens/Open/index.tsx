import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {setSaved} from 'store/appSlice';

import * as s from './styles';
import routes from 'constants/routes';

const Open = () => {
  const dispatch = useAppDispatch();
  const {saved} = useAppSelector(({app}) => app);
  const {params} = useRoute();
  const {navigate} = useNavigation();

  const onSave = item => {
    dispatch(setSaved(item));
  };

  return (
    <s.Open>
      <s.OpenHeader>
        <s.OpenMainImage source={{uri: params?.images?.[0]}} />
        <s.OpenImages>
          {params?.images
            ?.filter((el, index) => index !== 0)
            ?.map((el, index) => (
              <s.OpenImage
                source={{uri: el}}
                second={index === params?.images?.length - 2}
              />
            ))}
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
        Engine: {params?.specifications?.engine} {'\n'}
        Engine volume: {params?.specifications?.engineVolume} {'\n'}
        Max. speed: {params?.specifications?.maxSpeed} {'\n'}
        Transmission: {params?.specifications?.transmission} {'\n'}
        0–100 km/h: {params?.specifications?.zeroToHundred} {'\n'}
        Power: {params?.specifications?.power}
      </s.OpenDescription>
      <s.OpenPrice>
        <s.OpenPriceIcon />
        <s.OpenPriceText>{params?.price}</s.OpenPriceText>
      </s.OpenPrice>

      <s.OpenButton
        onPress={() => {
          navigate(routes.Order);
        }}>
        Book now
      </s.OpenButton>
    </s.Open>
  );
};

export default Open;
