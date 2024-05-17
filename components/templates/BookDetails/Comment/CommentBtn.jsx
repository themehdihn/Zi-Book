import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { ScaledSize } from "../../../../utils/responsive"

export default function CommentBtn({ children }) {
    return (
        <View style={styles.btn_container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    btn_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: ScaledSize(20),
    }
});