import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import MealsList from "../component/MealsList";
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

    return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({});
