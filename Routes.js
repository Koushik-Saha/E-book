import CustomSidebarMenu from "./CustomSidebarMenu";
import FirstPage from "./pages/FirstPage";
import {NavigationContainer} from "@react-navigation/native";
import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import SecondScreenStack from "./pages/Components/SecondScreenStack";

const Drawer = createDrawerNavigator();



const Routes = () => {

    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    activeTintColor: '#e91e63',
                    itemStyle: { marginVertical: 5 },
                }}
                drawerContent={(props) => <CustomSidebarMenu {...props} />}
            >
                <Drawer.Screen
                    name="FirstPage"
                    component={FirstPage}
                    options={{
                        title: 'First Page',
                        drawerLabel: 'First page Option',
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff', //Set Header text color
                        headerTitleStyle: {
                            fontWeight: 'bold', //Set Header text style
                        },
                    }}
                />
                <Drawer.Screen
                    name="SecondPage"
                    options={{ drawerLabel: 'Second page Option' }}
                    component={SecondScreenStack}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Routes;
