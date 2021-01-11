import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../screens/Home';
import {Detail} from '../screens/Detail';

const Stack = createStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'People of Star Wars',
          headerTitleStyle: {
            alignSelf: 'center',
          },
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Details"
        component={Detail}
        options={{
          headerTitleStyle: {
            alignSelf: 'center',
          },
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
};

export default Route;
