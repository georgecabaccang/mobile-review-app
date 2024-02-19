import React, { SetStateAction } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/Global";
import * as ImagePicker from "expo-image-picker";

interface IImageProps {
    image: string | null;
    setImage?: React.Dispatch<SetStateAction<string | null>>;
    isAdding: boolean;
}

export default function CstmImageHandler({ image, setImage, isAdding }: IImageProps) {
    const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

    // handles choosing of image from library
    const imagePicker = async () => {
        // ask permission to access images library if it is
        // the first time the app is asking for permission
        if (!status?.granted) {
            await requestPermission();
        }

        // check if app has permission to images library
        if (!status?.granted) return;

        // main handler of choosing of image in library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage && setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            {image && (
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../assets/images/no-image.jpg")}
                        style={{ height: 200, width: 200, borderRadius: 5, position: "absolute" }}
                    />
                    <Image
                        source={{ uri: image }}
                        style={{ height: 200, width: 200, borderRadius: 5 }}
                    />
                </View>
            )}
            {isAdding && (
                <View style={styles.chooseImageButton}>
                    <TouchableOpacity onPress={imagePicker}>
                        <Text style={styles.chooseImageButtonText}>
                            {image ? "Change Image" : "Choose Image"}
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    imageContainer: {
        backgroundColor: "gray",
        elevation: 8,
        borderRadius: 5,
    },
    chooseImageButton: {
        backgroundColor: "steelblue",
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 5,
        elevation: 3,
    },
    chooseImageButtonText: {
        fontWeight: "bold",
        color: "white",
    },
});
