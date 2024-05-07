import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../../utils/responsive"
import ZiText from '../../../modules/ZiBookText'
import { Icon } from '../../../modules/AppIcon';

export default function ReadBtn({ addToLibrarys, bookUrl, id, progress, lastReadLocation }) {
    
    const navigation = useNavigation()

    const addBookToLibraryHandler = async () => {
        await addToLibrarys()
        navigation.navigate('bookview', { book: { bookUrl, id, progress, lastReadLocation } })
    }

    return (
        <View style={styles.readbtn_container}>
            <TouchableOpacity style={styles.textbook} onPress={addBookToLibraryHandler}>
                <Icon
                    name="textbook"
                    size={20}
                    color='#002931'
                    style={{ marginLeft: ScaledSize(4) }}
                />
                <ZiText fontFamily="IRANYekanXFaNum-Medium" size="13" styles={{ color: "#002931", paddingRight: ScaledSize(10) }}>بریم برای مطالعه</ZiText>
            </TouchableOpacity>
            {/* TextBook Btn */}
            <View style={styles.audiobook}>
                <Icon
                    name="podcast2"
                    size={20}
                    color='#002931'
                    style={{ marginLeft: ScaledSize(4) }}
                />
                <ZiText fontFamily="IRANYekanXFaNum-Medium" size="13" styles={{ color: "#002931", paddingRight: ScaledSize(10), }}>کتاب صوتی</ZiText>
            </View>
            {/* AudioBook Btn */}
        </View>
    )
}

const styles = StyleSheet.create({
    readbtn_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: ScaledSize(30),
        marginTop: ScaledSize(30)
    },
    textbook: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "48%",
        height: ScaledSize(50),
        backgroundColor: "#00cc66",
        borderRadius: ScaledSize(8),
    },
    audiobook: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "48%",
        height: ScaledSize(50),
        backgroundColor: "#cccccce8",
        borderRadius: ScaledSize(8),
    }
});
