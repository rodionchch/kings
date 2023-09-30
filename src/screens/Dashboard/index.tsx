import React from 'react';

import useDashboard from './useDashboard';

import * as s from './styles';

const Dashboard = () => {
  const {index, setIndex, routes, renderScene, onSetDashboard} = useDashboard();

  return (
    <>
      <s.BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        getLabelText={() => null}
        renderIcon={({focused, route}) => {
          return <s.BottomNavigationIcon icon={route?.key} active={focused} />;
        }}
        renderTouchable={({route, onPress, children}: any) => {
          return (
            <s.BottomNavigationButton key={route.key}>
              <s.BottomNavigationTouchable
                disabled={route.disabled}
                onPress={() => {
                  if (!route?.disabled) {
                    onSetDashboard(route?.title);
                    onPress();
                  }
                }}>
                {children}
              </s.BottomNavigationTouchable>
            </s.BottomNavigationButton>
          );
        }}
      />
    </>
  );
};

export default Dashboard;
