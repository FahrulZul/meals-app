import { View, Text, StyleSheet } from "react-native";

const MealsOverviewScreen = ({ route }) => {
    const categoryId = route.params.categoryId;

    return (
        <View style={styles.screenContainer}>
            <Text>Meals Overview Screen - {categoryId}</Text>
        </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        padding: 16,
    },
});
