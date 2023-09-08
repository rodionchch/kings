import {useEffect, useState} from 'react';
import {Switch} from '.';
import {useNavigation} from '@react-navigation/native';

import {getFaceIdEnabled, setFaceIdEnabled} from 'utils/faceId';
import NavigationType from 'types/NavigationType';
import routes from 'constants/routes';

const useSecurity = () => {
  const [switchValue, setSwitchValue] = useState(true);
  const {navigate} = useNavigation<NavigationType>();

  useEffect(() => {
    getFaceIdEnabled().then(faceId => {
      setSwitchValue(faceId === true.toString());
    });
  }, []);

  const onChangeFaceId = (faceId: boolean) => {
    setFaceIdEnabled(faceId).then(() => {
      setSwitchValue(faceId.toString() === true.toString());
    });
  };

  const security = [
    {
      title: 'Real PIN',
      route: routes.ChangePIN,
    },
    {
      title: 'Fake PIN',
      route: routes.ChangeFakePIN,
    },
    {
      title: 'Face ID',
      right: Switch({
        value: switchValue,
        onChange: () => {
          onChangeFaceId(!switchValue);
        },
      }),
    },
  ];

  return {security, navigate};
};

export default useSecurity;
