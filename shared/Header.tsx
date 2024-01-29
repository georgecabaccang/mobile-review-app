import React from "react";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { StackParams } from "../App";
import { Feather } from "@expo/vector-icons";

interface IHeaderProps {
    title: string;
}

const screen = Dimensions.get("window");

export default function Header({ title }: IHeaderProps) {
    const navigation = useNavigation<DrawerNavigationProp<StackParams>>();

    return (
        <View style={styles.header}>
            <Feather
                name="menu"
                onPress={() => {
                    navigation.openDrawer();
                }}
                size={26}
                style={styles.icon}
            />
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: screen.width,
        marginLeft: 0,
        paddingLeft: 0,
        height: "100%",
    },
    headerText: {
        fontFamily: "roboto-bold",
        fontSize: 20,
        lineHeight: 30,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    icon: {
        position: "absolute",
        left: 16,
    },
});
