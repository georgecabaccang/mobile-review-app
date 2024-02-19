import React, { PropsWithChildren, createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Review = {
    _id: string;
    title: string;
    body: string;
    rating: string;
    image: string | null;
};

type ReviewContext = {
    reviews: Review[];
    addReview: (review: Review) => void;
    removeReview: (_id: string) => void;
};

export const GameReviewContext = createContext<ReviewContext>({
    reviews: [],
    addReview: () => {},
    removeReview: () => {},
});

export default function GameReviews({ children }: PropsWithChildren) {
    const [reviews, setReviews] = useState<Review[]>([]);

    // Retrieve data from local storage
    const getStoredGameReviews = async () => {
        try {
            // get data from local storage
            const storedReviews = await AsyncStorage.getItem("gameReviews");

            // check if data is not null
            if (storedReviews) {
                // parse data to convert to array
                const prasedData = await JSON.parse(storedReviews);

                // update state
                setReviews(prasedData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Add a new Review
    const addReview = async (review: Review) => {
        try {
            // make copy of reviews instead of using state, since state is asyncronous
            // and insert new review
            const copyOfStateReviews = [review, ...reviews];

            // convert new array to JSON format
            const stringifiedReviews = JSON.stringify(copyOfStateReviews);

            // save updated list/array to local storage
            await AsyncStorage.setItem("gameReviews", stringifiedReviews);

            // retrieve updated saved data from local storage
            getStoredGameReviews();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getStoredGameReviews();
    }, []);

    // Delete Selected Review
    const removeReview = async (_id: string) => {
        try {
            // make copy of reviews instead of using state, since state is asyncronous
            const copyOfStateReviews = [...reviews];

            // find index of review to be deleted
            const indexOfReview = copyOfStateReviews.findIndex((reviewCopy) => {
                return reviewCopy._id === _id;
            });

            // remove review from array of copyOfStateReviews
            copyOfStateReviews.splice(indexOfReview, 1);

            // convert new array to JSON format
            const stringifiedReviews = JSON.stringify(copyOfStateReviews);

            // save updated list/array to local storage
            await AsyncStorage.setItem("gameReviews", stringifiedReviews);

            // retrieve updated saved data from local storage
            getStoredGameReviews();
        } catch (error) {
            console.log(error);
        }
    };

    const gameReviewContextValues = {
        reviews: reviews,
        addReview: addReview,
        removeReview: removeReview,
    };

    return (
        <GameReviewContext.Provider value={gameReviewContextValues}>
            {children}
        </GameReviewContext.Provider>
    );
}
