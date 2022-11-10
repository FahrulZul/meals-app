import { Pressable, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../utils/colors";

const BackButton = ({ onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.buttonContainer}>
            <Feather name="arrow-left" size={24} color={colors.zinc50} />
        </Pressable>
    );
};

export default BackButton;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "rgba(0,0,0,0.25)",
        padding: 5,
        borderRadius: 20,
    },
});
