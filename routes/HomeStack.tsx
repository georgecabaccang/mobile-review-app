import "react-native-gesture-handler";

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StackParams } from "../App";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../shared/Header";

const Stack = createStackNavigator<StackParams>();

export default function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleContainerStyle: { left: -16, right: -16 },
                headerTitleAlign: "center",
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerTitle: () => <Header title={"Home"} /> }}
            />
            <Stack.Screen
                name="ReviewDetail"
                component={ReviewDetails}
                // options={(route) => ({ title: route.params.title })}
            />
        </Stack.Navigator>
    );
}
