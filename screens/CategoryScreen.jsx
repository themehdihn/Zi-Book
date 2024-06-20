import React from 'react';
import { useTheme } from '@react-navigation/native';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../utils/responsive"
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryCart from '../components/templates/Category/CategoryCart/CategoryCart';
import { useSelector } from "react-redux";

export default function CategoryScreen({ navigation }) {
  const { colors } = useTheme();
  const categories = useSelector(state => state.categories)

  const categorySubmissions = (catId, catName) => {
    navigation.navigate('catbook', { catId, catName })
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Start Cat List */}
      <View style={styles.category_container}>
        <FlatList
          removeClippedSubviews={true}
          numColumns={3}
          data={categories}
          contentContainerStyle={{ paddingBottom: ScaledSize(100), alignSelf: "center" }}
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
