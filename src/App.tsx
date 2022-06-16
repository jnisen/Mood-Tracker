import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './navigator/BottomTabs';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};

export default App;
