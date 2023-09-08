import AsyncStorage from '@react-native-async-storage/async-storage';

export const getProfileStorage = async () => {
  const profile = await AsyncStorage.getItem('profile');

  return profile;
};

export const setProfileStorage = async (p: string) => {
  const profile = await AsyncStorage.setItem('profile', p);

  return profile;
};

export const removeProfileStorage = async () => {
  const profile = await AsyncStorage.removeItem('profile');

  return profile;
};
