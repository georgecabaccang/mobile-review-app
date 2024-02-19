import React from "react";
import { Alert, View } from "react-native";
import CstmButton from "./CstmButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParams } from "../App";

type ConfirmDeleteType = {
    deleteFunction: (_id: string) => void;
    titleOfItem: string;
    idOfItem: string;
};

export default function ConfirmDelete({
    deleteFunction,
    titleOfItem,
    idOfItem,
}: ConfirmDeleteType) {
    const navigation = useNavigation<StackNavigationProp<StackParams>>();

    const showConfirmation = () => {
        Alert.alert(
            `Permanently Delete "${titleOfItem}"?`,
            "Cannot undo once deleted",
            [
                {
                    text: "Cancel",
                    onPress: () => {},
                    style: "cancel",
                },
                {
                    text: "Confirm",
                    onPress: () => {
                        deleteFunction(idOfItem);
                        navigation.navigate("Home");
                    },
                    style: "cancel",
                },
            ],
            {
                cancelable: true,
                onDismiss: () => {},
            }
        );
    };

    return (
        <View>
            <CstmButton title="DELETE REVIEW" onPress={showConfirmation} />
        </View>
    );
}
