import React, { useState, useRef, useEffect } from 'react'
import { Text, View, StyleSheet, Animated, TouchableWithoutFeedback, Easing } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@react-navigation/native';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../utils/responsive"
import ZiText from '../../modules/ZiBookText'
import { Icon } from '../../modules/AppIcon';


export default function BookDesc({desc}) {
    const {
        dark, colors
    } = useTheme();

    const startingHeight = 200;
    const [expander, setExpander] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [fullHeight, setFullHeight] = useState(startingHeight);
    const animatedHeight = useRef(new Animated.Value(startingHeight)).current;

    useEffect(() => {
        // expanded?setText(props.text): setText(props.text.substring(0, 40));
        Animated.spring(animatedHeight, {
            friction: 100,
            toValue: expanded ? fullHeight : startingHeight,
            useNativeDriver: false
        }).start();
    }, [expanded]);

    const onTextLayout = (e) => {
        let { x, y, width, height } = e.nativeEvent.layout;
        height = Math.floor(height) + 40;
        if (height > startingHeight) {
            setFullHeight(height);
            setExpander(true);
        }
    };

    return (
        <View style={[styles.about_book, { backgroundColor: colors.card }]}>
            <ZiText fontFamily="IRANYekanXFaNum-Medium" size="18" styles={{ color: colors.text, paddingTop: ScaledSize(20), }}>درباره کتاب</ZiText>
            {/* About Title */}
            <Animated.View style={[styles.text_container, { height: animatedHeight }]}>
                <View onLayout={(e) => { onTextLayout(e) }}>
                    <ZiText fontFamily="IRANYekanXFaNum-Regular" size="13" styles={{ color: colors.text, textAlign: "justify", lineHeight: 25 }}>
                        {desc}
                    </ZiText>
                </View>
                {/* TextBox */}
                <TouchableWithoutFeedback onPress={() => { setExpanded(!expanded) }}
                >
                    <LinearGradient
                        colors={['rgba(255, 255, 255, 0)', colors.card, colors.card]}
                        style={styles.more_text}
                    >
                        <ZiText fontFamily="IRANYekanXFaNum-Regular" size="15" styles={{ color: colors.text }}>
                            {!expanded ? "مشاهده بیشتر" : " مشاهده کمتر"}
                        </ZiText>
                        <Icon
                            name={!expanded ? "chevron_down" : "chevron_up"}
                            size={20}
                            color={colors.text}
                            style={{ marginLeft: ScaledSize(4) }}
                        />
                    </LinearGradient>
                </TouchableWithoutFeedback>
            </Animated.View>
            {/* About Text */}
        </View>
    )
}

const styles = StyleSheet.create({
    about_book: {
        paddingHorizontal: ScaledSize(30),
        marginTop: ScaledSize(30),
        borderRadius: ScaledSize(8),
        paddingBottom: ScaledSize(15),
    },
    text_container: {
        paddingTop: ScaledSize(20),
        position: "relative",
        overflow: "scroll"
    },
    textbox: {
        textAlign: "justify",
        lineHeight: 25
    },
    more_text: {
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "center",
        height: ScaledSize(40),
        position: "absolute",
        bottom: -5,
        left: 0,
        right: 0
    }
});