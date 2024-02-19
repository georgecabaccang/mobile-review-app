import React, { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../styles/Global";
import Rating from "../Rating";

export default function Ratings({ children }: PropsWithChildren) {
    return (
        <View style={styles.ratingContainer}>
            <Text style={globalStyles.titleText}>Rating:</Text>
            {children && <Rating rating={children!.toString()} />}
            {!children && <Text style={globalStyles.titleText}>NA</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    ratingContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 8,
    },
});
