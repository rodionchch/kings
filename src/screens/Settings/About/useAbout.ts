import {VERSION} from '@env';

const useAbout = () => {
  const about = [
    {
      title: `Version: ${VERSION}`,
    },
  ];

  return {about};
};

export default useAbout;
