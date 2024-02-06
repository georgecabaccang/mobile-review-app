import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/Global";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { Review } from "./Home";
import ItemCard from "../shared/ItemCard";
import Rating from "../components/Rating";

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
                    <View style={styles.ratingContainer}>
                        <Text style={globalStyles.titleText}>Rating:</Text>
                        <Rating rating={params.rating} />
                    </View>
                </View>
            </ItemCard>
        </View>
    );
}

const styles = StyleSheet.create({
    ratingContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 5,
    },
});
