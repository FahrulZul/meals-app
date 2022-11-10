import {
    View,
    Text,
    Image,
    Pressable,
    StyleSheet,
    Platform,
    ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../utils/colors";
import { Feather } from "@expo/vector-icons";
import Badge from "./ui/Badge";
import { useNavigation } from "@react-navigation/native";

const MealItem = ({
    id,
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
}) => {
    const navigation = useNavigation();

    const selectMealItemHandler = () => {
        navigation.navigate("mealDetails", {
            mealId: id,
        });
    };

    return (
        <View style={styles.mealItemContainer}>
            <ImageBackground
                source={{ uri: imageUrl }}
                resizeMode="cover"
                style={styles.imageBackground}
            >
                <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.4)"]}
                    locations={[0.4, 0.8]}
                    style={styles.overlay}
                >
                    <Pressable
                        style={styles.button}
                        android_ripple={{ color: "rgba(0,0,0,0.05)" }}
                        onPress={selectMealItemHandler}
                    >
                        <View style={styles.innerContainer}>
                            <View style={styles.topViewConTainer}>
                                <View style={styles.durationContainer}>
                                    <Feather
                                        name="clock"
                                        size={20}
                                        color={colors.stone500}
                                        style={styles.durationIcon}
                                    />
                                    <Text style={styles.durationText}>
                                        {duration} min
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.bottomViewContainer}>
                                <View style={styles.badgesContainer}>
                                    <Badge text={complexity} />
                                    <Badge text={affordability} />
                                </View>
                                <Text style={styles.title}>{title}</Text>
                            </View>
                        </View>
                    </Pressable>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    mealItemContainer: {
        backgroundColor: colors.stone50,
        borderRadius: 10,
        overflow: Platform.select({ ios: "visible", android: "hidden" }),
        marginHorizontal: 8,
        marginBottom: 24,

        //android shadow
        elevation: 4,

        // ios shadow
        shadowOffset: { width: 0, height: 2 },
        shadowColor: colors.stone900,
        shadowOpacity: 0.25,
        shadowRadius: 8,
    },
    button: {
        flex: 1,
    },
    imageBackground: {
        width: "100%",
        height: 210,
    },
    overlay: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    topViewConTainer: {
        alignItems: "flex-end",
    },
    durationContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.zinc200,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 20,
    },
    durationIcon: {
        marginRight: 5,
    },
    durationText: {
        fontFamily: "poppins-500",
        fontSize: 12,
        color: colors.zinc500,
        transform: [{ translateY: 2 }],
    },
    bottomViewContainer: {},
    badgesContainer: {
        flexDirection: "row",
        marginBottom: 8,
    },
    title: {
        fontFamily: "poppins-500",
        fontSize: 15,
        color: colors.stone50,
    },
});
