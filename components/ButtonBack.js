import React from "react";
import { View } from "react-native";
import Button from './Button';
import { constIcons } from "../constants";

export default function ButtonBack({onPress}) {

    return (
        <View>
            <Button
                label="back to main page"
                iconType={constIcons.backToMain}
                onPress={onPress}
            />
        </View>
    );
}
