import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "../component/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

const MealsOverviewScreen = ({ route, navigation }) => {
    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    // useLayoutEffect runs the code silmutaneosly when the component render
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === categoryId
        ).title;

        navigation.setOptions({
            title: categoryTitle,
        });
    }, [categoryId, navigation]);

    const renderMealItem = (itemData) => {
        const item = itemData.item;

        const mealItemProp = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        };

        return <MealItem {...mealItemProp} />;
    };

    return (
        <View style={styles.screenContainer}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
                showsVerticalScrollIndicator={false}
                overScrollMode="never"
            />
        </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        paddingHorizontal: 16,
        marginTop: 5,
    },
});
