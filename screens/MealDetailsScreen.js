import { StatusBar } from "expo-status-bar";
import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import BackButton from "../component/ui/Backbutton";
import { MEALS } from "../data/dummy-data";
import { colors } from "../utils/colors";

const MealDetailsScreen = ({ route, navigation }) => {
    const mealId = route.params.mealId;
    const meal = MEALS.find((meal) => meal.id === mealId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "",
            headerTransparent: true,
            headerLeft: () => (
                <BackButton
                    onPress={() =>
                        navigation.canGoBack() ? navigation.goBack() : null
                    }
                />
            ),
        });
    }, [navigation]);

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.screenContainer}>
                <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            </View>
        </>
    );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    image: {
        width: "100%",
        height: 300,
    },
});
