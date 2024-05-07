import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from '@react-navigation/native';

const Screen = ({ children, style }) => {
    const { colors } = useTheme();
    return <View style={[styles.screen, style, { backgroundColor: colors.background }]}>{children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
