import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import 'react-native-reanimated'
import 'react-native-gesture-handler'
import UpdateProfileScreen from '../screens/UpdateProfileScreen';

// I18nManager.allowRTL(true)
// I18nManager.forceRTL(true)
// // Support Rtl

export default function ProfileStackNavigator() {

    const Stack = createNativeStackNavigator();
   

    return (
        <Stack.Navigator
            initialRouteName="update"
            screenOptions={{
                headerShown: false,
               
            }}
        >
            <Stack.Screen
                name="update"
                component={UpdateProfileScreen}
            />
        </Stack.Navigator>
    );
};


