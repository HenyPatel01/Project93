import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from '../screens/homeScreen';
import AddReminder from '../screens/addReminderScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="AddReminder" component={AddReminder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;