import React from 'react'
import { View, StyleSheet } from 'react-native';
import ZiText from '../modules/ZiBookText'
import { ScaledSize } from '../../utils/responsive';
import { useTheme } from '@react-navigation/native';

export default function TransferText({title}) {
    return (
        <View style={styles.transfer_text}>
            <ZiText fontFamily="IRANYekanXFaNum-DemiBold" size="11" styles={{ color: "#8d8d8d" }}>
               {title}
            </ZiText>
        </View>
    )
}

const styles = StyleSheet.create({
    transfer_text: {
        alignItems: "center",
        marginTop: ScaledSize(20)
    }
});