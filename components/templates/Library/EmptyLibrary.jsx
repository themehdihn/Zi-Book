import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import ZiText from '../../modules/ZiBookText'
import { ScaledSize } from '../../../utils/responsive';


export default function EmptyLibrary() {
  const { colors } = useTheme();

  return (
    <View style={styles.empty_library}>
      <ZiText fontFamily="IRANYekanXFaNum-Medium" size="13" styles={{ color: colors.text }}>
        هنوز کتابی نخوندی .از صفحه اصلی اولین کتابت رو انتخاب کن!
      </ZiText>
    </View>
  )
}
const styles = StyleSheet.create({
  empty_library: {
    flex: 1,
    marginHorizontal: ScaledSize(10),
    alignItems: "center",
    justifyContent: "center"
  }
});