import React from 'react';
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from './screens/Homescreen';
import AddReminderScreen from './screens/AddReminderScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Homescreen} />
      <Tab.Screen name="AddReminder" component={AddReminderScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;