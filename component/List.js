import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { Octicons } from "@expo/vector-icons";

const List = ({ data, containerStyle }) => {
    return (
        <View style={containerStyle}>
            {data.map((element, index) => (
                <View key={index} style={styles.listItem}>
                    <Octicons name="dot" style={styles.listIcon} size={14} />
                    <Text style={styles.listText}>{element}</Text>
                </View>
            ))}
        </View>
    );
};

export default List;

const styles = StyleSheet.create({
    listItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    listIcon: {
        marginRight: 10,
        color: colors.primary,
    },
    listText: {
        fontFamily: "poppins-400",
        fontSize: 13,
        color: colors.zinc400,
        transform: [{ translateY: 2 }],
    },
});
