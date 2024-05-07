import React, { useState, useRef, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme, useNavigation } from '@react-navigation/native';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../../utils/responsive"
import ZiText from '../../../modules/ZiBookText'


export default function AddComment({ id }) {
  const {
    dark, colors
  } = useTheme();
  const navigation = useNavigation()

  const goToCommentPage = () => {
    navigation.navigate('comment', { bookId: id })
  }

  return (
    <TouchableOpacity
      onPress={goToCommentPage}
      style={[styles.addcomment, { backgroundColor: colors.add_comment_bg, borderColor: colors.border }]}>
      <ZiText fontFamily="IRANYekanXFaNum-Regular" size="13" styles={{ color: colors.add_comment_txt }}>
        ثبت نظر
      </ZiText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  addcomment: {

    alignItems: "center",
    paddingVertical: ScaledSize(15),
    width: "50%",
    borderWidth: 2,
    borderTopLeftRadius: ScaledSize(10),
    borderBottomLeftRadius: ScaledSize(10),

  }
});