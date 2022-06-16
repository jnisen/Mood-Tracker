import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './navigator/BottomTabs';
import { AppProvider } from './context/Provider';

const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
