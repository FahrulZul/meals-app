import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { colors } from "../utils/colors";

const SettingScreen = () => {
    const [fetchedMessage, setFetchedMessage] = useState();
    const FIREBASE_API_URL =
        "https://react-native-course-d3f4a-default-rtdb.asia-southeast1.firebasedatabase.app";

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await axios.get(
                    FIREBASE_API_URL + "/mealsSetting.json"
                );
                // console.log(response.data[1]);
                setFetchedMessage(response.data[1].message);
            } catch (error) {
                console.log(error);
            }
        };

        fetchMessage();
    }, []);

    if (!fetchedMessage) {
        return (
            <View style={styles.loadingOverlay}>
                <ActivityIndicator size="large" color={colors.zinc500} />
            </View>
        );
    }

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.text}>{fetchedMessage}</Text>
        </View>
    );
};

export default SettingScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        padding: 16,
    },
    text: {
        fontFamily: "poppins-400",
    },
    loadingOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
