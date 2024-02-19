import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { globalStyles } from "../styles/Global";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";

import ItemCard from "../shared/ItemCard";
import CstmImageHandler from "../shared/CstmImageHandler";
import { GameReviewContext, Review } from "../store/GameReviews";

import { StackParams } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";
import ConfirmDelete from "../shared/ConfirmDelete";
import GameDetails from "../components/Details/GameDetails";

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
                    <GameDetails>
                        <CstmImageHandler image={image} isAdding={false} setImage={setImage} />
                        <GameDetails.Title>{params?.title}</GameDetails.Title>
                        <GameDetails.Review>{params?.body}</GameDetails.Review>
                        <GameDetails.Ratings>{params?.rating}</GameDetails.Ratings>
                    </GameDetails>
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
