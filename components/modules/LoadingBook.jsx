import { View, StyleSheet } from 'react-native'
import ZiText from './ZiBookText'
import { useTheme } from '@react-navigation/native';

export default function LoadingBook({ title }) {
    const { colors, dark } = useTheme();

    return (
        <View style={styles.empty_container}>
            <ZiText
                fontFamily="IRANYekanXFaNum-DemiBold"
                size="18"
                styles={{
                    color: colors.text,
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


