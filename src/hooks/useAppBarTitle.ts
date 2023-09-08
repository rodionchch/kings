import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigationType from 'types/NavigationType';

const useAppBarTitle = (name: string, subtitle?: string | null) => {
  const {setParams} = useNavigation<NavigationType>();

  useEffect(() => {
    setParams({name, subtitle});
  }, [name, setParams, subtitle]);
};

export default useAppBarTitle;
