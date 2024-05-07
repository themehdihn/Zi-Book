import { StyleSheet, View } from 'react-native';
import React from 'react';
import Animated, { useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../../utils/responsive"

export default function Pagination({ data, x, size }) {
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, i) => {
        const animatedDotStyle = useAnimatedStyle(() => {
          const widthAnimation = interpolate(
            x.value,
            [(i - 1) * size, i * size, (i + 1) * size],
            [10, 20, 10],
            Extrapolate.CLAMP,
          );
          const opacityAnimation = interpolate(
            x.value,
            [(i - 1) * size, i * size, (i + 1) * size],
            [0.5, 1, 0.5],
            Extrapolate.CLAMP,
          );
          return {
            width: widthAnimation,
            opacity: opacityAnimation,
          };
        });
        return (
          <Animated.View style={[styles.dots, animatedDotStyle]} key={i} />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    position: "absolute",
    bottom: ScaledSize(0),
    alignSelf: "center",
    flexDirection: 'row-reverse',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dots: {
    height: 7,
    backgroundColor: '#00cc66',
    marginHorizontal: 2,
    borderRadius: 5,
    marginVertical: ScaledSize(10),
  },
});
