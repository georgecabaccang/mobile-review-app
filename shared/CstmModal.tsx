import React, { PropsWithChildren } from "react";
import { Modal, StyleSheet, View } from "react-native";

interface ICstmModal extends PropsWithChildren {
    isOpen: boolean;
    title?: string;
    footer?: string;
}

export default function CstmModal({ children, title, footer, isOpen }: ICstmModal) {
    return (
        <Modal visible={isOpen} animationType="slide">
            <View style={styles.contentContainer}>
                <View>{children}</View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 24,
        paddingVertical: 42,
    },
});
