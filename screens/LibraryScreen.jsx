import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../utils/responsive"
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/modules/Header';
import LibraryCart from '../components/templates/Library/LibraryCart/LibraryCart';
import ZiText from '../components/modules/ZiBookText'
import EmptyView from '../components/modules/EmptyView';
import { useSelector, useDispatch } from 'react-redux';
import { getUserLibrary, removeFromLibrary, unrefetch } from '../redux/store/library';
import { useZibook } from '../context/ZibookContext';
import EmptyLibrary from '../components/templates/Library/EmptyLibrary';

export default function LibraryScreen({ navigation }) {

  const { colors } = useTheme();
  const dispatch = useDispatch()

  const library = useSelector(state => state.library);
  let list = library?.list;

  let isRefetching = library?.isRefetching;
  const books = useSelector((state) => state.books.allBooks);
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    if (isRefetching) {
      dispatch(getUserLibrary())
      dispatch(unrefetch());
    }
  }, [isRefetching]);

  const filltredItem = [
    { id: 1, name: "آخرین ها" },
    { id: 2, name: "دانلود شده ها" },
    { id: 3, name: "خوانده شده ها" },
    { id: 4, name: "نیمه تموم ها" }
  ];

  const [selectedItem, setSelectedItem] = useState(1);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <SafeAreaView style={[styles.container, {}]}>
      <View style={styles.fillter_box__container}>
        <FlatList
          removeClippedSubviews={true}
          numColumns={1}
          data={filltredItem}
          horizontal
          iinitialNumToRender={20}
          contentContainerStyle={{
            marginTop: ScaledSize(15),
          }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
            >
              <TouchableOpacity
                key={index} onPress={() => handleItemClick(item.id)}
                style={[selectedItem && selectedItem === item.id ? styles.fillter_box__active : [styles.fillter_box__notactive, { backgroundColor: colors.card }]]}>
                <ZiText fontFamily="IRANYekanXFaNum-Regular" size="10" styles={{ color: colors.text }}>{item.name}</ZiText>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* fillter */}

      {list?.length !== 0 ? (
        <FlatList
          removeClippedSubviews={true}
          numColumns={1}
          data={list}
          iinitialNumToRender={20}
          contentContainerStyle={{
            marginTop: ScaledSize(15),
            marginHorizontal: ScaledSize(20),
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={
                () => {
                  navigation.navigate('bookdetails', { book: item, cat: categories })
                }
              }>
              <LibraryCart  {...item} />
            </TouchableOpacity>
          )}
        />
      ) : (
        <EmptyLibrary />
      )}
      {/* LibraryCarts */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fillter_box__container: {
    flexDirection: "row",
    height: ScaledSize(60),
    marginLeft: ScaledSize(20),
  },
  fillter_box__active: {
    paddingHorizontal: ScaledSize(20),
    height: ScaledSize(40),
    backgroundColor: "#00cc66",
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: ScaledSize(10),
    marginRight: ScaledSize(10)
  },
  fillter_box__notactive: {
    paddingHorizontal: ScaledSize(20),
    height: ScaledSize(40),
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: ScaledSize(10),
    marginRight: ScaledSize(10)
  }
});
