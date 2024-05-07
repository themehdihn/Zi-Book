import React from 'react'
import { View, StyleSheet } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { ScaledSize } from '../../../utils/responsive'
import { useTheme } from '@react-navigation/native';

export default function Category() {
    const {
        dark, colors,
    } = useTheme();
    
    return (
        <SkeletonPlaceholder backgroundColor={colors.skeletonPlaceholder} borderRadius={4} >
            <View style={styles.category_box}>
                <View style={styles.cat_cart} />
                <View style={styles.cat_cart} />
                <View style={styles.cat_cart} />
                <View style={styles.cat_cart} />
            </View>
        </SkeletonPlaceholder>
    )
}

const styles = StyleSheet.create({
    category_box: {
        flexDirection: "row",
    },
    cat_cart: {
        width: ScaledSize(100),
        paddingHorizontal: ScaledSize(20),
        height: ScaledSize(45),
        borderRadius: ScaledSize(10),
        alignItems: "center",
        marginHorizontal: ScaledSize(8),
    }
});