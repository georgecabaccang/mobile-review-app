import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import DrawerStack from "./routes/DrawerStack";

export type StackParams = {
    Home: undefined;
    HomeStack: undefined;
    AboutStack: undefined;
    About: undefined;
    ReviewDetail: { title: string; body: string; rating: number; _id: string } | undefined;
};

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded, fontError] = useFonts({
        "roboto-regular": require("./assets/fonts/roboto/Roboto-Regular.ttf"),
        "roboto-bold": require("./assets/fonts/roboto/Roboto-Bold.ttf"),
        "roboto-medium": require("./assets/fonts/roboto/Roboto-Medium.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    onLayoutRootView();

    return <DrawerStack />;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
