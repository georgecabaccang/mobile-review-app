import React, { PropsWithChildren } from "react";
import { Text } from "react-native";
import { globalStyles } from "../../styles/Global";

export default function Titile({ children }: PropsWithChildren) {
    return (
        <>
            <Text style={globalStyles.titleText}>
                Title: <Text style={globalStyles.normalText}>{children}</Text>
            </Text>
        </>
    );
}
