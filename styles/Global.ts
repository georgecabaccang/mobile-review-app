import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    titleText: {
        fontFamily: "roboto-bold",
    },
    normalText: {
        fontFamily: "roboto-regular",
    },
    input: {
        borderColor: "black",
        borderWidth: 1,
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 10,
        fontSize: 16,
    },
    addButton: {
        borderWidth: 1,
        borderColor: "gray",
        paddingHorizontal: 5,
        paddingVertical: 5,
        backgroundColor: "steelblue",
        borderRadius: 5,
        elevation: 3,
    },
    errorMessage: {
        color: "#cc0000",
        fontSize: 12,
        paddingHorizontal: 12,
        paddingTop: 5,
    },
    buttonsContainer: {
        display: "flex",
        gap: 10,
    },
});
