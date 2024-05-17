import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated, ScrollView } from 'react-native'
import { ScaledSize, ScaledHeight, ScaledWidth } from "../../../utils/responsive"
import { useTheme } from '@react-navigation/native';
import ZiText from '../../modules/ZiBookText'
import { Icon } from '../../modules/AppIcon';
import SettingItem from './SettingItem/SettingItem';
import FontSizeChanger from './SettingItem/FontSizeChanger';
import { lighttheme, darktheme, sepia } from '../../templates/BookView/CustomThemes';
import { useReader } from '@epubjs-react-native/core';

export default function SettingMenu({ onClose }) {
  const { changeTheme, progress } = useReader();
  const {
    dark, colors
  } = useTheme();

  return (
    <View>
      <View style={styles.palette_theme}>
        <ZiText fontFamily="IRANYekanXFaNum-DemiBold" size="15" styles={{ color: colors.text }}>رنگ پس زمینه</ZiText>
        {/* Title */}

        <View style={styles.palette_theme_contianer}>
          <TouchableOpacity onPress={() => changeTheme(darktheme)}>
            <SettingItem color={'#fff'} bgcolor={'#1c1e2b'} title="الف" />
          </TouchableOpacity>
          {/* Dark Theme */}

          <TouchableOpacity onPress={() => changeTheme(lighttheme)}>
            <SettingItem color={'#000'} bgcolor={'#fff'} title="الف" />
          </TouchableOpacity>
          {/* light Theme */}

        </View>
        {/* Cart container */}
      </View>
      {/* Palette Section */}

      <View style={styles.fontsize}>
        <ZiText fontFamily="IRANYekanXFaNum-DemiBold" size="15" styles={{ color: colors.text }}>اندازه متن</ZiText>
        {/* Title */}
        <FontSizeChanger />
      </View>
      {/* FontSize Section */}
    </View>
  )
}

const styles = StyleSheet.create({
  palette_theme: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: ScaledSize(20),
    paddingVertical: ScaledSize(10),
  },
  palette_theme_contianer: {
    flexDirection: "row",
    width: ScaledSize(98),
    justifyContent: "space-between"
  },
  fontsize: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: ScaledSize(20),
    paddingVertical: ScaledSize(10),
  },
  fontsize_contianer: {
    flexDirection: "row",
    width: ScaledSize(130),
    height: ScaledSize(40),
    borderWidth: 1,
    borderRadius: ScaledSize(8),
    justifyContent: "space-around",
    alignItems: "center"
  }

});