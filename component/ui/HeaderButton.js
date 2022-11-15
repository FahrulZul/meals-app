import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../utils/colors";

const HeaderButton = ({ onPress, iconName }) => {
    return (
        <Pressable onPress={onPress} style={styles.buttonContainer}>
            <Ionicons name={iconName} size={22} color={colors.zinc50} />
        </Pressable>
    );
};

export default HeaderButton;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "rgba(0,0,0,0.25)",
        borderRadius: 50,
        width: 36,
        height: 36,
        justifyContent: "center",
        alignItems: "center",
    },
});
