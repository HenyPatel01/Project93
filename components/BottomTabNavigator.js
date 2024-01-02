import React from 'react';
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import Homescreen from '../screens/homeScreen';
import AddReminderScreen from '../screens/addReminderScreen';

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends Component {
    render() {
        return (
            <Tab.Navigator
                labeled={false}
                barStyle={styles.bottomTabStyle}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === "Home") {
                            iconName = focused ? "home" : "home-outline";
                        } else if (route.name === "Add Reminder") {
                            iconName = focused ? "add-circle" : "add-circle-outline";
                        }
                        return (
                            <Ionicons
                                name={iconName}
                                size={RFValue(25)}
                                color={color}
                                style={styles.icons}
                            />
                        );
                    }
                })}
                activeColor={"white"}
                inactiveColor={"black"}
            >
                <Tab.Screen
                    name="Home"
                    component={Homescreen}
                    options={{ unmountOnBlur: true }}
                />
                <Tab.Screen
                    name="Add Reminder"
                    component={AddReminderScreen}
                    options={{ unmountOnBlur: true }}
                />
            </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "#3c649f",
        height: "8%",
        borderTopLeftRadius: RFValue(30),
        borderTopRightRadius: RFValue(30),
        overflow: "hidden",
        position: "absolute"
    },
    icons: {
        width: RFValue(30),
        height: RFValue(30)
    }
});
