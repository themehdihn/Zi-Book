import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import ZiText from '../../../modules/ZiBookText'
import { Icon } from '../../../modules/AppIcon';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../../utils/responsive"

export default function Notif() {

    const [isVisible, setIsVisible] = useState(false);
    const shakeAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isVisible) {
            Animated.sequence([
                Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
                Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
                Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
                Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true })
            ]).start();
        }
    }, [isVisible]);

    
    return (
        <Animated.View style={[styles.notif, { transform: [{ translateX: shakeAnimation }], opacity: isVisible ? 1 : 0, }]}>
            <View style={styles.shape} />
            {/* shape */}
            <View style={styles.notifbox}>
                <ZiText fontFamily="IRANYekanXFaNum-DemiBold" size="10" styles={{ color: "white" }}>اشتراک نداری</ZiText>
            </View>
        </Animated.View>
    )
}
const styles = StyleSheet.create({
    notif: {
        flexDirection: "row-reverse",
        alignItems: "center",
        position: "absolute",
        right: ScaledSize(50),
        top: ScaledSize(5)
    },
    shape: {
        width: ScaledSize(10),
        height: ScaledSize(10),
        backgroundColor: "#e74a77",
        transform: [{ rotate: '45deg' }],
        position: "absolute",
        right: ScaledSize(73)
    },
    notifbox: {
        width: ScaledSize(80),
        height: ScaledSize(30),
        backgroundColor: "#e74a77",
        borderRadius: ScaledSize(8),
        alignItems: "center",
        justifyContent: "center"
    }
});