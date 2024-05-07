import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated, ScrollView } from 'react-native'
import { ScaledSize, ScaledHeight, ScaledWidth } from "../../../../utils/responsive"
import { useTheme } from '@react-navigation/native';
import ZiText from '../../../modules/ZiBookText'

export default function SettingItem({ bgcolor, color, title }) {
    return (
        <View style={[styles.settingitem, { backgroundColor: bgcolor }]}>
            <ZiText fontFamily="IRANYekanXFaNum-DemiBold" size="13" styles={{ color: color }}>{title}</ZiText>
        </View>
    )
}

const styles = StyleSheet.create({
    settingitem: {
        width: ScaledSize(45),
        height: ScaledSize(45),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: ScaledSize(8),
        borderWidth: 1
    }
});