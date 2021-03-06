// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const ThirdPage = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 25,
                            textAlign: 'center',
                            marginBottom: 16,
                        }}>
                        This is Third Page under Second Page Option
                    </Text>
                    <Button
                        onPress={() => navigation.navigate('FirstPage')}
                        title="Go to First Page"
                    />
                    <Text style={{marginTop: 10}}>
                        <Button
                            onPress={() => navigation.navigate('SecondPage')}
                            title="Go to Second Page"
                        />
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ThirdPage;
