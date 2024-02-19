import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/Global";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";

import ItemCard from "../shared/ItemCard";
import Rating from "../components/Rating";
import CstmImageHandler from "../shared/CstmImageHandler";
import { GameReviewContext, Review } from "../store/GameReviews";

import { StackParams } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";
import ConfirmDelete from "../shared/ConfirmDelete";

export type Params = {
    details: Review;
};

export default function ReviewDetails() {
    const { params } = useRoute<RouteProp<Params, "details">>();
    const [image, setImage] = useState(params?.image);
    const navigation = useNavigation<StackNavigationProp<StackParams>>();

    const { removeReview } = useContext(GameReviewContext);

    // set title of header per review
    useEffect(() => {
        navigation.setOptions({ title: params?.title, headerTitleStyle: { left: 16, right: 16 } });
    }, []);

    return (
        <View style={globalStyles.container}>
            <ItemCard>
                {/* Start of review details */}
                <View>
                    <CstmImageHandler image={image} isAdding={false} setImage={setImage} />
                    <View style={styles.detailsContainer}>
                        {/* Start of title */}
                        <Text style={globalStyles.titleText}>
                            Title: <Text style={globalStyles.normalText}>{params?.title}</Text>
                        </Text>
                        {/* End of title */}

                        {/* Start of Review */}
                        <View>
                            <Text style={globalStyles.titleText}>Review: </Text>
                            <Text style={globalStyles.normalText}>{params?.body}</Text>
                        </View>
                        {/* End of Review */}

                        {/* Start of Rating */}
                        <View style={styles.ratingContainer}>
                            <Text style={globalStyles?.titleText}>Rating:</Text>
                            <Rating rating={params?.rating?.toString()} />
                        </View>
                        {/* End of Rating */}
                    </View>
                </View>
                {/* End of review details */}

                {/* Start of ConfirmDelete */}
                <ConfirmDelete
                    deleteFunction={removeReview}
                    titleOfItem={params?.title}
                    idOfItem={params?._id}
                />
                {/* End of ConfirmDelete */}
            </ItemCard>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        display: "flex",
        gap: 10,
    },
    ratingContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 8,
    },
});
