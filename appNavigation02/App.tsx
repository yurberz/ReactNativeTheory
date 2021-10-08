import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainTabScreen from './src/screens/mainTabScreen/MainTabScreen';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <MainTabScreen />
    </NavigationContainer>
  );
};

export default App;
