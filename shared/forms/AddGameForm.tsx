import { Formik, FormikValues } from "formik";
import React, { SetStateAction, useContext, useState } from "react";
import { Text, View } from "react-native";
import { ZodError, z } from "zod";
import Input from "../inputs/Input";
import { globalStyles } from "../../styles/Global";
import CstmButton from "../CstmButton";
import CstmImageHandler from "../CstmImageHandler";
import { GameReviewContext, Review } from "../../store/GameReviews";

interface IAddGameFormProps {
    toggleFunction: React.Dispatch<SetStateAction<boolean>>;
}

export default function AddGameForm({ toggleFunction }: IAddGameFormProps) {
    const [image, setImage] = useState<string | null>(null);
    const [imageError, setImageError] = useState<string | null>(null);
    const [ratingError, setRatinngError] = useState<string | undefined>("");

    const { addReview } = useContext(GameReviewContext);

    const onSubmit = (gameDetails: Review) => {
        // check if user has chosen an image, return if hasn't
        if (!image) {
            setImageError("Please choose an image.");
            return;
        }

        // check if user entered a integer, return if hasn't
        if (isNaN(+gameDetails.rating)) {
            setRatinngError("Enter digits.");
            return;
        }

        // check if user entered a number between 1 and 5, return if hasn't
        if (+gameDetails.rating > 5 || +gameDetails.rating < 0) {
            setRatinngError("Please enter a number between 1 and 5.");
            return "5";
        }

        addReview(gameDetails);
        toggleFunction(false);
    };

    // zod schema for validation
    const validateFormSchema = z.object({
        image: z.string(),
        title: z.string().min(8, "Must be at least 8 characters long."),
        body: z
            .string()
            .min(25, "Must be at least 25 characters long.")
            .max(250, "Must be less than 250 characters."),
        rating: z.string().min(1, "Please enter a rating."),
    });

    // handles zod validation of fields
    const validateForm = (values: FormikValues) => {
        try {
            validateFormSchema.parse(values);
        } catch (error) {
            if (error instanceof ZodError) {
                return error.formErrors.fieldErrors;
            }
        }
    };

    type IIntialFormikValues = z.infer<typeof validateFormSchema>;

    const initialValues: IIntialFormikValues = {
        image: "",
        title: "",
        body: "",
        rating: "",
    };

    return (
        <Formik
            initialValues={initialValues}
            validate={validateForm}
            onSubmit={(value) => {
                onSubmit({
                    _id: `${Math.floor(Math.random() * 1000)}-${value.title}-${image}`,
                    image: image,
                    title: value.title,
                    body: value.body,
                    rating: value.rating,
                });
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={{ display: "flex", gap: 14 }}>
                    {/* Start of Image handling */}
                    <CstmImageHandler image={image} setImage={setImage} isAdding={true} />
                    {imageError && <Text style={globalStyles.errorMessage}>{imageError}</Text>}
                    {/* End of Image handling */}

                    {/* Start of input fields */}
                    <Input
                        label="Title"
                        field={"title"}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.title}
                        error={errors.title}
                        touched={touched.title}
                    />
                    <Input
                        label="Desrciption"
                        field={"body"}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.body}
                        error={errors.body}
                        touched={touched.body}
                    />
                    <Input
                        label="Rating"
                        field={"rating"}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.rating}
                        error={errors.rating ?? ratingError}
                        inputType="numeric"
                        touched={touched.rating}
                    />
                    {/* End of input fields */}

                    {/* Start of buttons */}
                    <View style={globalStyles.buttonsContainer}>
                        <CstmButton title="ADD GAME" onPress={() => handleSubmit()} />
                        <CstmButton title="CANCEL" onPress={() => toggleFunction(false)} />
                    </View>
                    {/* End of buttons */}
                </View>
            )}
        </Formik>
    );
}
