import React from 'react'
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, ScrollView, Image, FlatList, SafeAreaView, TouchableWithoutFeedback, } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../utils/responsive"
import ZiText from '../../modules/ZiBookText'
import { Icon } from '../../modules/AppIcon';

export default function Option({ title, icon }) {

  const {
    dark, colors
  } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.right_box}>
        <Icon
          name={icon}
          size={20}
          color={colors.text}
        />
        <ZiText fontFamily="IRANYekanXFaNum-Medium" size="12" styles={{ color: colors.text, marginLeft: ScaledSize(10) }}>{title}</ZiText>
      </View>
      {/* Right Box */}
      <Icon
        name="chevron_left"
        size={20}
        color={colors.text}
      />
      {/* Left */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: ScaledSize(10),
    paddingHorizontal: ScaledSize(10),
    marginBottom:ScaledSize(5)
  },
  right_box: {
    flexDirection: "row",
    alignItems: "center",
  }
});