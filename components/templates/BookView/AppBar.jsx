import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Pressable } from 'react-native';
import { useReader } from '@epubjs-react-native/core';
import { useTheme } from '@react-navigation/native';
import { ScaledSize, ScaledHeight, ScaledWidth } from "../../../utils/responsive"
import { Icon } from '../../modules/AppIcon';

export default function AppBar({ onOpenIndexMenu, onOpenSettingModal,navigationToDetailes }) {
    const { colors } = useTheme();

    return (
        <View style={[styles.appbar, { backgroundColor: colors.primary, shadowColor: colors.shadow }]}>
            <TouchableOpacity style={styles.back_btn} onPress={navigationToDetailes}>
                <Icon
                    name="zi-right"
                    size={25}
                    color={colors.text}
                />
            </TouchableOpacity>
            {/* Back Button */}
            <View style={styles.settings_btn}>
                <TouchableOpacity onPress={onOpenIndexMenu}>
                    <Icon
                        name="indexx"
                        size={25}
                        color={colors.text}
                    />
                </TouchableOpacity>
                {/* Index Menu */}
                <TouchableOpacity onPress={onOpenSettingModal}>
                    <Icon
                        name="settings"
                        size={25}
                        color={colors.text}
                    />
                </TouchableOpacity>
                {/* Setting Menu */}
            </View>
            {/* Setting Buttons */}
        </View>
    )
}

const styles = StyleSheet.create({
    appbar: {
        width: "100%",
        height: ScaledSize(60),
        elevation: 8,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: ScaledSize(30),
        marginBottom: ScaledSize(10),
    },
    back_btn: {
        alignItems: "center",
        justifyContent: "center"
    },
    settings_btn: {
        flexDirection: "row",
        width: ScaledWidth(80),
        justifyContent: "space-between",
    }
});
