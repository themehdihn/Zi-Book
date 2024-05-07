import React from 'react'
import { View, StyleSheet } from 'react-native';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../../utils/responsive"

export default function InfoBoxContainer({ children }) {
    return (
        <View style={styles.infobox_container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    infobox_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: ScaledSize(30),
        marginTop: ScaledSize(30)
    },

});
