import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../../utils/responsive"
import ZiText from '../../../modules/ZiBookText'
import { Icon } from '../../../modules/AppIcon';

export default function InfoBox({ title, color, icon }) {
    const {
        dark, colors
    } = useTheme();
    return (
        <View style={[styles.infobox, { backgroundColor: colors.card }]}>
            <Icon
                name={icon}
                size={25}
                color={color}
            />
            <ZiText fontFamily="IRANYekanXFaNum-Regular" size="12" styles={{ color: colors.text }} >
                {title}
            </ZiText>
        </View>
    )
}

const styles = StyleSheet.create({
    infobox: {
        width: ScaledSize(100),
        height: ScaledSize(100),
        borderRadius: ScaledSize(10),
        alignItems: "center",
        justifyContent: "space-evenly",
    }
});