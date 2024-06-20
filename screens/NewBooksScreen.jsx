import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import ZiText from '../components/modules/ZiBookText'
import { ScaledSize, ScaledWidth, ScaledHeight } from "../utils/responsive"
import { Icon } from '../components/modules/AppIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/modules/Header';
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from '../redux/store/books';
import BookCart from '../components/modules/BookCart/BookCart';
import GoBack from '../components/modules/GoBack';

export default function NewBooksScreen({ navigation }) {
  const { colors } = useTheme();
  const dispath = useDispatch();

  const categories = useSelector(state => state.categories);
  const books = useSelector((state) => state.books.allBooks);

  useEffect(() => {
    console.log("first", books.length)
    dispath(getAllBooks())
  }, [])

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Header headerTitle="آخرین کتاب ها" icon="category" />
      {/* Header */}
      <View style={styles.lastbook_warper}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goback}>
          <GoBack />
        </TouchableOpacity>
        {/* GoBack Button */}
        <FlatList
          removeClippedSubviews={true}
          numColumns={2}
          columnWrapperStyle={{ gap: 15 }}
          data={books}
          iinitialNumToRender={20}
          contentContainerStyle={{ paddingBottom: ScaledSize(100), gap: 15 }}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={
                () => navigation.navigate('bookdetails', { book: item, cat: categories })}>
              <BookCart
                {...item}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      {/* LastBooks Warper */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lastbook_warper: {
    marginTop: ScaledSize(25),
    margin: ScaledSize(10),
    justifyContent: "center",
    alignItems: "center",
  },
  goback: {
    position: "absolute",
    top: ScaledSize(-72),
    left: ScaledSize(10)
  }
});
