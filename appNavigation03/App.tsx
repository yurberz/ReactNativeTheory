import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamList} from './src/helpers/ts-helpers/types';
import MainScreen from './src/screens/mainScreen/MainScreen';
import ColorScreen from './src/screens/colorScreen/ColorScreen';

const Stack = createNativeStackNavigator<StackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            title: 'Input text',
          }}
        />
        <Stack.Screen
          name="ColorScreen"
          component={ColorScreen}
          options={({route}) => ({title: route.params.title})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
