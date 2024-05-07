import React from 'react'
import { View } from 'react-native';
import ZiText from '../modules/ZiBookText'
import { ScaledSize } from '../../utils/responsive';
import { useTheme } from '@react-navigation/native';

export default function FormHeader() {
    const { colors, dark } = useTheme();

    return (
        <View>
            <ZiText fontFamily="subset-Samet-Bold.9b73fb49" size="35" styles={{ color: "#00cc66" }}>
                زیبوک
            </ZiText>
            {/* Logo */}
            <ZiText fontFamily="IRANYekanXFaNum-DemiBold" size="20" styles={{ color: colors.text }}>
                سلام دوست من
            </ZiText>
            <ZiText fontFamily="IRANYekanXFaNum-Regular" size="13" styles={{ color: "#989898", marginTop: ScaledSize(5) }}>
                با مرجع بهترین کتاب ها، فقط یک کلیک فاصله داری!
            </ZiText>
        </View>
    )
}
