import React from "react";
import { View } from "react-native";

interface IRatingProps {
    rating: number;
}

export default function Rating({ rating }: IRatingProps) {
    const ratingArray: number[] = [];

    const wholeNumber = Math.floor(rating);
    const remainder = rating % 1;

    for (let i = 0; i < wholeNumber; i++) {
        ratingArray.push(1);
    }

    ratingArray.push(remainder);

    const dynamicStyle = (percentage: number) => {
        return {
            width: `${percentage}`,
        };
    };

    return (
        <View>
            {ratingArray.map((number) => {
                return (
                    <View>
                        <View style={dynamicStyle(number)}></View>
                    </View>
                );
            })}
        </View>
    );
}
