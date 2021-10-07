import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootScreen from './src/screens/rootScreen/RootScreen';
import SecondScreen from './src/screens/secondScreen/SecondScreen';
import ThirdScreen from './src/screens/thirdScreen/ThirdScreen';
import FourthScreen from './src/screens/fourthScreen/FourhScreen';
import FifthScreen from './src/screens/fifthScreen/FifthScreen';
import {StackParamList} from './src/helpers/ts-helpers/types';

const Stack = createNativeStackNavigator<StackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RootScreen">
        <Stack.Group>
          <Stack.Screen
            name="RootScreen"
            component={RootScreen}
            options={{
              title: 'First UIViewController',
            }}
          />
          <Stack.Screen
            name="SecondScreen"
            component={SecondScreen}
            options={{
              title: 'Second UIViewController',
            }}
          />
          <Stack.Screen
            name="FifthScreen"
            component={FifthScreen}
            options={{
              title: 'Fifth UIViewController',
            }}
          />
        </Stack.Group>

        <Stack.Group
          screenOptions={{
            presentation: 'fullScreenModal',
          }}>
          <Stack.Screen
            name="ThirdScreen"
            component={ThirdScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="FourthScreen"
            component={FourthScreen}
            options={{
              headerLeft: () => null,
              title: 'Fourth UIViewController',
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
