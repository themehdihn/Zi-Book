import React from 'react'
import { View, StyleSheet } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { ScaledSize } from '../../../utils/responsive'
import { useTheme } from '@react-navigation/native';

export default function Carousel() {
    const {
        dark, colors,
    } = useTheme();
    
    return (
        <SkeletonPlaceholder backgroundColor={colors.skeletonPlaceholder} borderRadius={4} >
            <View style={styles.carousel} />
        </SkeletonPlaceholder>
    )
}

const styles = StyleSheet.create({
    carousel: {
        height: ScaledSize(177),
        marginHorizontal: ScaledSize(10)
    }
});