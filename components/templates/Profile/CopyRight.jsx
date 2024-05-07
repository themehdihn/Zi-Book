import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../utils/responsive"
import ZiText from '../../modules/ZiBookText'

export default function CopyRight() {
    const {
        dark, colors
      } = useTheme();
    return (
        <View style={styles.contianer}>
            <ZiText fontFamily="subset-Samet-Bold.9b73fb49" size="30" styles={{ color: "#00cc66" }}>
                زیبوک
            </ZiText>
            <ZiText fontFamily="IRANYekanXFaNum-Medium" size="10" styles={{ color: colors.text }}>
                    Made with 💚 in Iran
            </ZiText>
        </View>
    )
}

const styles = StyleSheet.create({
    contianer: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: ScaledSize(15),
    }
});