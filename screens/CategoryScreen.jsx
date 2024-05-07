import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import ZiText from '../components/modules/ZiBookText'
import { ScaledSize, ScaledWidth, ScaledHeight } from "../utils/responsive"
import { Icon } from '../components/modules/AppIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/modules/Header';
import CategoryCart from '../components/templates/Category/CategoryCart/CategoryCart';
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../redux/store/categories";
import { getCatBook } from '../redux/store/books';


export default function CategoryScreen({ navigation }) {

  const { colors } = useTheme();
  const dispath = useDispatch();
  
  const categories = useSelector(state => state.categories)


  useEffect(() => {

   
  }, [])

  const categorySubmissions =  (catId,catName) => {
    navigation.navigate('catbook', { catId, catName })
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
     
      <View style={styles.category_container}>
        <FlatList
          removeClippedSubviews={true}
          numColumns={3}
          data={categories}
          contentContainerStyle={{
            paddingBottom: ScaledSize(100),
            alignSelf: "center"
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => categorySubmissions(item.id, item.name)}>
              <CategoryCart {...item} />
            </TouchableOpacity>
          )}
        />
      </View>
      {/* Category Container */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  category_container: {
    marginTop: ScaledSize(25),
    marginHorizontal: ScaledSize(20),
  }
});
