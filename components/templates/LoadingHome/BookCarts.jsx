import React from 'react'
import { View, StyleSheet } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { ScaledSize } from '../../../utils/responsive'
import { useTheme } from '@react-navigation/native';

export default function BookCarts() {
  const {
    dark, colors,
  } = useTheme();
  
  return (
    <SkeletonPlaceholder backgroundColor={colors.skeletonPlaceholder} borderRadius={4} >
      <View style={styles.book_box}>
        <View style={styles.book_cart} />
        <View style={styles.book_cart} />
        <View style={styles.book_cart} />
      </View>
    </SkeletonPlaceholder>
  )
}

const styles = StyleSheet.create({
  book_box: {
    flexDirection: "row",
    paddingHorizontal: ScaledSize(20),
  },
  book_cart: {
    width: ScaledSize(170),
    height: ScaledSize(235),
    borderRadius: ScaledSize(10),
    alignItems: "center",
    justifyContent: "space-evenly",
    marginRight: ScaledSize(15),
    marginBottom: ScaledSize(15),
  }
});