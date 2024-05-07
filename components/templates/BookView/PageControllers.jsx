import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useReader } from '@epubjs-react-native/core';
import { useTheme } from '@react-navigation/native';
import { ScaledSize, ScaledHeight, ScaledWidth } from "../../../utils/responsive"
import { Icon } from '../../modules/AppIcon';
import ZiText from '../../modules/ZiBookText'

export default function PageControllers({ goNext, goPrev }) {
    const { colors } = useTheme();

    return (
        <View style={styles.controller_btn}>
            <TouchableOpacity onPress={goPrev} style={[styles.prevbtn,{backgroundColor:colors.prev_btn}]}>
                <Icon
                    name="zi-right"
                    size={20}
                    color={colors.prev_btn_txt}
                    style={{
                        marginRight: ScaledSize(10),
                    }}
                />
                <ZiText fontFamily="IRANYekanXFaNum-Medium" size="15" styles={{ color: colors.prev_btn_txt }}>صفحه قبل</ZiText>
            </TouchableOpacity>
            {/* Prev pages */}

           

            <TouchableOpacity onPress={goNext} style={[styles.nextbtn,{backgroundColor:colors.next_btn}]}>
                <Icon
                    name="zi-left"
                    size={20}
                    color={colors.next_btn_txt}
                    style={{
                        marginLeft: ScaledSize(10),
                    }}
                />
                <ZiText fontFamily="IRANYekanXFaNum-Medium" size="15" styles={{ color: colors.next_btn_txt }}>صفحه بعد</ZiText>
            </TouchableOpacity>
            {/* Next pages */}
        </View>
    )
}

const styles = StyleSheet.create({
    controller_btn: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: ScaledSize(8)
    },
    nextbtn: {
        flexDirection: "row-reverse",
        width: ScaledSize(155),
        height: ScaledSize(50),
        backgroundColor: "#1c1e2b",
        borderTopRightRadius: ScaledSize(10),
        borderBottomRightRadius: ScaledSize(10),
        justifyContent: "center",
        alignItems: "center",
    },
    prevbtn: {
        flexDirection: "row",
        width: ScaledSize(155),
        height: ScaledSize(50),
        backgroundColor: "#33364a",
        borderTopLeftRadius: ScaledSize(10),
        borderBottomLeftRadius: ScaledSize(10),
        justifyContent: "center",
        alignItems: "center"
    },
});