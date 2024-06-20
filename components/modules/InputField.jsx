import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../utils/responsive"
import { useTheme } from '@react-navigation/native';

export default function InputField({ placeholder, secureTextEntry, value, onChange, onBlur }) {
    const {
        dark, colors
    } = useTheme();
   
    return (
        <View style={styles.field}>
            <TextInput
                secureTextEntry={secureTextEntry}
               
                style={[styles.input,{  fontFamily:"IRANYekanXFaNum-Medium",backgroundColor:colors.inputfield}]}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                placeholderTextColor={'#939496'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: ScaledSize(45),
        paddingLeft: ScaledSize(10),
        flexDirection: "row",
        backgroundColor: "#e9e9e9a2",
        borderRadius: ScaledSize(8),
        fontSize: ScaledSize(15),
        marginTop: ScaledSize(10),
        textAlign: "right",
       
    },
});