import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ScaledSize, ScaledHeight, ScaledWidth } from "../../utils/responsive"
import { useTheme } from '@react-navigation/native';

export default function ProgressBar({ progress }) {
    const { colors, } = useTheme();

    return (
        <View style={[styles.progressbar, { width: `${parseInt(progress)}%`, backgroundColor: colors.progress_book }]} />
    )
}

const styles = StyleSheet.create({
    progressbar: {
        height: ScaledSize(10),
        justifyContent: "center",
    }
});