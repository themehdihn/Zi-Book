import { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScaledSize, ScaledWidth, ScaledHeight } from "../utils/responsive"
import { useTheme } from '@react-navigation/native';
import { Icon } from '../components/modules/AppIcon';
import Main from '../screens/HomeScreen';
import library from '../screens/LibraryScreen'
import Category from '../screens/CategoryScreen'
import Profile from '../screens/ProfileScreen'
import ProfileStackNavigator from './ProfileStackNavigator';

export default function TabsNavigator() {

    const Tab = createBottomTabNavigator();
    // const contextData = useContext(AppleShopContextApp);
    //* Use Context
    const {
        dark, colors
    } = useTheme();

    return (
        <View style={styles.container}>
            <Tab.Navigator
                initialRouteName="home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === "main") {
                            iconName = focused ? "home-bold" : "home1";
                        } else if (route.name === "library") {
                            iconName = focused ? "library-bold" : "library1";
                        } else if (route.name === "category") {
                            iconName = focused ? "category-bold" : "category";
                        } else if (route.name === "profile") {
                            iconName = focused ? "user-bold" : "user";
                        }

                        return (
                            <View style={{ position: "relative" }}>
                                <Icon
                                    name={iconName}
                                    size={22}
                                    color={color}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        verticalAlign: "middle",
                                        textAlign: "center",
                                    }}
                                />
                            </View>
                        );
                    },
                    tabBarShowLabel: true,
                    tabBarLabelStyle: {
                        fontFamily: 'IRANYekanXFaNum-DemiBold',
                        fontSize: ScaledSize(10),
                        paddingBottom: 8,
                    },
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                    tabBarActiveTintColor: "#00cc66",
                    tabBarInactiveTintColor: colors.text,
                    tabBarStyle: {
                        elevation: 20,
                        borderTopWidth: 0,
                        height: 70,
                        backgroundColor: colors.primary
                    },
                    headerTitleContainerStyle: {
                        paddingBottom: ScaledSize(10)
                    },
                    headerStyle: {
                        backgroundColor: colors.primary,
                        shadowColor: colors.shadow,
                        elevation: 5
                    },
                    headerTitleAlign: "center",
                    headerStatusBarHeight: ScaledSize(15),
                    headerTitleStyle: {
                        fontFamily: "IRANYekanXFaNum-DemiBold",
                        fontSize: ScaledSize(23)
                    }

                })}>
                <Tab.Screen
                    name="main"
                    component={Main}
                    options={{ title: "خانه", }}
                />
                <Tab.Screen
                    name="library"
                    component={library}
                    options={{
                        title: "کتابخونه",
                        headerTitle: "کتابخونه ی من",
                        headerShown: true
                    }}
                />
                <Tab.Screen
                    name="category"
                    component={Category}
                    options={{
                        title: "دسته بندی",
                        headerTitle: "دسته بندی ها",
                        headerShown: true,
                    }}
                />
                <Tab.Screen
                    name="profile"
                    component={Profile}
                    options={{
                        title: "پروفایل",
                        headerShown: true,
                    }}
                />
                <Tab.Screen
                    name="profilestack"
                    component={ProfileStackNavigator}
                    options={{
                        tabBarItemStyle: { display: "none" }
                    }}
                />
            </Tab.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
});




