import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Reader, ReaderProvider, useReader, } from '@epubjs-react-native/core';
import { useFileSystem } from '@epubjs-react-native/file-system';
import { ScaledSize, ScaledHeight, ScaledWidth } from "../utils/responsive"
import { useDispatch, useSelector } from "react-redux"
import IndexMenu from '../components/templates/BookView/IndexMenu';
import AppBar from '../components/templates/BookView/AppBar';
import PageCounter from '../components/templates/BookView/PageCounter';
import ProgressBar from '../components/modules/ProgressBar';
import PageControllers from '../components/templates/BookView/PageControllers';
import SettingMenu from '../components/templates/BookView/SettingMenu';
import { lighttheme, darktheme, sepia } from '../components/templates/BookView/CustomThemes';
import Animated, {
    useSharedValue,
    withDelay,
    withSpring,
    useAnimatedStyle,
    withTiming
} from 'react-native-reanimated';
import TopSheet from '../components/modules/TopSheet';
import LoadingBook from '../components/modules/LoadingBook';
import { unrefetch, updateLibrary } from '../redux/store/library';

// const THEMES = Object.values(Themes);


const BookView = ({ bookInfo }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const { colors, dark } = useTheme();

    const { goNext, goPrevious, goToLocation } = useReader();

    // receive book info from params
    const data = bookInfo.bookUrl
    const bookId = bookInfo.id
    const progresss = bookInfo.progress
    const read = bookInfo.lastReadLocation

    const isVisibleIndex = useSharedValue(false);
    const isVisibleSetting = useSharedValue(false);
    const [defaultTheme, setDefaultTheme] = useState(null)
    const [currentPageNum, setCurrentPageNum] = useState(null)
    const [totalPageNum, setTotalPageNum] = useState(null)
    const [cfi, setCfi] = useState([])


    // Send To Server
    const [currentLocation, setCurrentLocation] = useState('')
    const [progress, setProgress] = useState('')
    const isFirstRender = useRef(true);

    useEffect(() => {
        console.log("read and last =>>>", progresss, read)

    }, []);

    useEffect(() => {

        console.log("read and last =>>>", progresss, read)
        if (dark) {
            setDefaultTheme(darktheme)
        } else {
            setDefaultTheme(lighttheme)
        }
    }, [])

    const updataBookInfo = async () => {
        const data = {
            bookId,
            progress,
            lastReadLocation: currentLocation
        }
        // console.log("dataaa",data)
        await dispatch(updateLibrary(data))
        dispatch(unrefetch());
    }

    const navigationToDetailes = () => {
        navigation.goBack()
    }

    const toggleVisibilitySetting = () => {
        isVisibleSetting.value = !isVisibleSetting.value;
    };

    const toggleVisibilityIndex = () => {
        isVisibleIndex.value = !isVisibleIndex.value;
    };

    const animatedIndex = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: withDelay(
                        isVisibleIndex.value ? 0 : 500,
                        withTiming(isVisibleIndex.value ? 0 : -1000)
                    ),
                },
            ],
        };
    });
    const animatedSetting = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: withDelay(
                        isVisibleSetting.value ? 0 : 500,
                        withTiming(isVisibleSetting.value ? 0 : -1000)
                    ),
                },
            ],
        };
    });

    const handleChapter = (item) => {
        goToLocation(item)
        toggleVisibilityIndex()
    }

    const goNextPage = () => {
        goNext()
        updataBookInfo()
    }

    const goPrevPage = () => {
        goPrevious()
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.primary }]} >
            <AppBar
                onOpenSettingModal={toggleVisibilitySetting}
                onOpenIndexMenu={toggleVisibilityIndex}
                navigationToDetailes={navigationToDetailes}
            />
            {/* App Bar */}
            {isVisibleSetting && (
                <TopSheet
                    animatedStyle={animatedSetting}
                    onClose={toggleVisibilitySetting}
                    height="30%"
                >
                    <SettingMenu onClose={toggleVisibilitySetting} />
                </TopSheet>
            )}
            {/* Setting Menu */}
            {isVisibleIndex && (
                <TopSheet
                    animatedStyle={animatedIndex}
                    onClose={toggleVisibilityIndex}
                    height="100%">
                    <IndexMenu cfi={cfi} handleChapter={handleChapter} />
                </TopSheet>
            )}
            {/* Index Menu */}
            <PageCounter currentPageNum={currentPageNum} totalPageNum={totalPageNum} />
            {/* Page Counter */}
            <Reader
                enableSelection={false}
                onNavigationLoaded={cfi => {
                    setCfi(cfi)

                    if (isFirstRender.current) {
                        isFirstRender.current = false;
                        if (read) {
                            goToLocation(read);
                        }
                    }
                }}
                onLocationChange={(page, numberOfPages, progress) => {
                    setProgress(progress.toPrecision())
                    setCurrentPageNum(numberOfPages.start.location)
                    setTotalPageNum(page)
                    setCurrentLocation(numberOfPages.start.cfi)
                    console.log(`Current page: ${page} ${numberOfPages.start.location} ${numberOfPages.start.cfi
                        } ${progress.toPrecision()}`);
                }}
                src={data}
                width={Dimensions.get('window').width}
                height={Dimensions.get('window').height - ScaledHeight(140)}
                enableSwipe={false}
                fileSystem={useFileSystem}
                defaultTheme={defaultTheme}
                renderLoadingFileComponent={() => (
                    <LoadingBook title="لطفا صبر کنید..." />
                )}
                renderOpeningBookComponent={() => (
                    <LoadingBook title="در حال باز کردن..." />
                )}
            />
            {/* End Book Reader */}

            <View style={styles.controller_reader}>
                <PageControllers goNext={goNextPage} goPrev={goPrevPage} />
                {/* Controll Buttons */}
                <ProgressBar progress={progress} />
                {/* Progress Bar */}
            </View>
            {/* Section Controller */}

        </SafeAreaView>
    )
}

export default function BookViewScreen({ route }) {
    if (!route.params.book) return null
    const bookInfo = route.params.book

    return (
        <ReaderProvider>
            <BookView bookInfo={bookInfo} />
        </ReaderProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    controller_reader: {
        flexDirection: "column",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0
    },
    animatedContainer: {
        position: 'absolute',
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'lightgrey',
        padding: 20,
        zIndex: 9999
    },
});


