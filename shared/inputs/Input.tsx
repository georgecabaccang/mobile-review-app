import React from "react";
import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";
import { globalStyles } from "../../styles/Global";

interface IFormikInputProps {
    label: string;
    field: string;
    error: string | undefined;
    value: string;
    inputType?: KeyboardTypeOptions;
    touched: boolean | undefined;

    handleBlur: {
        (e: React.FocusEvent<any, Element>): void;
        <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
    };
    handleChange: {
        (e: React.ChangeEvent<any>): void;
        <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any>
            ? void
            : (e: string | React.ChangeEvent<any>) => void;
    };
}

export default function Input({
    label,
    field,
    handleBlur,
    handleChange,
    error,
    value,
    inputType,
    touched,
}: IFormikInputProps) {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                onBlur={handleBlur(field)}
                onChangeText={handleChange(field)}
                value={value}
                style={globalStyles.input}
                selectionColor={"black"}
                keyboardType={inputType}
            />
            {error && touched && <Text style={globalStyles.errorMessage}>{error}</Text>}
        </View>
    );
}
