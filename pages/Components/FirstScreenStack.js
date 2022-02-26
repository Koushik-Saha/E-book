import FirstPage from "../FirstPage";
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import NavigationDrawerStructure from "./NavigationDrawerStructure";

const Stack = createStackNavigator();

const FirstScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="FirstPage">
            <Stack.Screen
                name="FirstPage"
                component={FirstPage}
                options={{
                    title: 'First Page', //Set Header Title
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
                }}
            />
        </Stack.Navigator>
    );
}

export default FirstScreenStack;
