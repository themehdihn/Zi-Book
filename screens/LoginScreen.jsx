import React, { useState, useRef, useEffect } from 'react';
import { View, Alert, StyleSheet, TouchableOpacity, Keyboard, BackHandler, Text } from 'react-native';
import ZiText from '../components/modules/ZiBookText'
import { useTheme } from '@react-navigation/native';
import { ScaledSize } from '../utils/responsive';
import SubmitBtn from '../components/modules/SubmitBtn';
import InputField from '../components/modules/InputField';
import FormHeader from '../components/modules/FormHeader';
import TransferText from '../components/modules/TransferText';
import { ErrorMessage, Formik } from "formik";
import SubmitLoading from '../components/modules/SubmitLoading';
import SubmitError from '../components/modules/SubmitError';
import { loginUser } from "../redux/store/users";
import { StackActions, useNavigationState } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getProfile } from "../redux/store/profile";
import { decodeToken } from "../utils/token";
import { useDispatch, useSelector } from "react-redux";
import NetInfo from "@react-native-community/netinfo";
import ZiToast from '../components/modules/ZiToast';
import { Toast } from 'toastify-react-native'

export default function LoginScreen({ navigation }) {
    const dispath = useDispatch();

    const { colors, dark } = useTheme();

    const screenIndex = useNavigationState((state) => state.index);

    const confgureAlert = () => {
        return Alert.alert(
            'ارتباط با سرور',
            'دسترسی به اینترنت برای اجرای برنامه الزامی است!',
            [
                {
                    text: "فهمیدم",
                    onPress: BackHandler.exitApp
                },
            ],
            { cancelable: false }
        )
    }

    useEffect(() => {
        const checkForNet = async () => {
            const state = await NetInfo.fetch()
            if (!state.isConnected) confgureAlert();

        }
        checkForNet()
    }, [])


    useEffect(() => {

        let currentCount = 0;

        if (screenIndex <= 0) {
            BackHandler.addEventListener("hardwareBackPress", () => {
                if (currentCount === 1) {
                    BackHandler.exitApp();
                    return true;
                }
                currentCount += 1;
                console.log("braye exit kos nago")

                setTimeout(() => {
                    currentCount = 0;
                }, 1000);

                return true;
            });
        }
    }, []);

    useEffect(() => {

        const myFunc = async () => {

            const token = await AsyncStorage.getItem("token");
            const userId = JSON.parse(await AsyncStorage.getItem("userId"));
            if (token !== null && userId !== null) {
                const decodedToken = decodeToken(token);

                if (decodedToken.userId === userId)
                    navigation.dispatch(StackActions.replace("home"));
                else {
                    await AsyncStorage.removeItem("token");
                    await AsyncStorage.removeItem("userId");
                    navigation.navigate("login");
                }
            }

        };
        myFunc();

    }, [])

    const handelLogin = async (user) => {
        try {
            const status = await dispath(loginUser(user))
            console.log("first", status)
            if (status === 200) {
                Toast.success('با موفقیت وارد شدید!', 'top')
               setTimeout(() => {
                navigation.reset({
                    index: 0,
                    routes: [{ name: "home" }],
                });
               }, 1000);
            } else {
                Toast.error('ایمیل یا رمز عبور اشتباه است!', 'top')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={[styles.container, { backgroundColor: colors.primary }]}>
           <ZiToast/>
            <View style={{ marginHorizontal: ScaledSize(20) }}>
                <FormHeader />
                {/* End FormHeader */}
                <Formik
                    validate={(values) => {
                        const errors = {};

                        if (values.email === "") {
                            errors.email = "وارد کردن ایمیل اجباری می‌باشد";
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = "ایمیل وارد شده معتبر نیست";
                        }
                        if (values.password === "") {
                            errors.password = "وارد کردن کلمه عبور اجباری میباشد"
                        } else if (values.password.length < 6) {
                            errors.password = "کلمه عبور باید بیش از 6 کارکتر باشد."
                        }
                        return errors;
                    }}
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        console.log(values)
                        handelLogin(values)
                        Keyboard.dismiss()
                        resetForm()
                        setSubmitting(false)
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
                        <View style={{ paddingTop: ScaledSize(10) }}>
                            <InputField
                                placeholder="ایمیل"
                                value={values.email}
                                onChange={handleChange("email")}
                                onBlur={handleBlur("email")}
                            />
                            <ErrorMessage name='email'>
                                {message => <SubmitError message={message} />}
                            </ErrorMessage>
                            {/* Email Field */}
                            <InputField
                                secureTextEntry={true}
                                placeholder="رمز عبور"
                                value={values.password}
                                onChange={handleChange("password")}
                                onBlur={handleBlur("password")}
                            />
                            <ErrorMessage name='password'>
                                {message => <SubmitError message={message} />}
                            </ErrorMessage>
                            {/* Password Field */}
                            <TouchableOpacity disabled={isSubmitting} onPress={handleSubmit}>
                                <SubmitBtn title={isSubmitting ? (
                                    <SubmitLoading />
                                ) : "ورود"} />
                            </TouchableOpacity>
                            {/* Submit Button */}
                        </View>
                    )}
                </Formik>
                {/* End Form */}
                <TouchableOpacity onPress={() => navigation.navigate("register")}>
                    <TransferText title="حساب کاربری ندارید؟ برای ساخت حساب لمس کنید!" />
                </TouchableOpacity>
                {/* Go to Register */}
            </View>
            {/* Register Content */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: "center",
    }
});