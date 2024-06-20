import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import ZiText from '../components/modules/ZiBookText'
import { ScaledSize, ScaledWidth, ScaledHeight } from "../utils/responsive"
import { Icon } from '../components/modules/AppIcon';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useDispatch, useSelector } from "react-redux";



export default function ChangePassScreen({ navigation }) {

    const { colors } = useTheme();
  
    useEffect(() => {
    }, [])

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    category_container: {
        marginTop: ScaledSize(25),
        marginHorizontal: ScaledSize(20),
    }
});
