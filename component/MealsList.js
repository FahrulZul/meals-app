import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

const MealsList = ({ items }) => {
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
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
                showsVerticalScrollIndicator={false}
                overScrollMode="never"
            />
        </View>
    );
};

export default MealsList;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        paddingHorizontal: 16,
        marginTop: 5,
    },
});
