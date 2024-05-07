import { View, StyleSheet, Text } from 'react-native'
import ZiText from './ZiBookText'
import LottieView from "lottie-react-native";
import { useTheme } from '@react-navigation/native';
import { ScaledSize } from '../../utils/responsive';

export default function LoadingBook({ title }) {
    const { colors, dark } = useTheme();

    return (
        <View style={styles.empty_container}>
            <LottieView style={{
                width: ScaledSize(250),
                height: ScaledSize(250),
                backgroundColor:"red"
            }}
                source={require("../../assets/lottie/loading.json")}
                autoPlay
                loop
            />
            <ZiText
                fontFamily="IRANYekanXFaNum-DemiBold"
                size="18"
                styles={{
                    color: colors.text,
                    position:"absolute"
                }}>
                {title}
            </ZiText>
        </View>
    )
}

const styles = StyleSheet.create({
    empty_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});


