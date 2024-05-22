import React from "react"
import { View, StyleSheet, StatusBar} from 'react-native'
import { useTheme } from '@react-navigation/native';
import { ScaledSize } from "../../../utils/responsive"
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Header from "./Header";
import Carousel from "./Carousel";
import Category from "./Category";
import BookCarts from "./BookCarts";
import HeadTitle from "./HeadTitle";

export default function LoadingIndex() {
    const {
        dark, colors,
    } = useTheme();

    return (
        <View>
            <View style={[styles.headerbox, { backgroundColor: colors.primary, shadowColor: colors.shadow }]}>
                <Header />
            </View>
            {/* End Header */}
            <View style={{ paddingTop: ScaledSize(25) }}>
                <Carousel />
            </View>
            {/* End Carousel */}
            <View style={{ paddingTop: ScaledSize(25), }}>
                <Category />
            </View>
            {/* Random Category */}

            <View style={{ paddingTop: ScaledSize(40), }}>
                <HeadTitle />
                {/* head title */}
                <View style={{ paddingTop: ScaledSize(25) }}>
                    <BookCarts />
                    {/* Book Cart */}
                </View>
                {/* BookCart Container */}
            </View>
            {/* Lastest Book */}

            <View style={{ paddingTop: ScaledSize(40), }}>
                <HeadTitle />
                {/* Head Title */}
                <View style={{ paddingTop: ScaledSize(25) }}>
                    <BookCarts />
                    {/* Book Cart */}
                </View>
                {/* BookCart Container */}
            </View>
            {/* FreeBooks */}
        </View>
    )
}


const styles = StyleSheet.create({
    headerbox: {
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: ScaledSize(20),
        paddingBottom: ScaledSize(20),
        elevation: 5,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }

});