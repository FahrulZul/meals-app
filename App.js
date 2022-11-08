import { useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

export default function App() {
    const [fontsLoaded] = useFonts({
        "poppins-400": require("./assets/fonts/poppins/Poppins-Regular.ttf"),
        "poppins-600": require("./assets/fonts/poppins/Poppins-Bold.ttf"),
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

    return (
        <>
            <StatusBar style="dark" />
            <View style={styles.rootContainer} onLayout={onLayoutRootView}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Meals Categories"
                            component={CategoriesScreen}
                        />
                        <Stack.Screen
                            name="Meals Overview"
                            component={MealsOverviewScreen}
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
