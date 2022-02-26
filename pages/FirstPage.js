import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import {Box} from "native-base";

const FirstPage = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
                    <Text>Open up App.js to start working on your app!</Text>
                </Box>
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
                        This is the First Page under First Page Option
                    </Text>
                    <Button
                        onPress={() => navigation.navigate('SecondPage')}
                        title="Go to Second Page"
                    />
                    <Text style={{marginTop: 10}}>
                        <Button
                            onPress={() => navigation.navigate('ThirdPage')}
                            title="Go to Third Page"
                        />
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default FirstPage;
