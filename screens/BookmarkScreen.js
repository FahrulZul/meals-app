import { View, Text, StyleSheet } from "react-native";

const BookmarkScreen = () => {
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.text}>No bookmark yet.</Text>
        </View>
    );
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
