import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ScaledSize, ScaledHeight, ScaledWidth } from "../../../utils/responsive"
import ZiText from '../../modules/ZiBookText'

export default function Submit({ addCommentHandler }) {
    return (
        <TouchableOpacity onPress={addCommentHandler} style={styles.submit_comment}>
            <ZiText fontFamily="IRANYekanXFaNum-DemiBold" size="13" styles={{ color: '#002931' }}>
                ثبت نظر
            </ZiText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    submit_comment: {
        width: "100%",
        borderRadius: ScaledSize(10),
        backgroundColor: "#00cc66",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: ScaledSize(15),
        marginTop: ScaledSize(10)
    }
});