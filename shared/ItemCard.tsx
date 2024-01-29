import React from "react";
import { View, StyleSheet } from "react-native";

export default function ItemCard({ children }: React.PropsWithChildren) {
    return (
        <View style={[styles.cardContainer, styles.shadow]}>
            <View style={styles.cardContent}>{children}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "white",
        display: "flex",
        marginVertical: 5,
        borderRadius: 6,
        opacity: 0.99,
        marginHorizontal: 4
    },
    cardContent: { paddingHorizontal: 12, paddingVertical: 12 },
    shadow: {
        shadowColor: "black",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 50,
        elevation: 6,
    },
});
