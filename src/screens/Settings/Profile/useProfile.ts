import {useAppSelector} from 'store/hooks';

const useProfile = () => {
  const {profile} = useAppSelector(({app}) => app);

  const profileList = [
    {
      title: 'First Name',
      text: profile?.firstName,
    },
    {
      title: 'Last Name',
      text: profile?.lastName,
    },
  ];

  return {profileList};
};

export default useProfile;
