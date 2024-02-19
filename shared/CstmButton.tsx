import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface IButtonProps {
    title: string;
    onPress: (aciton?: boolean) => void;
}

export default function CstmButton({ title, onPress }: IButtonProps) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress()}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: "steelblue",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 10,
        elevation: 3,
        borderRadius: 5,
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "white",
    },
});
