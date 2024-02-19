import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import Titile from "./Titile";
import Review from "./Review";
import Ratings from "./Ratings";
import CstmImageHandler from "../../shared/CstmImageHandler";

export default function GameDetails({ children }: PropsWithChildren) {
    return <View style={styles.detailsContainer}>{children}</View>;
}

GameDetails.Image = CstmImageHandler;
GameDetails.Title = Titile;
GameDetails.Review = Review;
GameDetails.Ratings = Ratings;

const styles = StyleSheet.create({
    detailsContainer: {
        display: "flex",
        gap: 10,
    },
});
