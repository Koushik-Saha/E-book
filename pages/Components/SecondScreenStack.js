import SecondPage from "../SecondPage";
import ThirdPage from "../ThirdPage";
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import NavigationDrawerStructure from "./NavigationDrawerStructure";
const Stack = createStackNavigator();



const SecondScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="SecondPage"
            screenOptions={{
                headerLeft: () => (
                    <NavigationDrawerStructure navigationProps={navigation} />
                ),
                headerStyle: {
                    backgroundColor: '#f4511e', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                },
            }}>
            <Stack.Screen
                name="SecondPage"
                component={SecondPage}
                options={{
                    title: 'Second Page', //Set Header Title
                }}
            />
            <Stack.Screen
                name="ThirdPage"
                component={ThirdPage}
                options={{
                    title: 'Third Page', //Set Header Title
                }}
            />
        </Stack.Navigator>
    );
}

export default SecondScreenStack;
