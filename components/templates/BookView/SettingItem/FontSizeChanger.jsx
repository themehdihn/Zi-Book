import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated, ScrollView } from 'react-native'
import { ScaledSize, ScaledHeight, ScaledWidth } from "../../../../utils/responsive"
import { Reader, ReaderProvider, useReader } from '@epubjs-react-native/core';
import { useTheme } from '@react-navigation/native';
import ZiText from '../../../modules/ZiBookText'
import { Icon } from '../../../modules/AppIcon';

export default function FontSizeChanger() {
    const { colors } = useTheme();
    const { changeFontSize } = useReader();

    const [defaultSizeText, setDefaultSizeText] = useState(100)


    // 
    const increaseFontSize = () => {
        if (defaultSizeText < 140) {
            let newFontSize = defaultSizeText + 20; 
            setDefaultSizeText(newFontSize); 
            changeFontSize(`${newFontSize}%`); 
            console.log("max",defaultSizeText)
          }
    };

    const reduceFontSize = () => {
        if (defaultSizeText <= 140 && defaultSizeText > 60) {
            let newFontSize = defaultSizeText - 20; 
            setDefaultSizeText(newFontSize); 
            changeFontSize(`${newFontSize}%`); 
            console.log("min",defaultSizeText)
        }
    }
    return (
        <View style={[styles.fontsize_contianer, { borderColor: colors.border_s1 }]}>
            <TouchableOpacity onPress={increaseFontSize}>
                <Icon
                    name="add"
                    size={20}
                    color={colors.text}
                />
            </TouchableOpacity>
            {/* Add Btn */}
            <ZiText fontFamily="IRANYekanXFaNum-Medium" size="13" styles={{ color: colors.text }}>{defaultSizeText}%</ZiText>
            <TouchableOpacity onPress={reduceFontSize}>
                <Icon
                    name="remove"
                    size={20}
                    color={colors.text}
                />
            </TouchableOpacity>
            {/* Mines Btn */}
        </View>
    )
}

const styles = StyleSheet.create({
    fontsize_contianer: {
        flexDirection: "row",
        width: ScaledSize(130),
        height: ScaledSize(40),
        borderWidth: 1,
        borderRadius: ScaledSize(8),
        justifyContent: "space-around",
        alignItems: "center"
    }
});