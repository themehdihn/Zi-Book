import React from 'react'
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, ScrollView, Image, FlatList, SafeAreaView, TouchableWithoutFeedback, } from 'react-native'
import ZiText from './ZiBookText'
import { Icon } from './AppIcon';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../utils/responsive"
import { useTheme, useNavigation } from '@react-navigation/native';

export default function HeadSection({ title }) {
    const {
        dark, colors,
    } = useTheme();
    const navigation = useNavigation()

    const navigationHandler = () => {
        if (title === "تازه ها") {
            navigation.navigate('newbooks')
        } else {
            navigation.navigate('freebook')
        }
    }


    return (
        <View style={styles.headsection}>
            <ZiText fontFamily="IRANYekanXFaNum-DemiBold" size="20" styles={{ color: colors.text }} >
                {title}
            </ZiText>
            {/* title */}
            <TouchableOpacity onPress={navigationHandler} style={styles.headsection_left}>
                <ZiText fontFamily="IRANYekanXFaNum-Regular" size="12" styles={{ color: colors.text }} >
                    مشاهده بقیه
                </ZiText>
                <Icon
                    name='chevron_left'
                    size={15}
                    color={colors.text}
                    style={{ marginLeft: ScaledSize(8) }}
                />
            </TouchableOpacity>
            {/* left */}
        </View>
    )
}

const styles = StyleSheet.create({
    headsection: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: ScaledSize(20),
    },
    headsection_left: {
        flexDirection: "row",
        alignItems: "center",
    }
});