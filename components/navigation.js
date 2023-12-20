import {React} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Homescreen from "../screens/homeScreen";
import AddReminder from "../screens/addReminderScreen";

const Stack = createStackNavigator()
const navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initailRouteName = "Home">
                <Stack.Screen component={Homescreen} name="Home"/>
                <Stack.Screen component={AddReminder} name="Add Reminder"/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default navigation();