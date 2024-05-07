import React from 'react'
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, ScrollView, Image, FlatList, SafeAreaView, TouchableWithoutFeedback, } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../utils/responsive"
import ZiText from '../../modules/ZiBookText'
import { Icon } from '../../modules/AppIcon';

export default function ProfileBox() {
    const {
        dark, colors
    } = useTheme();
    return (
        <View style={[styles.profile_box, { backgroundColor: colors.card }]}>
            <View style={styles.row_box}>
                <View>
                    <View style={styles.profile_container}>
                        <View style={styles.profile_img__container}>
                            <Image style={styles.img} source={{ uri: "https://rozup.ir/view/3819058/photo_2023-08-07_02-17-23.jpg" }} />
                        </View>
                        {/* Img */}
                        <View style={styles.user_info}>
                            <ZiText fontFamily="IRANYekanXFaNum-Medium" size="12" styles={{ color: colors.text, }}>زیبا ترابی</ZiText>
                            <ZiText fontFamily="IRANYekanXFaNum-Medium" size="11" styles={{ color: "#848484" }}>9189132311</ZiText>
                        </View>
                        {/* User Info */}
                    </View>
                    {/* Profile Container */}
                </View>
                {/* Row */}
                <Icon
                    name="editprof"
                    size={25}
                    color='#00cc66'
                    style={{
                        marginLeft: ScaledSize(10),
                    }}
                />
                {/* Profile Edit Icon */}
            </View>
            {/* Row Box */}
            <View style={styles.seperator_line} />
            {/* Seperator Line */}
            <View style={styles.pay_box}>
                <View style={styles.wallet}>
                    <Icon
                        name="t-star"
                        size={20}
                        color='#00cc66'
                        style={{
                            // marginLeft: ScaledSize(10),
                        }}
                    />
                    <ZiText fontFamily="IRANYekanXFaNum-Medium" size="12" styles={{ color: colors.text, marginLeft: ScaledSize(10) }}>اشتراک 3 ماهه</ZiText>
                </View>
                {/* Wallet Section */}
                <View style={styles.recharge_wallet}>
                    <Icon
                        name="chevron_left"
                        size={25}
                        color='#00cc66'
                        style={{
                            marginLeft: ScaledSize(5),
                        }}
                    />
                    <ZiText fontFamily="IRANYekanXFaNum-DemiBold" size="11" styles={{ color: "#00cc66" }}>خرید اشتراک</ZiText>
                </View>
                {/* Recharge wallet */}
            </View>
            {/* Pay Section */}
        </View>
        // End Profile Box
    )
}


const styles = StyleSheet.create({
    profile_box: {
        flexDirection: 'column',
        backgroundColor: "white",
        padding: ScaledSize(20),
        borderRadius: ScaledSize(10),
    },
    row_box: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    profile_container: {
        flexDirection: "row",
        alignItems: "center"
    },
    profile_img__container: {
        width: ScaledSize(40),
        height: ScaledSize(40)
    },
    img: {
        width: "100%",
        height: "100%",
        borderRadius: ScaledSize(100),
    },
    user_info: {
        marginLeft: ScaledSize(10),
        alignItems: "flex-start"
    },
    seperator_line: {
        height: ScaledSize(1),
        backgroundColor: "#f0f0f0",
        marginTop: ScaledSize(15),
        opacity: .5
    },
    pay_box: {
        flexDirection: "row",
        marginTop: ScaledSize(15),
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: ScaledSize(5),
    },
    wallet: {
        flexDirection: "row",
        alignItems: "center",
    },
    recharge_wallet: {
        flexDirection: "row-reverse",
        alignItems: "center",
    }
});