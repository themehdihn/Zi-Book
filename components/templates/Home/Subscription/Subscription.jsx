import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from '../../../modules/AppIcon';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../../utils/responsive"
import Notif from './Notif';

export default function Subscription({ showNotif }) {
   
    return (
        <View style={styles.subscription}>
            {showNotif && (
                <Notif />
            )}
            <Icon
                name='t-star'
                size={25}
                color="#00cc66"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    subscription: {
        width: ScaledSize(40),
        height: ScaledSize(40),
        backgroundColor: "#00cc661c",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: ScaledSize(8)
    }
});