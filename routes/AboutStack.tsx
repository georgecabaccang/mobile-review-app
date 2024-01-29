import "react-native-gesture-handler";

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StackParams } from "../App";
import Header from "../shared/Header";
import About from "../screens/About";

const Stack = createStackNavigator<StackParams>();

export default function AboutStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleContainerStyle: { left: -16, right: -16 },
            }}
        >
            <Stack.Screen
                name="About"
                component={About}
                options={{ headerTitle: () => <Header title={"About"} />, title: "About" }}
            />
        </Stack.Navigator>
    );
}
