import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RootScreen from './src/screens/rootScreen/RootScreen';
import SecondScreen from './src/screens/secondScreen/SecondScreen';
import ThirdScreen from './src/screens/thirdScreen/ThirdScreen';
import {StackParamList} from './src/helpers/ts-helpers/types';

const Stack = createStackNavigator<StackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="RootScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="RootScreen" component={RootScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
