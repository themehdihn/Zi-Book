import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { ScaledSize, ScaledHeight, ScaledWidth } from "../../../utils/responsive"
import { useTheme } from '@react-navigation/native';
import ZiText from '../../modules/ZiBookText'
import { Icon } from '../../modules/AppIcon';
import Animated, {
    useSharedValue,
    withSpring,
    useAnimatedStyle,
    withTiming
} from 'react-native-reanimated';

export default function IndexMenu({ cfi, handleChapter }) {
    const {
        dark, colors
    } = useTheme();

    const sendToBookView = (item) => {
        handleChapter(item)
    }

    return (
        <View>
            <View style={styles.list}>
                <ZiText fontFamily="IRANYekanXFaNum-DemiBold" size="22" styles={{ color: colors.text }}>فهرست</ZiText>
            </View>
            {/* List */}
            <ScrollView showsVerticalScrollIndicator={false} >
                {cfi.toc ? (
                    cfi.toc.map((item, index) => (
                        <TouchableOpacity onPress={() => {
                            sendToBookView(item.href)
                               
                        }} key={index} style={[styles.list_container, { borderColor: colors.border }]}>
                            <ZiText fontFamily="IRANYekanXFaNum-Regular" size="15" styles={{ color: colors.text, textAlign: 'left' }}>{item.label.trim()}</ZiText>
                        </TouchableOpacity>
                        // List Container
                    ))
                ) : (
                    <Text>Loading TOC data...</Text>
                )}
            </ScrollView>
            {/* Show Items of List */}
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        paddingTop: ScaledSize(20),
        paddingVertical: ScaledSize(10),
    },
    list_container: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingVertical: ScaledSize(20),
        borderBottomWidth: 1,
    }
});
