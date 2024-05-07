import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import ZiText from '../../../modules/ZiBookText'
import { Icon } from '../../../modules/AppIcon';
import { useDispatch } from 'react-redux';
import { ScaledSize } from "../../../../utils/responsive"
import { removeFromLibrary, unrefetch } from '../../../../redux/store/library';


export default function LibraryCart({ bookName, writer, coverUrl, id, progress }) {
    const dispatch = useDispatch()
    const { colors } = useTheme();

    const deleteFromLibrary = async () => {
        console.log("id", id)
        const res = await dispatch(removeFromLibrary(id));
        console.log(res);
        if (res.error) {
            console.log(res.error, "hjghgh")
        } else {
            dispatch(unrefetch())
        }
    }
    return (
        <View style={[styles.library_cart, { backgroundColor: colors.card }]}>
            <View style={styles.row}>
                <View style={{ flexDirection: "row" }}>
                    <View style={[styles.img_container, { shadowColor: colors.shadow }]}>
                        <Image style={styles.img} source={{ uri: coverUrl }} />
                    </View>
                    {/* Img */}
                    <View style={styles.book_info}>
                        <View>
                            <ZiText fontFamily="IRANYekanXFaNum-Medium" size="11" styles={{ color: colors.text }}>{bookName}</ZiText>
                            {/* Book Title */}
                            <ZiText fontFamily="IRANYekanXFaNum-Regular" size="9" styles={{ color: "#989898", paddingTop: ScaledSize(5) }}>{writer}</ZiText>
                            {/* Book Writer */}
                        </View>
                        {/* Top Section */}
                        <View style={styles.reading_icon}>
                            <ZiText fontFamily="IRANYekanXFaNum-Medium" size="15" styles={{ color: colors.text }}>%{progress ? progress : 0}</ZiText>
                            <ZiText fontFamily="IRANYekanXFaNum-Medium" size="12" styles={{ color: "#989898", marginLeft: ScaledSize(5) }}>خوانده ای.</ZiText>
                        </View>
                        {/* Bottom Section */}
                    </View>
                    {/* Book Info */}
                </View>
                {/* Right Box */}
                <View style={styles.controll_btn}>
                    <View style={[styles.download_btn, { borderColor: colors.border }]}>
                        <ZiText fontFamily="IRANYekanXFaNum-Medium" size="10" styles={{ color: colors.text }}>دانلود</ZiText>
                    </View>
                    {/* Download Btn */}
                    <TouchableOpacity onPress={deleteFromLibrary} style={styles.delete_btn}>
                        <Icon
                            name="del-b"
                            size={20}
                            color={colors.text}
                            style={{ marginLeft: ScaledSize(4) }}
                        />
                    </TouchableOpacity>
                    {/* Delete Btn */}
                </View>
                {/* Controll Buttons */}
            </View>
            {/* row */}
            <View style={styles.progress_bar}>
                <View style={styles.before_progress__line} />
                <View style={[styles.progress_line, { width: `${parseInt(progress ? progress : 0)}%`, }]} />
            </View>
            {/* Progress Bar */}
        </View>
    )
}

const styles = StyleSheet.create({
    library_cart: {
        flexDirection: 'column',
        padding: 20,
        borderRadius: ScaledSize(10),
        marginBottom: ScaledSize(10)
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    img_container: {
        width: ScaledSize(65),
        height: ScaledSize(95),
        elevation: 5,
        position: "relative",
        borderRadius: ScaledSize(8),
        overflow: "hidden"
    },
    img: {
        width: "100%",
        height: "100%",
    },
    book_info: {
        justifyContent: "space-between",
        marginLeft: ScaledSize(10)
    },
    reading_icon: {
        flexDirection: "row",
        alignItems: "center"
    },
    controll_btn: {
        justifyContent: "space-between",
        alignItems: "center"
    },
    download_btn: {
        borderWidth: 1,
        borderRadius: ScaledSize(4),
        paddingHorizontal: ScaledSize(8),
        paddingVertical: ScaledSize(2)
    },
    delete_btn: {
        flexDirection: "row",
        alignItems: "center",
    },
    progress_bar: {
        paddingTop: ScaledSize(20),
        position: "relative"
    },
    before_progress__line: {
        height: 10,
        width: "100%",
        backgroundColor: "#f5f5f594",
        position: "absolute",
        bottom: 0,
        borderRadius: ScaledSize(5)
    },
    progress_line: {
        height: 10,
        backgroundColor: "#00cc66",
        borderRadius: ScaledSize(5)
    },
    progress_conatiner: {
        flexDirection: "row",
        alignItems: "center"
    },
    progress_percentage: {
        paddingTop: ScaledSize(20),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    book_checked: {
        width: ScaledSize(30),
        height: ScaledSize(30),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: ScaledSize(8)
    }
});