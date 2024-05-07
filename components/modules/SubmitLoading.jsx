import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../utils/responsive"
import LottieView from "lottie-react-native";

export default function SubmitLoading() {
    return (
        <View style={styles.loading}>
            <LottieView
                source={require("../../assets/lottie/lo3.json")}
                style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    bottom: ScaledSize(134)
                }}
                autoPlay
                loop
            />
        </View>
    )
}

const styles = StyleSheet.create({
    loading: {
        width: ScaledSize(300),
        height: ScaledSize(300),
        overflow: "hidden",
        position: "relative"
    },
});