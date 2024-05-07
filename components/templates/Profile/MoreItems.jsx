import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../utils/responsive"
import ZiText from '../../modules/ZiBookText'
import Option from './Option';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions, useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from "react-redux";
import { Logout } from '../../../redux/store/users';

export default function MoreItems() {
    const {
        dark, colors
    } = useTheme();
    const navigation = useNavigation();
    const dispath = useDispatch();

    const handelLogOut = () => {
        dispath(Logout())
        navigation.dispatch(StackActions.replace("login"))
    }
    return (
        <View style={{ marginTop: ScaledSize(25) }}>
            <ZiText
                fontFamily="IRANYekanXFaNum-Medium"
                size="15"
                styles={{ color: colors.text }}>
                موارد بیشتر
            </ZiText>

            <View style={[styles.contianer, { backgroundColor: colors.card }]}>
                <Option title="پشتیبانی" icon="support1" />

                <TouchableOpacity onPress={()=>navigation.navigate('about')}>
                    <Option title="درباره ی ما" icon="aboutus" />
                </TouchableOpacity>

                <TouchableOpacity onPress={handelLogOut}>
                    <Option title="خروج از حساب کاربری" icon="exit1" />
                </TouchableOpacity>
            </View>
            {/* Container */}
        </View>
    )
}
const styles = StyleSheet.create({
    contianer: {
        marginTop: ScaledSize(20),
        backgroundColor: "white",
        paddingVertical: ScaledSize(5),
        borderRadius: ScaledSize(8)
    }
});