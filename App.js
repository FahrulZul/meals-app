import { useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { colors } from "./utils/colors";

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

    const screenOptions = {
        headerTitleStyle: {
            fontFamily: "poppins-500",
            fontSize: 15,
        },
        headerShadowVisible: false,
        contentStyle: {
            backgroundColor: "white",
        },
    };

    return (
        <>
            <StatusBar style="dark" />
            <View style={styles.rootContainer} onLayout={onLayoutRootView}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={screenOptions}>
                        <Stack.Screen
                            name="mealsCategories"
                            component={CategoriesScreen}
                            options={{
                                title: "Categories",
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
