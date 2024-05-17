import React, { useState, useRef, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useTheme, useNavigation } from '@react-navigation/native';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../../utils/responsive"
import ZiText from '../../../modules/ZiBookText'
import { Icon } from '../../../modules/AppIcon';

export default function CommentBody({ name, rate, description }) {
    const { colors } = useTheme();
    return (
        <View style={[styles.comment, { backgroundColor: colors.card }]}>
            <View style={styles.header}>
                <View style={styles.profile}>
                    <View style={styles.img_container}>
                        <Image style={styles.img} source={{ uri: "https://zibook.storage.iran.liara.space/download.png" }} />
                    </View>
                    {/* Img */}
                    <ZiText fontFamily="IRANYekanXFaNum-Medium" size="13" styles={{ color: colors.text, marginLeft: ScaledSize(10) }}>{name}</ZiText>
                </View>
                {/* Profile Section */}
                <View style={styles.rate}>
                    <Icon
                        name="star-2"
                        size={15}
                        color='#fdbc54'
                        style={{ marginLeft: ScaledSize(4), }}
                    />
                    <ZiText fontFamily="IRANYekanXFaNum-Medium" size="13" styles={{ color: colors.text, paddingTop: ScaledSize(4) }}>{rate}</ZiText>
                </View>
                {/* Rate Section */}
            </View>
            {/* End Header */}
            <View style={styles.body}>
                <ZiText ellipsis={8} fontFamily="IRANYekanXFaNum-Regular" size="13" styles={{ color: colors.text, textAlign: "left", }}>
                    {description}
                </ZiText>
            </View>
            {/* Comment Body */}
        </View>
    )
}

const styles = StyleSheet.create({
    comment: {
        borderRadius: ScaledSize(8),
        padding: ScaledSize(15),
        marginBottom: ScaledSize(10)
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    profile: {
        flexDirection: "row",
        alignItems: "center"
    },
    img_container: {
        width: ScaledSize(30),
        height: ScaledSize(30)
    },
    img: {
        width: "100%",
        height: "100%",
        borderRadius: ScaledSize(100),
    },
    rate: {
        flexDirection: "row-reverse",
        alignItems: "center"
    },
    body: {
        paddingTop: ScaledSize(20)
    },

});