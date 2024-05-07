import { View, StyleSheet, Text } from 'react-native'
import ZiText from './ZiBookText'
import LottieView from "lottie-react-native";
import { useTheme } from '@react-navigation/native';
import { ScaledSize } from '../../utils/responsive';

export default function EmptySearch() {
    const { colors, dark } = useTheme();

    return (
        <View style={styles.empty_container}>
            <LottieView style={{
                width: 200,
                height: 200,

            }} source={require("../../assets/lottie/search.json")} autoPlay loop
            />
            <ZiText fontFamily="IRANYekanXFaNum-DemiBold" size="18" styles={{ color: colors.text }}>
                نتیجه ای یافت نشد!
            </ZiText>
        </View>
    )
}

const styles = StyleSheet.create({
    empty_container: {
        position: "absolute",
        top: ScaledSize(100),
        right: 0,
        left: 0,
        alignItems: "center",
        justifyContent: "center",
    },
});


