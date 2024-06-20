import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../utils/responsive"
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/modules/Header';
import { useDispatch, useSelector } from "react-redux";
import { getCatBook } from '../redux/store/books';
import BookCart from '../components/modules/BookCart/BookCart';
import GoBack from '../components/modules/GoBack';
import EmptyView from '../components/modules/EmptyView';

export default function CategoryBookScreen({ navigation, route }) {
  if (!route.params.catId) return null

  const { colors } = useTheme();
  const dispath = useDispatch();

  const [datas, setDatas] = useState([])

  const categories = useSelector(state => state.categories);
  const catId = route.params.catId
  const catName = route.params.catName

  const loadCategoryBooks = async () => {
    try {
      const data = await dispath(getCatBook(catId))
      setDatas(data.payload)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    loadCategoryBooks()
  }, [])

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Header headerTitle={catName} icon="category" />
      {/* Header */}

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goback}>
        <GoBack />
      </TouchableOpacity>
      {/* GoBack Button */}

      <View style={styles.lastbook_warper}>
        {datas.length === 0 ? (
          <EmptyView title="کتابی موجود نیست" />
        ) : (
          <FlatList
            removeClippedSubviews={true}
            numColumns={2}
            columnWrapperStyle={{ gap: 15 }}
            data={datas}
            iinitialNumToRender={20}
            contentContainerStyle={{ paddingBottom: ScaledSize(100), gap: 15 }}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={
                  () => navigation.navigate('bookdetails', { book: item, cat: categories })}>
                <BookCart {...item} />
              </TouchableOpacity>
            )}
          />
        )}
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
    margin: ScaledSize(15),
    alignItems: "flex-start",
    flexWrap: 'wrap',
  },
  goback: {
    position: "absolute",
    top: ScaledSize(30),
    left: ScaledSize(20)
  }
});
