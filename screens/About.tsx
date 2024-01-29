import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/Global";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParams } from "../App";

export default function About() {
    const navigation = useNavigation<StackNavigationProp<StackParams>>();

    return <View style={globalStyles.container}></View>;
}
