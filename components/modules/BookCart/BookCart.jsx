import React, { useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { useTheme } from '@react-navigation/native';
import ZiText from '../ZiBookText'
import { Icon } from '../AppIcon';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../utils/responsive"
import PaidSubscription from './PaidSubscription/PaidSubscription';
import { useDispatch, useSelector } from "react-redux";
import { getRate } from '../../../redux/store/comments';

export default function BookCart({ bookName, writer, coverUrl, translator, isSubscription,id }) {
    
    const {
        dark, colors
    } = useTheme();
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getRate(id))
       
    },[])

    const comments = useSelector(state => state.comments);
    const rate = comments?.rate;

    return (
        <View style={[styles.bookcart, { backgroundColor: colors.card }]}>
            {isSubscription ? <PaidSubscription /> : null}
            {/* PaidSubscription */}
            <View style={styles.book_img}>
                <Image style={{ width: "100%", height: "100%", borderRadius: ScaledSize(6), }} source={{ uri: coverUrl }} />
            </View>
            {/* Book Img */}
            <View style={styles.book_info}>
                <ZiText ellipsis={1} fontFamily="IRANYekanXFaNum-Medium" size="13" styles={{ color: colors.text, lineHeight: 35 }}>{bookName}</ZiText>
                {/* Title */}
                <View style={styles.writer}>
                    <ZiText ellipsis={1} fontFamily="IRANYekanXFaNum-Medium" size="10" styles={{ color: "#989898", width: "75%" }}>{writer} |  {translator}</ZiText>
                    <Icon
                        name="textbook"
                        size={15}
                        color='#00cc66'
                        style={styles.category_title}
                    />
                </View>
                {/* Writer */}
            </View>
            {/* Book Info */}
        </View>
    )
}

const styles = StyleSheet.create({
    bookcart: {
        position: "relative",
        width: ScaledSize(170),
        height: ScaledSize(235),
        borderRadius: ScaledSize(10),
        alignItems: "center",
        justifyContent: "space-evenly",
        marginBottom: ScaledSize(15),
        marginHorizontal: 10,
    },
    book_img: {
        width: ScaledSize(100),
        height: ScaledSize(135),
        top: ScaledSize(10),
        position: "relative",
    },
    book_info: {
        paddingHorizontal: ScaledSize(8),
        width: "100%",
        position: "relative",
        top: ScaledSize(5),
    },
    writer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    category_title: {
        backgroundColor: "#00cc661c",
        width: ScaledSize(25),
        height: ScaledSize(25),
        verticalAlign: "middle",
        textAlign: "center",
        borderRadius: ScaledSize(4)
    }
});