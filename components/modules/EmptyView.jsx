import { View, StyleSheet, Text } from 'react-native'
import ZiText from './ZiBookText'
import LottieView from "lottie-react-native";
import { useTheme } from '@react-navigation/native';
import { ScaledSize } from '../../utils/responsive';

export default function EmptyView({ title }) {
    const { colors, dark } = useTheme();

    return (
        <View style={styles.empty_container}>
            <LottieView style={{
                width: ScaledSize(250),
                height: ScaledSize(250),
            }}
                source={require("../../assets/lottie/animation_lnc4vy4d.json")}
                autoPlay
                loop
            />
            <ZiText
                fontFamily="IRANYekanXFaNum-DemiBold"
                size="18"
                styles={{
                    color: colors.text
                }}>
                {title}
            </ZiText>
        </View>

    )
}

const styles = StyleSheet.create({
    empty_container: {
        position: "absolute",
        top: ScaledSize(200),
        right: 0,
        left: 0,
        alignItems: "center",
    },
});
