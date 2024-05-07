import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../../utils/responsive"
import { Icon } from '../../AppIcon';

export default function PaidSubscription() {
  
    return (
        <View style={[styles.paid_subscription, { backgroundColor: "#b836f8" }]}>
            <Icon
                name="zibi-plus2"
                size={20}
                color='#fff'

            />
        </View>
    )
}

const styles = StyleSheet.create({
    paid_subscription: {
        position: "absolute",
        right: ScaledSize(20),
        top: ScaledSize(0),
        width: ScaledSize(30),
        height: ScaledSize(30),
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: ScaledSize(20),
        borderBottomRightRadius: ScaledSize(20),
        zIndex: 999999,
    },
});