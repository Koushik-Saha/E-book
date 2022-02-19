// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const SecondPage = ({ navigation }) => {
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
                        This is Second Page under Second Page Option
                    </Text>
                    <Button
                        title="Go to First Page"
                        onPress={() => navigation.navigate('FirstPage')}
                    />
                    <Text style={{marginTop: 10}}>
                        <Button
                            title="Go to Third Page"
                            onPress={() => navigation.navigate('ThirdPage')}
                        />
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SecondPage;
