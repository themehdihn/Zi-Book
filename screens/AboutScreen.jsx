import React from 'react'
import { Text, View } from 'react-native'
import { useTheme } from '@react-navigation/native';
import ZiText from '../components/modules/ZiBookText'

export default function AboutScreen() {
  const { colors } = useTheme()

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ZiText
        fontFamily="IRANYekanXFaNum-DemiBold"
        size="18"
        styles={{
          color: colors.text,
        }}>
        توسعه دهنده برنامه : زیبا ترابی
      </ZiText>
    </View>
  )
}
