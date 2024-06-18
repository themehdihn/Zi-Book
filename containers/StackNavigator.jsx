import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';
import TabsNavigator from './TabsNavigator'
// import BookSearchScreen from '../screens/BookSearchScreen'
import SearchScreen from '../screens/BookSearchScreen'
import BookDetailsScreen from '../screens/BookDetailsScreen'
import BookViewScreen from '../screens/BookViewScreen'
import CommentScreen from '../screens/CommentScreen'
import { I18nManager } from 'react-native';
import 'react-native-reanimated'
import 'react-native-gesture-handler'
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import FreeBooksScreen from '../screens/FreeBooksScreen';
import NewBooksScreen from '../screens/NewBooksScreen';
import CategoryBookScreen from '../screens/CategoryBookScreen';
import ChangePassScreen from '../screens/ChangePassScreen';
import AboutScreen from '../screens/AboutScreen';
import { ScaledSize } from '../utils/responsive';
// import changeNavigationBarColor from 'react-native-navigation-bar-color';

I18nManager.allowRTL(true)
I18nManager.forceRTL(true)
// Support Rtl

export default function StackNavigator() {

    const Stack = createNativeStackNavigator();


    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="login"
                component={LoginScreen}
                initialParams={{ successRegister: false }}
            />
            <Stack.Screen name="register" component={RegisterScreen} />
            <Stack.Screen
                name="bookdetails"
                component={BookDetailsScreen}
                options={{
                    animation: "slide_from_left",
                    gestureEnabled: true,
                }}
            />
            <Stack.Screen name="bookview" component={BookViewScreen} />
            <Stack.Screen
                name="search"
                component={SearchScreen}
                options={{
                    headerShown: false,
                    animation: "fade_from_bottom",
                }}
            />
            <Stack.Screen name="catbook" component={CategoryBookScreen} />
            <Stack.Screen name="freebook" component={FreeBooksScreen} />
            <Stack.Screen name="newbooks" component={NewBooksScreen} />
            <Stack.Screen
                name="comment"
                component={CommentScreen}
                options={{
                    animation: "fade_from_bottom",
                }}
            />
            <Stack.Screen
                name="about"
                component={AboutScreen}
                options={{
                    headerShown: true,
                    headerTitle: "درباره ما",
                    headerTitleStyle: {
                        fontFamily: 'IRANYekanXFaNum-DemiBold',
                        fontSize: ScaledSize(20),
                    }
                }} />
            <Stack.Screen name="changepass" component={ChangePassScreen} />
            <Stack.Screen name="home" component={TabsNavigator} />
        </Stack.Navigator>
    );
};


