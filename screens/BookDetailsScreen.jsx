import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native';
import InfoBox from '../components/templates/BookDetails/InfoBox/InfoBox';
import BookDesc from '../components/templates/BookDetails/BookDesc';
import Header from '../components/templates/BookDetails/Header';
import CommentBox from '../components/templates/BookDetails/CommentBox';
import { useDispatch, useSelector } from "react-redux";
import { addToLibrary, unrefetch } from '../redux/store/library';
import AddComment from '../components/templates/BookDetails/Comment/AddComment';
import MoreComment from '../components/templates/BookDetails/Comment/MoreComment';
import InfoBoxContainer from '../components/templates/BookDetails/InfoBox/InfoBoxContainer';
import ReadBtn from '../components/templates/BookDetails/ReadBtn/ReadBtn';
import CommentBtn from '../components/templates/BookDetails/Comment/CommentBtn';

export default function BookDetailsScreen({ navigation, route }) {
    if (!route.params.book) return null
    const { colors } = useTheme();
    const dispatch = useDispatch();

    const [categoryName, setCategoryName] = useState('');

    const { numberOfPages, catId, id, lastReadLocation } = route.params.book
    const bookInfo = route.params.book
    const categories = route.params.cat
    const catName = categories.map(cat => cat.name)
    const catID = categories.map(cat => cat.id)
    const bookId = id;

    const handleCategoryName = (receivedId) => {
        for (let i = 0; i < catID.length; i++) {
            if (catID[i] === receivedId) {
                setCategoryName(catName[i]);
                break;
            }
        }
    };

    useEffect(() => {
        handleCategoryName(catId)
    }, [])

    const addToLibrarys = async () => {
        await dispatch(addToLibrary(bookId));
        dispatch(unrefetch());
    }

    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Header {...bookInfo} />
                {/* Header */}
                <InfoBoxContainer>
                    <InfoBox
                        color={colors.text}
                        icon='textbook'
                        title={numberOfPages + ' صفحه'}
                    />
                    <InfoBox
                        color={colors.text}
                        icon='epub'
                        title='فرمت'
                    />
                    <InfoBox
                        color={colors.text}
                        icon='category'
                        title={categoryName}
                    />
                </InfoBoxContainer>
                {/* InfoBooks Section */}
                <ReadBtn addToLibrarys={addToLibrarys} {...bookInfo} />
                {/* Read Book Button */}
                <BookDesc {...bookInfo} />
                {/* About Book */}
                <CommentBox bookId={bookId} />
                {/* Comment Box */}
                <CommentBtn>
                    <AddComment {...bookInfo} />
                    <MoreComment />
                </CommentBtn>
                {/* Comment Button */}
            </ScrollView>
        </SafeAreaView>
    )
}

