import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { globalStyles } from "../styles/Global";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParams } from "../App";
import { FlatList } from "react-native-gesture-handler";
import ItemCard from "../shared/ItemCard";
import CstmModal from "../shared/CstmModal";
import AddGameForm from "../shared/forms/AddGameForm";
import { Feather } from "@expo/vector-icons";
import { GameReviewContext, Review } from "../store/GameReviews";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { reviews } = useContext(GameReviewContext);

    const navigation = useNavigation<StackNavigationProp<StackParams>>();

    // navigate to details of review, also passing
    // the data of the review
    const handleOnPress = (item: Review) => {
        navigation.navigate("ReviewDetail", item);
    };

    return (
        <View style={globalStyles.container}>
            <CstmModal isOpen={isModalOpen}>
                <AddGameForm toggleFunction={setIsModalOpen} />
            </CstmModal>
            <View style={globalStyles.addButton}>
                <Feather name="plus" onPress={() => setIsModalOpen(true)} size={20} />
            </View>

            <FlatList
                data={reviews}
                keyExtractor={(item, index) => `${item._id}${index}`}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleOnPress(item)}>
                        <ItemCard>
                            <Text>{item.title}</Text>
                        </ItemCard>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
