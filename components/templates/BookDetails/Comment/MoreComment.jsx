import React, { useState, useRef, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@react-navigation/native';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../../utils/responsive"
import ZiText from '../../../modules/ZiBookText'

export default function MoreComment() {

    const {
        dark, colors
      } = useTheme();

    return (
        <View style={[styles.more_comment,{borderColor: colors.border}]}>
            <ZiText fontFamily="IRANYekanXFaNum-Regular" size="13" styles={{ color: colors.text }}>
                نظرات بیشتر
            </ZiText>
        </View>
    )
}

const styles = StyleSheet.create({
    more_comment: {
        alignItems: "center",
        paddingVertical: ScaledSize(15),
        width: "50%",
        borderWidth: 2,
        borderTopRightRadius: ScaledSize(10),
        borderBottomRightRadius: ScaledSize(10),
        
    }
});