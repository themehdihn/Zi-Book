import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import ZiText from '../../../modules/ZiBookText'
import { Icon } from '../../../modules/AppIcon';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../../utils/responsive"

export default function SearchCart({ bookName, coverUrl, writer }) {
    const {
        dark, colors
    } = useTheme();
    return (
        <View style={styles.search_cart}>
            <View style={styles.img_container}>
                <Image style={styles.img} source={{ uri: coverUrl }} />
            </View>
            {/* Img Container */}
            <View style={styles.book_title}>
                <View>
                    <ZiText fontFamily="IRANYekanXFaNum-Medium" size="11" styles={{ color: colors.text }}>{bookName}</ZiText>
                    <ZiText fontFamily="IRANYekanXFaNum-Regular" size="9" styles={{ color: "#989898", paddingTop: ScaledSize(5) }}>{writer}</ZiText>
                </View>
                {/* Top Content */}
                <View style={styles.more_info}>
                    <ZiText fontFamily="IRANYekanXFaNum-DemiBold" size="11" styles={{ color: "#00bfcd" }}>اطلاعات بیشتر</ZiText>
                    <Icon
                        name="chevron_left"
                        size={15}
                        color="#00bfcd"
                        style={{ marginLeft: ScaledSize(4) }}
                    />
                </View>
                {/* Bottom Content */}
            </View>
            {/* Book Info */}
        </View>
    )
}

const styles = StyleSheet.create({
    search_cart: {
        flexDirection: 'row',
        marginTop: ScaledSize(15)
    },
    img_container: {
        width: ScaledSize(65),
        height: ScaledSize(95),
        elevation: 3,
        position: "relative",
        borderRadius: ScaledSize(8),
        overflow: "hidden"
    },
    img: {
        width: "100%",
        height: "100%",
    },
    book_title: {
        justifyContent: "space-between",
        marginLeft: ScaledSize(10)
    },
    more_info: {
        flexDirection: "row",
        alignItems: "center"
    }
});