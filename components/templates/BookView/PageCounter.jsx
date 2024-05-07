import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ScaledSize, ScaledHeight, ScaledWidth } from "../../../utils/responsive"
import ZiText from '../../modules/ZiBookText'

export default function PageCounter({ currentPageNum, totalPageNum }) {
    const { colors } = useTheme();

    return (
        <View style={styles.page_container}>
            <View style={[styles.page_counter,{backgroundColor:colors.page_counter}]}>
                <ZiText fontFamily="IRANYekanXFaNum-Regular" size="12" styles={{ color: colors.page_counter_txt }}>صفحه {currentPageNum} از {totalPageNum === '0' ? 'wait' : totalPageNum}</ZiText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page_container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: ScaledSize(20),
        pointerEvents:"none",
        left: 0,
        right:0,
        zIndex: 999
    },
    page_counter: {
        width: ScaledSize(105),
        height: ScaledSize(22),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: ScaledSize(10)
    }
});