import React, { useEffect, useState } from "react"
import { View, StyleSheet, StatusBar, TouchableOpacity, ScrollView, FlatList, SafeAreaView } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { ScaledSize } from "../utils/responsive"
import ZiText from '../components/modules/ZiBookText'
import ZiCarousel from '../components/templates/Home/Carousel/MyCarousel';
import TopCatItem from "../components/templates/Home/TopCatCart/TopCatItem";
import HeadSection from "../components/modules/HeadSection";
import BookCart from "../components/modules/BookCart/BookCart";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Subscription from "../components/templates/Home/Subscription/Subscription";
import SearchBox from "../components/templates/Search/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../redux/store/books";
import { getAllCategories } from "../redux/store/categories";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { decodeToken } from "../utils/token";
import { getCarousel } from "../redux/store/carousel";
import LoadingIndex from "../components/templates/LoadingHome/LoadingIndex";


export default function Home({ navigation }) {
    const dispath = useDispatch();
    const { colors } = useTheme();

    const books = useSelector((state) => state.books.allBooks);
    const homeBooks = books.slice(0, 5)
    const categories = useSelector(state => state.categories);
    const carousel = useSelector(state => state.carousel)

    const filtredFreeBooks = homeBooks.filter(item => !item.isSubscription)
    const newCategories = [...categories];
    const randomCategory = newCategories.sort(() => Math.random() - 0.5);
    const finalCategory = randomCategory.slice(0, 5);

    useEffect(() => {
        dispath(getAllBooks());
        dispath(getAllCategories())
        dispath(getCarousel())
    }, [])

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (homeBooks.length !== 0 && finalCategory.length !== 0 && carousel.length !== 0) {
            setLoading(false);
        }
    }, [books, categories, carousel]);

    const categorySubmissions = (catId, catName) => {
        navigation.navigate('catbook', { catId, catName })
    }

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: ScaledSize(50) }}>
                {!loading ? (
                    <>
                        <View style={[
                            styles.headerbox,
                            {
                                backgroundColor: colors.primary,
                                shadowColor: colors.shadow
                            }
                        ]}
                        >
                            <View style={styles.header}>
                                <ZiText fontFamily="subset-Samet-Bold.9b73fb49" size="30" styles={{ color: colors.text }}>
                                    زیبوک
                                </ZiText>
                                {/* Logo */}
                                <Subscription showNotif={true} />
                                {/* Subscription */}
                            </View>
                            {/* Header Top */}
                            <TouchableOpacity onPress={() => navigation.navigate('search', { books: books })}>
                                <SearchBox />
                            </TouchableOpacity>
                            {/* SearchBox */}
                        </View>
                        {/* End Header */}

                        <View style={{ paddingTop: ScaledSize(25) }}>
                            <ZiCarousel
                                data={carousel}
                                autoPlay={true}
                                pagination={true}
                            />
                        </View>
                        {/* End Carousel */}

                        <View style={{ paddingTop: ScaledSize(25), }}>
                            <FlatList
                                removeClippedSubviews={true}
                                data={finalCategory}
                                contentContainerStyle={{ paddingLeft: ScaledSize(20) }}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        onPress={() => categorySubmissions(item.id, item.name)}>
                                        <TopCatItem
                                            title={item.name}
                                            icon={item.icon}
                                        />
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                        {/* Random Category */}

                        <View style={{ paddingTop: ScaledSize(40), }}>
                            <HeadSection title="تازه ها" />
                            {/* head title */}
                            <View style={{ paddingTop: ScaledSize(25) }}>
                                <FlatList
                                    removeClippedSubviews={true}
                                    data={homeBooks}
                                    contentContainerStyle={{ paddingLeft: ScaledSize(20) }}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity onPress={() => navigation.navigate('bookdetails', { book: item, cat: categories })}>
                                            <BookCart
                                                {...item}
                                            />
                                        </TouchableOpacity>
                                    )}
                                />
                                {/* Book Cart */}
                            </View>
                            {/* BookCart Container */}
                        </View>
                        {/* Lastest Book */}

                        <View style={{ paddingTop: ScaledSize(40), }}>
                            <HeadSection title="کتاب های رایگان" />
                            {/* head title */}
                            <View style={{ paddingTop: ScaledSize(25) }}>
                                <FlatList
                                    removeClippedSubviews={true}
                                    data={filtredFreeBooks}
                                    contentContainerStyle={{ paddingLeft: ScaledSize(20) }}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity onPress={() => navigation.navigate('bookdetails', { book: item, cat: categories })}>
                                            <BookCart
                                                {...item}
                                            />
                                        </TouchableOpacity>
                                    )}
                                />
                                {/* Book Cart */}
                            </View>
                            {/* BookCart Container */}
                        </View>
                        {/* FreeBooks */}
                    </>
                ) : (
                    <LoadingIndex />
                )}
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerbox: {
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: ScaledSize(20),
        paddingBottom: ScaledSize(20),
        elevation: 5,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }

});