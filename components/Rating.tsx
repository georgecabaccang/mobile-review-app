import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle, Text } from "react-native";
import { globalStyles } from "../styles/Global";
import Star from "../assets/svg/Star";

interface IRatingProps {
    rating: number;
}

export default function Rating({ rating }: IRatingProps) {
    const ratingArray: number[] = [0, 0, 0, 0, 0];
    const wholeNumber = Math.floor(rating);
    const remainder = rating % 1;

    for (let i = 0; i < wholeNumber; i++) {
        ratingArray[i] = 1;

        if (wholeNumber === i + 1 && wholeNumber <= 5 && remainder !== 0) {
            ratingArray[i + 1] = remainder;
        }
    }

    // dynamic width of filled star
    const dynamicStyle = (percentage: number) => {
        const widthSize = percentage * 100;
        return {
            width: `${widthSize}%`,
        };
    };

    return (
        <View style={styles.container}>
            {ratingArray.map((number, index) => {
                return <Star rating={dynamicStyle(number)} stroke={"black"} />;
            })}
            <Text style={[globalStyles.normalText, { fontWeight: "bold" }]}>
                ({rating.toFixed(2)} / 5.00)
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        gap: 2,
        flexDirection: "row",
    },
});
