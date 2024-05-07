import React from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../utils/responsive"
import { useTheme } from '@react-navigation/native';
import ZiText from './ZiBookText'


export default function SubmitBtn({ title }) {
    const {
        dark, colors
    } = useTheme();

    return (
        <View style={styles.submit_btn}>
            <ZiText fontFamily="IRANYekanXFaNum-Medium" size="13" styles={{ color: colors.text }}>
                {title}
            </ZiText>
        </View>
    )
}

const styles = StyleSheet.create({
    submit_btn: {
        justifyContent: "center",
        alignItems: "center",
        height: ScaledSize(45),
        borderRadius: ScaledSize(8),
        backgroundColor: "#00cc66",
        flexDirection: "row",
        fontSize: 12,
        marginTop: ScaledSize(20),
        overflow:"hidden"
    },
});