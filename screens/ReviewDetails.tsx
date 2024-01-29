import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/Global";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { Review } from "./Home";
import ItemCard from "../shared/ItemCard";

export type Params = {
    details: Review;
};

export default function ReviewDetails() {
    const { params } = useRoute<RouteProp<Params, "details">>();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: params.title });
    }, []);

    return (
        <View style={globalStyles.container}>
            <ItemCard>
                <View>
                    <Text style={globalStyles.titleText}>
                        Game: <Text style={globalStyles.normalText}>{params.title}</Text>
                    </Text>
                    <Text style={globalStyles.titleText}>
                        Review: <Text style={globalStyles.normalText}>{params.body}</Text>
                    </Text>
                    <Text style={globalStyles.titleText}>
                        Rating: <Text style={globalStyles.normalText}>{params.rating}</Text>
                    </Text>
                </View>
            </ItemCard>
        </View>
    );
}
