import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const Badge = ({ text, bgColor }) => {
    return (
        <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{text}</Text>
        </View>
    );
};

export default Badge;

const styles = StyleSheet.create({
    badgeContainer: {
        backgroundColor: colors.primary,
        paddingVertical: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    badgeText: {
        fontFamily: "poppins-500",
        fontSize: 12,
        color: colors.zinc50,
        textTransform: "capitalize",
        transform: [{ translateY: 1 }],
    },
});
