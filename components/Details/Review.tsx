import React, { PropsWithChildren } from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../../styles/Global";

export default function Review({ children }: PropsWithChildren) {
    return (
        <View>
            <Text style={globalStyles.titleText}>Review: </Text>
            <Text style={globalStyles.normalText}>{children}</Text>
        </View>
    );
}
