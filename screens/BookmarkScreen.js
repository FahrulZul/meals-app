import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
// import { useContext } from "react";
// import { BookmarkContext } from "../store/context/bookmark-context";
import MealsList from "../component/MealsList";
import { MEALS } from "../data/dummy-data";

const BookmarkScreen = () => {
    // const bookmarkContext = useContext(BookmarkContext);
    const bookmarkMealIds = useSelector((state) => state.bookmarkMeals.mealIds);

    const bookmarkMeals = MEALS.filter((meal) =>
        // bookmarkContext.id.includes(meal.id)
        bookmarkMealIds.includes(meal.id)
    );

    if (bookmarkMealIds.length === 0) {
        return (
            <View style={styles.screenContainer}>
                <Text style={styles.text}>No bookmark yet.</Text>
            </View>
        );
    }

    return <MealsList items={bookmarkMeals} />;
};

export default BookmarkScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        padding: 24,
    },
    text: {
        fontFamily: "poppins-400",
    },
});
