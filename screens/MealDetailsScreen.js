import { StatusBar } from "expo-status-bar";
import { useLayoutEffect, useContext } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import HeaderButton from "../component/ui/HeaderButton";
import { MEALS } from "../data/dummy-data";
import { CATEGORIES } from "../data/dummy-data";
import { colors } from "../utils/colors";
import List from "../component/List";
import { useSelector, useDispatch } from "react-redux";
import { addBookmark, removeBookmark } from "../store/redux/bookmark";
// import { BookmarkContext } from "../store/context/bookmark-context";

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const MealDetailsScreen = ({ route, navigation }) => {
    // const bookmarkContext = useContext(BookmarkContext);
    const bookmarkMealIds = useSelector((state) => state.bookmarkMeals.mealIds);
    const dispatch = useDispatch();

    const mealId = route.params.mealId;
    const meal = MEALS.find((meal) => meal.id === mealId);

    // const isMealBookmark = bookmarkContext.id.includes(mealId);
    const isMealBookmark = bookmarkMealIds.includes(mealId);

    const changeBookmarkStatusHandler = () => {
        if (isMealBookmark) {
            // bookmarkContext.removeBookmark(mealId);
            dispatch(removeBookmark({ id: mealId }));
        } else {
            // bookmarkContext.addBookmark(mealId);
            dispatch(addBookmark({ id: mealId }));
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "",
            headerTransparent: true,
            headerLeft: () => (
                <HeaderButton
                    iconName="arrow-back-outline"
                    onPress={() =>
                        navigation.canGoBack() ? navigation.goBack() : null
                    }
                />
            ),
            headerRight: () => (
                <HeaderButton
                    iconName={
                        isMealBookmark ? "md-bookmark" : "md-bookmark-outline"
                    }
                    onPress={changeBookmarkStatusHandler}
                />
            ),
        });
    }, [navigation, changeBookmarkStatusHandler]);

    const mealCategory = CATEGORIES.filter((category) =>
        meal.categoryIds.includes(category.id)
    )
        .map((category) => category.title)
        .join(" ??? ");

    return (
        <>
            <StatusBar style="light" />
            <ScrollView
                style={styles.screenContainer}
                overScrollMode="never"
                showsVerticalScrollIndicator={false}
            >
                <Image source={{ uri: meal.imageUrl }} style={styles.image} />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{meal.title}</Text>
                    <Text style={styles.mealCategoryText}>{mealCategory}</Text>
                    <View style={styles.overviewsContainer}>
                        <View style={styles.overviewWrapper}>
                            <MaterialCommunityIcons
                                name="timer-sand"
                                style={styles.overviewIcon}
                            />
                            <Text style={styles.overviewText}>
                                {capitalizeFirstLetter(meal.complexity)}
                            </Text>
                        </View>
                        <View style={styles.overviewWrapper}>
                            <Ionicons
                                name="ios-pricetags-outline"
                                style={styles.overviewIcon}
                            />
                            <Text style={styles.overviewText}>
                                {capitalizeFirstLetter(meal.affordability)}
                            </Text>
                        </View>
                        <View style={styles.overviewWrapper}>
                            <MaterialCommunityIcons
                                name="timer-outline"
                                style={styles.overviewIcon}
                            />
                            <Text style={styles.overviewText}>
                                {meal.duration} min
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.subtitle}>Ingredients</Text>
                    <List
                        data={meal.ingredients}
                        containerStyle={{ marginBottom: 24 }}
                    />
                    <Text style={styles.subtitle}>Steps</Text>
                    <List data={meal.steps} />
                </View>
            </ScrollView>
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
        height: 320,
    },
    detailsContainer: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 24,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "white",
        transform: [{ translateY: -20 }],
        zIndex: 1,
    },
    title: {
        fontFamily: "poppins-600",
        fontSize: 20,
        color: colors.zinc900,
        transform: [{ translateY: 4 }],
    },
    mealCategoryText: {
        fontFamily: "poppins-500",
        fontSize: 13,
        color: colors.zinc400,
        marginBottom: 36,
    },
    overviewsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 36,
    },
    overviewWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    overviewText: {
        fontFamily: "poppins-500",
        fontSize: 13,
        transform: [{ translateY: 1 }],
    },
    overviewIcon: {
        fontSize: 24,
        color: colors.primary,
        marginRight: 5,
    },
    subtitle: {
        fontFamily: "poppins-600",
        fontSize: 16,
        marginBottom: 8,
    },
});
