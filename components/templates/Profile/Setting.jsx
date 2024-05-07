import React from 'react'
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, ScrollView, Image, FlatList, SafeAreaView, TouchableWithoutFeedback, } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../utils/responsive"
import ZiText from '../../modules/ZiBookText'
import { Icon } from '../../modules/AppIcon';
import Option from './Option';

export default function Setting() {
    const {
        dark, colors
      } = useTheme();
    return (
        <View style={{ marginTop: ScaledSize(25) }}>
            <ZiText fontFamily="IRANYekanXFaNum-Medium" size="15" styles={{ color: colors.text }}>تنظیمات</ZiText>
            <View style={[styles.contianer,{backgroundColor:colors.card}]}>
                <Option title="تغییر کلمه عبور" icon="key"/>
                <Option title="بروز رسانی اپلیکیشن" icon="refresh1"/>
            </View>
            {/* Setting Container */}
        </View>
    )
}

const styles = StyleSheet.create({
    contianer: {
        marginTop: ScaledSize(20),
        paddingVertical: ScaledSize(5),
        borderRadius: ScaledSize(8)
    }
});