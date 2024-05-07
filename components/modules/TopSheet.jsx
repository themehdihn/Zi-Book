import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { ScaledSize, ScaledHeight, ScaledWidth } from "../../utils/responsive"
import { useTheme } from '@react-navigation/native';
import ZiText from './ZiBookText'
import { Icon } from './AppIcon';
import Animated, {
    useSharedValue,
    withSpring,
    useAnimatedStyle,
    withTiming
} from 'react-native-reanimated';

export default function TopSheet({ children, animatedStyle, onClose, height }) {
    const {
        dark, colors
    } = useTheme();
    return (
        <Animated.View style={[styles.top_modal, animatedStyle, { backgroundColor: colors.primary, height: height, }]}>
            <TouchableOpacity style={{ flexDirection: "row" }} onPress={onClose}>
                <Icon name="close" size={25} color={colors.text} />
            </TouchableOpacity>
            {/* Icon */}
            {children}
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    top_modal: {
        width: '100%',
        backgroundColor: 'white',
        zIndex: 9999989999999,
        elevation: 8,
        borderBottomLeftRadius: ScaledSize(20),
        borderBottomRightRadius: ScaledSize(20),
        position: 'absolute',
        paddingHorizontal: ScaledSize(25),
        overflow: 'hidden',
        paddingVertical: ScaledSize(30),
        flexDirection: 'column',
    },
});
