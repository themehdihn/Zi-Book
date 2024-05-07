import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../../utils/responsive"
import ZiText from '../../../modules/ZiBookText'
import { Icon } from '../../../modules/AppIcon';
import { useTheme } from '@react-navigation/native';

export default function TopCatItem({ title, icon }) {

    const {
        dark, colors
    } = useTheme();

    return (
        <View style={[styles.topcart, { backgroundColor: colors.card }]}>
            <Icon
                name={icon}
                size={25}
                color="#00cc66"
            />
            <ZiText fontFamily="IRANYekanXFaNum-Regular" size="12" styles={{ color: colors.text, marginLeft: ScaledSize(10) }} >
                {title}
            </ZiText>
        </View>
    )
}

const styles = StyleSheet.create({
    topcart: {
        flexDirection: "row",
        paddingHorizontal: ScaledSize(20),
        height: ScaledSize(45),
        borderRadius: ScaledSize(10),
        alignItems: "center",
        marginRight: ScaledSize(8),
    }
});