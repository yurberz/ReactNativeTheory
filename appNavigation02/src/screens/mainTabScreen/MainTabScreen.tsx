import React from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RootScreen from '../rootScreen/RootScreen';
import SecondScreen from '../secondScreen/SecondScreen';
import ThirdScreen from '../thirdScreen/ThirdScreen';
import FourthScreen from '../fourthScreen/FourhScreen';
import FifthScreen from '../fifthScreen/FifthScreen';
import {StackParamList, TabParamList} from '../../helpers/ts-helpers/types';

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const FirstStackScreen = () => {
  return (
    <Stack.Navigator>
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
          name="ThirdScreen"
          component={ThirdScreen}
          options={{
            headerShown: false,
            presentation: 'fullScreenModal',
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const FourthStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="FourthScreen"
          component={FourthScreen}
          options={{
            headerLeft: () => null,
            title: 'Fourth UIViewController',
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
    </Stack.Navigator>
  );
};

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {display: 'none'},
      }}>
      <Tab.Screen
        name="TabFirst"
        component={FirstStackScreen}
        options={{
          title: 'First UIViewController',
        }}
      />
      <Tab.Screen
        name="TabFourth"
        component={FourthStackScreen}
        options={{
          title: 'Fourth UIViewController',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;
