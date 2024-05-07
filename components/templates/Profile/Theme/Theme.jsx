import React, { useState, useContext } from 'react'
import { View, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native'
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../../utils/responsive"
import ZiText from '../../../modules/ZiBookText'
import { Icon } from '../../../modules/AppIcon';
import { useTheme } from '@react-navigation/native';
import { useThemeContext } from '../../../../context/ColorModeContext';

export default function Theme() {

    const { darkModeHandler, lightModeHandler } = useThemeContext();
    const {colors} = useTheme();

    return (
        <View style={{ marginTop: ScaledSize(25) }}>
            <ZiText fontFamily="IRANYekanXFaNum-Medium" size="15" styles={{ color: colors.text }}>ظاهر برنامه</ZiText>
            <View style={styles.theme_container}>
                <TouchableOpacity style={[styles.dark_btn, { backgroundColor: '#33364a' }]} onPress={darkModeHandler}>
                    <Icon
                        name="dark"
                        size={25}
                        color={'#fff'}
                        style={{
                        }}
                    />
                    <ZiText fontFamily="IRANYekanXFaNum-Regular" size="12" styles={{ color: '#fff', marginLeft: ScaledSize(10), }}>حالت شب</ZiText>
                </TouchableOpacity>
                {/* Dark Btn */}
                <TouchableOpacity style={styles.light_btn} onPress={lightModeHandler}>
                    <Icon
                        name="light"
                        size={25}
                        color="#1a242b"
                    />
                    <ZiText fontFamily="IRANYekanXFaNum-Regular" size="12" styles={{ color: "#1a242b", marginLeft: ScaledSize(10), }}>حالت روز</ZiText>
                </TouchableOpacity>
                {/* Light Btn */}
            </View>
            {/* Theme Contianer */}
        </View>
    )
}

const styles = StyleSheet.create({
    theme_container: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        paddingTop: ScaledSize(20),
    },
    light_btn: {
        flexDirection: "row",
        alignItems: "center",
        height: ScaledSize(50),
        flexGrow: 1,
        justifyContent: "center",
        backgroundColor: "white",
        marginRight: ScaledSize(5),
        borderRadius: ScaledSize(8)
    },
    dark_btn: {
        flexDirection: "row",
        alignItems: "center",
        height: ScaledSize(50),
        flexGrow: 1,
        justifyContent: "center",
        marginLeft: ScaledSize(5),
        borderRadius: ScaledSize(8)
    }
});