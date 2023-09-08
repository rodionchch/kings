import React, {useState} from 'react';
import {Appbar, Menu} from 'react-native-paper';
import {getHeaderTitle} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import Clipboard from '@react-native-clipboard/clipboard';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

import {smartCutBySymbols} from 'utils/smartCut';
import routes from 'constants/routes';
import NavigationType from 'types/NavigationType';
import {getConversationAccount} from 'utils/getAccount';
import {useAppSelector} from 'store/hooks';
import FolderCode from 'constants/FolderCode';

import * as menu from 'screens/Sms/menu';

import * as s from './styles';

export const getAppBarSms = (
  props: BottomTabHeaderProps | NativeStackHeaderProps | NavigationType,
) => <AppBarSms {...props} />;

import inject from 'container';
import {SmsService} from 'services/sms.service';

const smsService = inject<SmsService>(SmsService.name);

const AppBarSms = ({
  navigation,
  route,
  options,
  back,
}: BottomTabHeaderProps | NativeStackHeaderProps | NavigationType) => {
  const {params} = route;
  const {navigate, goBack} = useNavigation<NavigationType>();
  const {sims} = useAppSelector(({app}) => app);
  const title = getHeaderTitle(options, route.name);
  const [visible, setVisible] = useState(false);

  const getTitle = () => {
    return params?.name || title;
  };

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const onPressMenu = ({code: eventCode}: {code: string}) => {
    closeMenu();

    if (eventCode === 'copy') {
      Clipboard.setString(params?.oneMessage?.text);
    }
    if (params?.folderCode !== FolderCode.INBOX_AND_SENT) {
      smsService.setSmsEvent({
        phone: params?.to?.number || params?.to?.name,
        messageId: params?.id,
        eventCode,
      });
    } else {
      smsService.setSmsConversationEventSet({
        phone: getConversationAccount(params?.from, params?.to)?.phone,
        eventCode,
        conversationAccount: getConversationAccount(params?.from, params?.to)
          ?.conversationAccount,
        conversationName: getConversationAccount(params?.from, params?.to)
          ?.conversationName,
      });
    }

    if (eventCode === FolderCode.TRASH || eventCode === 'delete') {
      goBack();
    }
  };

  return (
    <>
      <s.AppBarSms mode="center-aligned">
        {back && <s.AppBarSmsBack onPress={navigation.goBack} />}
        {route.name === routes.SmsChat &&
          params?.folderCode &&
          params?.folderCode !== FolderCode.INBOX_AND_SENT && (
            <s.AppbarAction icon={undefined} />
          )}
        <s.AppBarSmsContent>
          <s.AppBarSmsTitle>
            {smartCutBySymbols(getTitle(), 20)}
          </s.AppBarSmsTitle>
          {params?.subtitle && (
            <s.AppBarSmsSubTitle>
              {smartCutBySymbols(params?.subtitle, 36)}
            </s.AppBarSmsSubTitle>
          )}
        </s.AppBarSmsContent>

        {route.name === routes.SmsList ? (
          <s.AppbarAction
            icon="plus"
            disabled={
              params?.phone &&
              !sims?.find(sim => sim?.number === params?.phone)?.permissions
                ?.compose
            }
            onPress={() => {
              if (route.name === routes.SmsList) {
                navigate(routes.SmsChat, {...params, folderCode: undefined});
              }
            }}
          />
        ) : route.name === routes.SmsChat && params?.folderCode ? (
          <>
            {params?.folderCode !== FolderCode.INBOX_AND_SENT && (
              <s.AppbarAction
                icon={'comment-text-outline'}
                onPress={() => {
                  navigate(routes.Comments, {
                    messageId: params?.id,
                    phone: params?.to?.readable
                      ? params?.to?.number
                      : params?.from?.number,
                  });
                }}
              />
            )}

            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <Appbar.Action icon="dots-vertical" onPress={openMenu} />
              }>
              {menu?.[
                params?.folderCode === FolderCode.INBOX_AND_SENT
                  ? 'conversations'
                  : params?.folderCode
              ]?.map(({code, icon, title}) => (
                <Menu.Item
                  key={code}
                  onPress={() => onPressMenu({code})}
                  leadingIcon={icon}
                  title={title}
                />
              ))}
            </Menu>
          </>
        ) : (
          <s.AppbarAction icon={undefined} />
        )}
      </s.AppBarSms>
    </>
  );
};

export default AppBarSms;
