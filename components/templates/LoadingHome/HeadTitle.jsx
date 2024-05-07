import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { ScaledSize } from '../../../utils/responsive'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function HeadTitle() {
    const {
        dark, colors,
    } = useTheme();
    
    return (
        <SkeletonPlaceholder backgroundColor={colors.skeletonPlaceholder}  borderRadius={4} >
            <View style={styles.headtitle_box}>
                <View style={styles.title} />
                <View style={styles.show_more} />
            </View>
        </SkeletonPlaceholder>
    )
}

const styles = StyleSheet.create({
    headtitle_box: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: ScaledSize(20),
    },
    title: {
        width: ScaledSize(110),
        height: ScaledSize(40)
    },
    show_more: {
        width: ScaledSize(90),
        height: ScaledSize(40)
    }
});