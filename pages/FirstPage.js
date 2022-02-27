import * as React from 'react';
import { NativeBaseProvider, Box, HStack, VStack, Text, Pressable, Image, Center } from 'native-base';
import {SafeAreaView} from "react-native";

const FirstPage = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <Center flex={1} px="3">
                <Box bg="primary.600" py="4" px="3" rounded="md" width={375} maxWidth="100%">
                    <HStack justifyContent="space-between">
                        <Box justifyContent="space-between">
                            <VStack space="2">
                                <Text fontSize="sm" color="white">
                                    Today @ 9PM
                                </Text>
                                <Text color="white" fontSize="xl">
                                    Let's talk about avatar!
                                </Text>
                            </VStack>
                            <Pressable rounded="xs" bg="primary.400" alignSelf="flex-start" py="1" px="3">
                                <Text textTransform="uppercase" fontSize="sm" fontWeight="bold" color="white">
                                    Remind me
                                </Text>
                            </Pressable>
                        </Box>
                        <Image source={{
                            uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg'
                        }} alt="Aang flying and surrounded by clouds" height="100" rounded="full" width="100" />
                    </HStack>
                </Box>
            </Center>
                {/*<View
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
                </View>*/}
        </SafeAreaView>
    );
};

export default FirstPage;
