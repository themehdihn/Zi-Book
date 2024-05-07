import React from 'react';
import { View, StyleSheet, Image, Text, StatusBar } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../utils/responsive"
import { useTheme } from '@react-navigation/native';


export default function Header() {
    const {
        dark, colors,
    } = useTheme();
    
    return (
        <SkeletonPlaceholder backgroundColor={colors.skeletonPlaceholder} borderRadius={4} >
            <View>
                <View style={styles.header_box}>
                    <View style={styles.logo} />
                    {/* logo */}
                    <View style={styles.notif} />
                </View>
                {/* Header */}
                <View style={styles.search_box} />
                {/* Serach */}
            </View>
        </SkeletonPlaceholder>
    )
}

const styles = StyleSheet.create({
    header_box: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: StatusBar.currentHeight,
        paddingBottom: ScaledSize(15),
    },
    logo: {
        width: ScaledSize(100),
        height: ScaledSize(40)
    },
    notif: {
        width: ScaledSize(140)
    },
    search_box: {
        width: "100%",
        height: ScaledSize(45),
        paddingLeft: ScaledSize(20),
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: ScaledSize(8),
        marginTop: ScaledSize(10),
    }
});
