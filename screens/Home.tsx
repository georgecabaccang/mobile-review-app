import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/Global";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParams } from "../App";
import { FlatList } from "react-native-gesture-handler";
import ItemCard from "../shared/ItemCard";

export type Review = {
    _id: string;
    title: string;
    body: string;
    rating: number;
};

export default function Home() {
    const [reviews, setReviews] = useState<Review[]>([
        { title: "Test 1", body: "This is the review for One.", rating: 5, _id: "1" },
        { title: "Test 2", body: "This is the review for Two.", rating: 4.55, _id: "2" },
        { title: "Test 3", body: "This is the review for Three.", rating: 2.1, _id: "3" },
    ]);

    const handleOnPress = (item: Review) => {
        navigation.navigate("ReviewDetail", item);
    };

    const navigation = useNavigation<StackNavigationProp<StackParams>>();
    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                keyExtractor={(item, index) => `${item._id}${index}`}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleOnPress(item)}>
                        <ItemCard>
                            <Text style={globalStyles.listItem}>{item.body}</Text>
                        </ItemCard>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
