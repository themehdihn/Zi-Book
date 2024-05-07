import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Button, ScrollView, Dimensions, Text, StatusBar, TextInput, TouchableWithoutFeedback, Image, TouchableOpacity,FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Icon } from '../components/modules/AppIcon';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../utils/responsive"
import SearchCart from '../components/templates/Search/SearchCart/SearchCart';
import { SafeAreaView } from 'react-native-safe-area-context';
import ZiText from '../components/modules/ZiBookText'
import EmptySearch from '../components/modules/EmptySearch';

import { useSelector } from 'react-redux';

const BookSearchScreen = ({ navigation, route }) => {
    if (!route.params.books) return null
    const {
        dark, colors
    } = useTheme();

    const inputRef = useRef(null);
    const books = route.params.books
    const categories = useSelector(state => state.categories);
    
    const [newBooks, setNewBooks] = useState([])
    const [isFocused, setIsFocused] = useState(true);
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        if (isFocused) {
            setTimeout(() => inputRef.current.focus(), 100);
        }
    }, [isFocused]);

    const searchValueHandler = (value) => {
        setSearchValue(value);
        const filtredBooks = books.filter(book => book.bookName.includes(value))
        setNewBooks(filtredBooks)
    }

    const handlePressOut = () => {
        if (isFocused && inputRef.current) {
            inputRef.current.blur();
            setIsFocused(false)
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPressOut={handlePressOut}>
                <View style={[styles.header, { backgroundColor: colors.primary }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('home')}>
                        <Icon
                            name="zi-right"
                            size={25}
                            color={colors.text}
                            style={{
                                marginRight: ScaledSize(10),
                            }}
                        />
                    </TouchableOpacity>
                    <TextInput
                        ref={inputRef}
                        placeholder='جستوجو در زیبوک'
                        value={searchValue}
                        onChangeText={searchValueHandler}
                        placeholderTextColor={'#939496'}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        style={[styles.search_box, isFocused && styles.focusedInput, { backgroundColor: colors.searchbox }]} />
                </View>
                {/* Header */}
            </TouchableWithoutFeedback>
            {/* SerachBox */}

            <View style={styles.cart_container}>
                {newBooks.length === 0 ? (
                    <EmptySearch />
                ) : (
                    <>
                        <FlatList
                            removeClippedSubviews={true}
                            numColumns={1}
                            data={newBooks}
                            iinitialNumToRender={20}
                            contentContainerStyle={{
                                paddingBottom: ScaledSize(140),
                            }}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={
                                        () => navigation.navigate('bookdetails', { book: item,cat: categories })}>
                                    <SearchCart  {...item} />
                                </TouchableOpacity>
                            )}
                        />
                    </>
                )}
            </View>
            {/* Cart Container */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: ScaledSize(120),
        paddingTop: ScaledSize(10),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        elevation: 4,
    },
    search_box: {
        width: "80%",
        height: ScaledSize(45),
        paddingLeft: ScaledSize(10),
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: ScaledSize(8),
        borderWidth: ScaledSize(1),
        borderColor: "#e9e9e9a2",
        fontSize: 12,
        textAlign: "right"
    },
    focusedInput: {
        borderColor: '#00cc66',
        borderWidth: ScaledSize(1),
        fontFamily: "IRANYekanXFaNum-Regular",
    },
    cart_container: {
        marginTop: ScaledSize(25),
        marginHorizontal: ScaledSize(20)
    }
});

export default BookSearchScreen;
