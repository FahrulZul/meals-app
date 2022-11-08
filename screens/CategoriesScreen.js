import { FlatList, View } from "react-native";
import CategoryGridTile from "../component/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
    const renderCategoryItem = (itemData) => {
        const pressHandler = () => {
            navigation.navigate("Meals Overview", {
                categoryId: itemData.item.id,
            });
        };

        return (
            <CategoryGridTile
                categoryTitle={itemData.item.title}
                color={itemData.item.color}
                imageUrl={itemData.item.imageUrl}
                onPress={pressHandler}
            />
        );
    };

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
            overScrollMode="never"
        />
    );
};

export default CategoriesScreen;
