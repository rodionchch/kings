import {useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from 'store/hooks';

import NavigationType from 'types/NavigationType';
import routes from 'constants/routes';

const useSettings = () => {
  const {navigate} = useNavigation<NavigationType>();
  const {profile} = useAppSelector(({app}) => app);

  const books = useMemo(
    () => [
      {
        route: routes.PhoneBook,
        title: 'Phone Book',
        icon: 'book-edit-outline',
      },
      {
        route: routes.MailBook,
        title: 'Mail Book',
        icon: 'email-edit-outline',
      },
    ],
    [],
  );

  const settings = useMemo(
    () => [
      {
        title: 'Profile',
        icon: 'account',
      },
      {
        title: 'Security',
        icon: 'security',
      },
      {
        title: 'Theme',
        icon: 'white-balance-sunny',
      },
      {
        title: 'Language',
        icon: 'alpha-a-box-outline',
      },
      {
        title: 'About',
        icon: 'information-outline',
      },
    ],
    [],
  );
  return {navigate, profile, books, settings};
};

export default useSettings;
