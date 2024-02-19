import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { globalStyles } from "../styles/Global";
import Star from "../assets/svg/Star";

interface IRatingProps {
    rating: string;
}

export default function Rating({ rating }: IRatingProps) {
    const ratingArray: number[] = [0, 0, 0, 0, 0];
    const wholeNumber = Math.floor(+rating);
    const remainder = +rating % 1;

    // replace value of elements inside array
    // with values of 1 for whole star, and decimal/fraction
    // for non-whole star
    for (let i = 0; i < wholeNumber; i++) {
        ratingArray[i] = 1;

        if (wholeNumber === i + 1 && wholeNumber <= 5 && remainder !== 0) {
            ratingArray[i + 1] = remainder;
        }
    }

    // dynamic width of filled star depending on value
    // of element in array (which is passed as an argument)
    const dynamicStyle = (percentage: number) => {
        const widthSize = percentage * 100;
        return {
            width: `${widthSize}%`,
        };
    };

    return (
        <View style={styles.container}>
            {ratingArray.map((number, index) => {
                return <Star rating={dynamicStyle(number)} stroke={"black"} key={index} />;
            })}
            <Text style={[globalStyles.normalText, { fontWeight: "bold" }]}>({rating} / 5)</Text>
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
