import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScaledSize, ScaledHeight, ScaledWidth } from "../../../utils/responsive"
import { useTheme } from '@react-navigation/native';
import ZiText from '../../modules/ZiBookText'
import { Icon } from '../../modules/AppIcon';

export default function Social() {
    const {
        dark, colors,
    } = useTheme();

    return (
        <View style={styles.social_container}>
            <ZiText ellipsis={1} fontFamily="IRANYekanXFaNum-DemiBold" size="25" styles={{ color: colors.text }}>
                شبکه های اجتماعی زیبوک
            </ZiText>
            <ZiText fontFamily="IRANYekanXFaNum-Regular" size="13" styles={{ color: colors.text, paddingTop: ScaledSize(10) }}>
               به زیبوک در همه جا دسترسی داشته باشین حتی:
            </ZiText>
            {/* End Social Title */}
            <View style={styles.social_row}>
                <View style={[styles.social_cart, { backgroundColor: colors.card }]}>
                    <Icon
                        name="telegram"
                        size={30}
                        color={colors.text}
                    />
                </View>
                {/* Telegram Cart */}
                <View style={[styles.social_cart, { backgroundColor: colors.card }]}>
                    <Icon
                        name="instagram"
                        size={30}
                        color={colors.text}
                    />
                </View>
                {/* Instagram Cart */}
            </View>
            {/* Social Section */}
        </View>
    )
}

const styles = StyleSheet.create({
    social_container: {
        marginTop: ScaledSize(50),
        alignItems: "center"
    },
    social_row: {
        flexDirection: "row",
        justifyContent:"space-between",
        width:ScaledSize(150)
    },
    social_cart: {
        width: ScaledSize(65),
        height: ScaledSize(65),
        borderRadius: ScaledSize(10),
        alignItems: "center",
        justifyContent: "center",
        marginTop: ScaledSize(30),
    }
});