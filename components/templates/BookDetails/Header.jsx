import React, { useState, useRef, useEffect } from 'react'
import { View, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native'
import ImageBlurShadow from "react-native-image-blur-shadow";
import Svg, { Path } from "react-native-svg";
import { useTheme, useNavigation } from '@react-navigation/native';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../utils/responsive"
import ZiText from '../../modules/ZiBookText'
import { Icon } from '../../modules/AppIcon';

export default function Header({ bookName, writer, translator, coverUrl }) {
    const {
        dark, colors
    } = useTheme();
    const navigation = useNavigation();

    return (
        <View style={[styles.header, { backgroundColor: colors.primary }]}>
            <View style={styles.header_top}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon
                        name='zi-right'
                        size={23}
                        color={colors.text}
                    />
                </TouchableOpacity>
                <View style={styles.image_box}>
                    <Image
                        style={styles.img}
                        source={{ uri: coverUrl }}
                    />
                </View>
                {/* Book Img */}
                <View style={{ justifyContent: "flex-start" }}>
                    <View>
                        <Svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"

                        >
                            <Path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.75 6C15.75 3.92893 14.0711 2.25 12 2.25C9.92893 2.25 8.25 3.92893 8.25 6C8.25 8.07107 9.92893 9.75 12 9.75C14.0711 9.75 15.75 8.07107 15.75 6ZM12 3.75C13.2426 3.75 14.25 4.75736 14.25 6C14.25 7.24264 13.2426 8.25 12 8.25C10.7574 8.25 9.75 7.24264 9.75 6C9.75 4.75736 10.7574 3.75 12 3.75Z"
                                fill={colors.text}
                            />
                            <Path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.25 18C9.25 15.9289 7.57107 14.25 5.5 14.25C3.42893 14.25 1.75 15.9289 1.75 18C1.75 20.0711 3.42893 21.75 5.5 21.75C7.57107 21.75 9.25 20.0711 9.25 18ZM5.5 15.75C6.74264 15.75 7.75 16.7574 7.75 18C7.75 19.2426 6.74264 20.25 5.5 20.25C4.25736 20.25 3.25 19.2426 3.25 18C3.25 16.7574 4.25736 15.75 5.5 15.75Z"
                                fill={colors.text}
                            />
                            <Path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M18.5 14.25C20.5711 14.25 22.25 15.9289 22.25 18C22.25 20.0711 20.5711 21.75 18.5 21.75C16.4289 21.75 14.75 20.0711 14.75 18C14.75 15.9289 16.4289 14.25 18.5 14.25ZM20.75 18C20.75 16.7574 19.7426 15.75 18.5 15.75C17.2574 15.75 16.25 16.7574 16.25 18C16.25 19.2426 17.2574 20.25 18.5 20.25C19.7426 20.25 20.75 19.2426 20.75 18Z"
                                fill={colors.text}
                            />
                            <Path
                                d="M7.20468 7.56231C7.51523 7.28821 7.54478 6.81426 7.27069 6.5037C6.99659 6.19315 6.52264 6.1636 6.21208 6.43769C4.39676 8.03991 3.25 10.3865 3.25 13C3.25 13.4142 3.58579 13.75 4 13.75C4.41421 13.75 4.75 13.4142 4.75 13C4.75 10.8347 5.69828 8.89187 7.20468 7.56231Z"
                                fill={colors.text}
                            />
                            <Path
                                d="M17.7879 6.43769C17.4774 6.1636 17.0034 6.19315 16.7293 6.5037C16.4552 6.81426 16.4848 7.28821 16.7953 7.56231C18.3017 8.89187 19.25 10.8347 19.25 13C19.25 13.4142 19.5858 13.75 20 13.75C20.4142 13.75 20.75 13.4142 20.75 13C20.75 10.3865 19.6032 8.03991 17.7879 6.43769Z"
                                fill={colors.text}
                            />
                            <Path
                                d="M10.1869 20.0217C9.7858 19.9184 9.37692 20.1599 9.27367 20.561C9.17043 20.9622 9.41192 21.3711 9.81306 21.4743C10.5129 21.6544 11.2458 21.75 12 21.75C12.7542 21.75 13.4871 21.6544 14.1869 21.4743C14.5881 21.3711 14.8296 20.9622 14.7263 20.561C14.6231 20.1599 14.2142 19.9184 13.8131 20.0217C13.2344 20.1706 12.627 20.25 12 20.25C11.373 20.25 10.7656 20.1706 10.1869 20.0217Z"
                                fill={colors.text}
                            />
                        </Svg>
                    </View>
                    {/* Share Icon */}
                    <View style={{ paddingVertical: ScaledSize(20) }}>
                        <Svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"

                        >
                            <Path
                                d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49393 11.0715C7.79963 10.792 8.27403 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z"
                                fill={colors.text}
                            />
                            <Path
                                d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
                                fill={colors.text}
                            />
                        </Svg>
                    </View>
                    {/* Download Icon */}
                </View>
                {/* Social */}
            </View>
            {/* Header Top */}
            <View style={{ alignItems: "center", paddingTop: ScaledSize(20) }}>
                <ZiText fontFamily="IRANYekanXFaNum-DemiBold" size="25" styles={{ color: colors.text }}>{bookName}</ZiText>
                {/* Book Title */}
                <ZiText fontFamily="IRANYekanXFaNum-Regular" size="17" styles={{ color: colors.text, paddingTop: ScaledSize(8) }}>{writer}</ZiText>
                {/* Description */}
                {translator && (
                    <ZiText fontFamily="IRANYekanXFaNum-Regular" size="13" styles={{ color: "#989898", paddingTop: ScaledSize(8) }}>{translator}</ZiText>
                )}
                {/* Writer */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "column",
        borderRadius: ScaledSize(8),
        paddingHorizontal: ScaledSize(30),
        paddingTop: StatusBar.currentHeight,
        paddingVertical: ScaledSize(20),
    },
    header_top: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    image_box: {
        width: ScaledSize(170),
        height: ScaledSize(266),
        overflow: "hidden",
    },
    img: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        borderRadius: ScaledSize(10),
    }
});