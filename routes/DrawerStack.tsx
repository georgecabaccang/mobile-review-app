import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./HomeStack";
import { StackParams } from "../App";
import AboutStack from "./AboutStack";

const Drawer = createDrawerNavigator<StackParams>();

SplashScreen.preventAutoHideAsync();

export default function DrawerStack() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerTitleAlign: "center",
                    headerShown: false,
                }}
            >
                <Drawer.Screen name="HomeStack" component={HomeStack} options={{ title: "Home" }} />
                <Drawer.Screen
                    name="AboutStack"
                    component={AboutStack}
                    options={{ title: "About" }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
