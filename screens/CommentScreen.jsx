import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Text, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Svg, { Path } from "react-native-svg"
import { ScaledSize, ScaledHeight, ScaledWidth } from "../utils/responsive"
import ZiText from '../components/modules/ZiBookText'
import { Icon } from '../components/modules/AppIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Social from '../components/templates/Comment/Social';
import SubmitComment from '../components/templates/Comment/Submit';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { createComment, getComment, unrefetch } from '../redux/store/comments';


export default function CommentScreen({ route, navigation }) {
    if (!route.params.bookId) return null
    const { colors } = useTheme();
    const dispath = useDispatch();

    const { bookId } = route.params;
    useEffect(() => {
        myFn()

        console.log("bookId", bookId)
        // dispath(getComment(bookId))
    }, [])
    const myFn = async () => {
        const name = await AsyncStorage.getItem('name');
        const newName = name.replace(/"/g, "")
        setName(newName)
        console.log("name", name)
    }

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [commentRate, setCommentRate] = useState("")

    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating)
        setCommentRate(rating)
    }

    const reset = () => {
        setName("")
        setDescription("")
        setCommentRate("")
        setCommentRate("")
    }


    const addCommentHandler = async () => {
        const data = {
            bookId,
            name,
            description,
            rate: commentRate
        }
        await dispath(createComment(data))
        dispath(unrefetch());
        reset()
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[styles.comment_view, { backgroundColor: colors.primary }]}>
                    <ZiText ellipsis={8} fontFamily="IRANYekanXFaNum-Medium" size="13" styles={{ color: colors.text, textAlign: "left" }}>
                        نظرتون در مورد این کتاب چی بود؟
                    </ZiText>
                    {/* Head Title */}
                    <View style={styles.separator_line} />
                    {/* Separator */}
                    <View>
                        <AirbnbRating
                            count={5}
                            reviews={false}
                            reviewSize={0}
                            defaultRating={0}
                            size={25}
                            onFinishRating={ratingCompleted}
                            starContainerStyle={{
                                height: ScaledSize(10),
                            }}
                        />
                    </View>
                    {/* End Rating */}
                    <View style={[styles.input_box, { backgroundColor: colors.card }]}>
                        <TextInput
                            placeholder='نوشتن نظر'
                            placeholderTextColor={'#939496'}
                            multiline={true}
                            maxLength={200}
                            inputMode='text'
                            value={description}
                            onChangeText={text => setDescription(text)}
                            autoCapitalize="none"
                            style={styles.input}
                        />
                    </View>
                    {/* Input Box */}
                    <SubmitComment addCommentHandler={addCommentHandler} />
                    {/* Submit Comment Button */}
                    <Social />
                    {/* ZiBook Social */}
                </View>
                {/* Comment View */}
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    comment_view: {
        height: "100%",
        elevation: 4,
        paddingTop: StatusBar.currentHeight,
        alignItems: "center",
        paddingHorizontal: ScaledSize(20)
    },
    input_box: {
        marginTop: ScaledSize(30),

        width: '100%',
        height: ScaledSize(200),
        borderWidth: 1,
        borderColor: "#dbdbdb",
        borderRadius: ScaledSize(10),
        overflow: "hidden"
    },
    input: {
        textAlign: 'right',
        paddingLeft: ScaledSize(20),
        borderRadius: ScaledSize(10),
        padding: ScaledSize(10),
        fontSize: ScaledSize(15),
        fontFamily: "IRANYekanXFaNum-Regular",
    },
    separator_line: {
        width: "100%",
        height: ScaledSize(1),
        backgroundColor: "#dbdbdb",
        marginVertical: ScaledSize(20)
    }
});
