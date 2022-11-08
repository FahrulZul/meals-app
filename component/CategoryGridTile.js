import {
    Pressable,
    View,
    Text,
    StyleSheet,
    Image,
    Platform,
} from "react-native";
import { colors } from "../utils/colors";

const CategoryGridTile = ({ categoryTitle, color, imageUrl, onPress }) => {
    return (
        <View style={styles.gridItemContainer}>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
                android_ripple={{ color: colors.lightPrimary }}
                onPress={onPress}
            >
                <View style={styles.innerContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={imageUrl} />
                    </View>
                    <Text style={styles.title}>{categoryTitle}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItemContainer: {
        flex: 1,
        margin: 16,
        height: 150,
        backgroundColor: colors.primary,
        borderRadius: 8,

        overflow: Platform.select({ ios: "visible", android: "hidden" }),

        // box-shadow for android
        elevation: 4,

        //box shadow for ios
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.95,
    },
    innerContainer: {
        flex: 1,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    title: {
        fontFamily: "poppins-600",
        fontSize: 12,
        color: colors.stone50,
    },
});
