import React from 'react'
import { Text, View, StyleSheet, StatusBar} from 'react-native'
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../utils/responsive"
import { useTheme } from '@react-navigation/native';
import ZiText from './ZiBookText'
import { Icon } from './AppIcon';

export default function Header({ headerTitle }) {
    const {
        dark, colors
    } = useTheme();

    return (
        <View style={[styles.header, { backgroundColor: colors.primary, shadowColor: colors.shadow }]}>
            <View style={styles.header_container}>
                <ZiText fontFamily="IRANYekanXFaNum-DemiBold" size="22" styles={{ color: colors.text }}>{headerTitle}</ZiText>
            </View>
            {/* header box */}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingBottom: ScaledSize(20),
        paddingTop: StatusBar.currentHeight,
        elevation: 5,
    },
    header_container: {
        marginHorizontal: ScaledSize(20),
        flexDirection: "row",
        justifyContent:"center"
    }
});