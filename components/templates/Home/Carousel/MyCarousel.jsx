import { StyleSheet, View, Image, useWindowDimensions } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedRef } from 'react-native-reanimated';
import Pagination from './Pagination';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../../utils/responsive"


export default function MyCarousel({ data, autoPlay, pagination }) {

  const scrollViewRef = useAnimatedRef(null);
  const interval = useRef();
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);
  const newData = [
    { key: 'spacer-left' },
    ...data,
    { key: 'spacer-right' },
  ];
  const { width } = useWindowDimensions();
  const SIZE = width * 1;
  const SPACER = (width - SIZE) / 2.8;
  const x = useSharedValue(0);
  const offSet = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });

  useEffect(() => {
    if (isAutoPlay === true) {
      let _offSet = SIZE * (data.length - 1);
      interval.current = setInterval(() => {
        if (_offSet <= 0) {
          _offSet = SIZE * (data.length - 1);
        } else {
          _offSet -= SIZE;
        }
        scrollViewRef.current.scrollTo({ x: _offSet, y: 0, animated: true });
      }, 6000);
    } else {
      clearInterval(interval.current);
    }
  }, [SIZE, SPACER, isAutoPlay, data.length, offSet.value, scrollViewRef]);

  return (
    <View>
      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={onScroll}
        onScrollBeginDrag={() => {
          setIsAutoPlay(false);
        }}
        onMomentumScrollEnd={e => {
          offSet.value = e.nativeEvent.contentOffset.x;
          setIsAutoPlay(autoPlay);
        }}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={SIZE}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}>
        {newData.map((item, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks

          if (!item.url) {
            return <View style={{ width: SPACER }} key={index} />;
          }
          return (
            <View style={{ width: SIZE }} key={index}>
              <Animated.View style={[styles.imageContainer]}>
                <Image
                  source={{ uri: item.url }}
                  style={styles.image}
                />
              </Animated.View>
            </View>
          );
        })}
      </Animated.ScrollView>
      {pagination && <Pagination data={data} x={x} size={SIZE} />}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 10
  },
  image: {
    width: "100%",
    height: ScaledSize(177),
    resizeMode: "cover",
  },
});