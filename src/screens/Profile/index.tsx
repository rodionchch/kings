import React from 'react';
import * as s from './styles';

const Profile = () => {
  return (
    <>
      <s.Profile>
        <s.ProfileHeader>
          <s.ProfileAvatar />
          <s.ProfileHeaderContent>
            <s.ProfileHeaderName>Denys {'\n'}Petrushov</s.ProfileHeaderName>
            <s.ProfileHeaderUsername>denys_petrushov</s.ProfileHeaderUsername>
          </s.ProfileHeaderContent>
        </s.ProfileHeader>

        <s.ProfileContent>
          <s.ProfileContentItem>
            <s.ProfileContentLabel>Profile info</s.ProfileContentLabel>
            <s.ProfileContentIcon />
          </s.ProfileContentItem>
          <s.ProfileContentItem>
            <s.ProfileContentLabel>Security</s.ProfileContentLabel>
            <s.ProfileContentIcon />
          </s.ProfileContentItem>
          <s.ProfileContentItem>
            <s.ProfileContentLabel>
              Vehicle rental agreement
            </s.ProfileContentLabel>
            <s.ProfileContentIcon />
          </s.ProfileContentItem>
          <s.ProfileContentItem>
            <s.ProfileContentLabel>About</s.ProfileContentLabel>
            <s.ProfileContentIcon />
          </s.ProfileContentItem>
          <s.ProfileContentItem>
            <s.ProfileContentLabel>History</s.ProfileContentLabel>
            <s.ProfileContentIcon />
          </s.ProfileContentItem>
        </s.ProfileContent>
        <s.ProfileButton onPress={() => {}}>Log out</s.ProfileButton>
      </s.Profile>
      <s.BottomNavigationGradient />
    </>
  );
};

export default Profile;
