import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, StyleSheet, } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import ZiText from '../../../modules/ZiBookText'
import { Icon } from '../../../modules/AppIcon';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../../utils/responsive"

export default function CategoryCart({ name, icon }) {
    const {
        dark, colors
    } = useTheme();
    return (
        <View style={[styles.category_cart, { backgroundColor: colors.card }]}>
            <View style={styles.rightbox}>
                <View style={styles.icon}>
                    <Icon name={icon} size={30} color="#00cc66" />
                </View>
                {/* Icon */}
                <ZiText fontFamily="IRANYekanXFaNum-Regular" size="13" styles={{ color: colors.text }}>{name}</ZiText>
            </View>
            {/* Box */}
        </View>
    )
}

const styles = StyleSheet.create({
    category_cart: {
        flexDirection: 'row',

        width: ScaledSize(100),
        height: ScaledSize(100),
        borderRadius: ScaledSize(8),
        marginBottom: ScaledSize(10),
        margin: ScaledSize(10),
        alignItems: "center",
        justifyContent: "center"
    },

    rightbox: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",

        justifyContent: "space-evenly"
    },
    icon: {}
});
