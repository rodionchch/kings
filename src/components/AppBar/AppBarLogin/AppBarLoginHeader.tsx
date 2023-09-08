import React, {useRef} from 'react';
import {Keyboard, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import NavigationType from 'types/NavigationType';
import routes from 'constants/routes';
import {isSmallScreen} from 'constants/Platform';
import useRotate from 'hooks/useRotate';

import Logo from 'components/Logo';

import * as s from './styles';

type AppBarLoginHeaderProps = {
  setShowDevMode?: (showDevMode: boolean) => void;
};

const AppBarLoginHeader: React.FC<AppBarLoginHeaderProps> = ({
  setShowDevMode,
}) => {
  const route = useRoute<NavigationType>();

  const {landscape} = useRotate();

  const devModeCounter = useRef(0);

  const onDevModeCounter = () => {
    devModeCounter.current += 1;

    if (devModeCounter.current === 10) {
      devModeCounter.current = 0;
      setShowDevMode?.(true);
    }
  };

  const onDevModeResetCounter = () => {
    devModeCounter.current = 0;
  };

  return (
    <s.AppBarLoginHeader small={isSmallScreen || landscape}>
      <s.AppBarLoginHeaderTouchable
        onPress={() => {
          Keyboard.dismiss();
          onDevModeResetCounter();
        }}>
        <s.AppBarLoginHeaderInner>
          <s.AppBarLoginHeaderLogo
            onPress={() => {
              if (route?.name === routes.Login) {
                Keyboard.dismiss();
                onDevModeCounter();
              }
            }}>
            <View>
              <Logo small={isSmallScreen || landscape} />
            </View>
          </s.AppBarLoginHeaderLogo>
        </s.AppBarLoginHeaderInner>
      </s.AppBarLoginHeaderTouchable>
    </s.AppBarLoginHeader>
  );
};

export default AppBarLoginHeader;
