import { useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { colors } from "./utils/colors";
import BookmarkScreen from "./screens/BookmarkScreen";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
    const [fontsLoaded] = useFonts({
        "poppins-400": require("./assets/fonts/poppins/Poppins-Regular.ttf"),
        "poppins-500": require("./assets/fonts/poppins/Poppins-Medium.ttf"),
        "poppins-600": require("./assets/fonts/poppins/Poppins-SemiBold.ttf"),
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();

    const stackScreenOptions = {
        headerTitleStyle: {
            fontFamily: "poppins-500",
            fontSize: 15,
        },
        headerShadowVisible: false,
        contentStyle: {
            backgroundColor: "white",
        },
    };

    const drawerScreenOption = {
        headerTitleStyle: {
            fontFamily: "poppins-500",
            fontSize: 15,
        },
        headerShadowVisible: false,
        sceneContainerStyle: { backgroundColor: "white" },
        drawerLabelStyle: { fontSize: 14, fontFamily: "poppins-500" },
        drawerActiveTintColor: "white",
        drawerActiveBackgroundColor: colors.lightPrimary,
    };

    const DrawerNavigator = () => {
        return (
            <Drawer.Navigator screenOptions={drawerScreenOption}>
                <Drawer.Screen
                    name="categoriesScreen"
                    component={CategoriesScreen}
                    options={{
                        title: "Categories",
                        drawerIcon: ({ color, size }) => (
                            <Ionicons
                                name="apps-outline"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="bookmarkScreen"
                    component={BookmarkScreen}
                    options={{
                        title: "Bookmarks",
                        drawerIcon: ({ color, size }) => (
                            <Ionicons
                                name="ios-bookmarks-outline"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
            </Drawer.Navigator>
        );
    };

    return (
        <>
            <StatusBar style="dark" />
            <View style={styles.rootContainer} onLayout={onLayoutRootView}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={stackScreenOptions}>
                        <Stack.Screen
                            name="drawer"
                            component={DrawerNavigator}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="mealsOverview"
                            component={MealsOverviewScreen}
                        />
                        <Stack.Screen
                            name="mealDetails"
                            component={MealDetailsScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
});
