import React from 'react';
import { View, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ScaledSize } from '../utils/responsive';
import SubmitBtn from '../components/modules/SubmitBtn';
import InputField from '../components/modules/InputField';
import FormHeader from '../components/modules/FormHeader';
import TransferText from '../components/modules/TransferText';
import { ErrorMessage, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import SubmitLoading from '../components/modules/SubmitLoading';
import SubmitError from '../components/modules/SubmitError';
import { registerUser } from '../redux/store/users';
import ZiToast from '../components/modules/ZiToast';
import { Toast } from 'toastify-react-native'

export default function RegisterScreen({ navigation }) {
    const dispath = useDispatch();
    const { colors, dark } = useTheme();

    const handleUserRegistration = async (user) => {
        try {
            const status = await dispath(registerUser(user));
            console.log("register=>>>", status.payload)

            if (status.payload === 200) {
                //navigation
                Toast.success('حساب کاربری با موفقیت ساخته شد!', 'top')
                setTimeout(() => {
                    navigation.navigate("login", { successRegister: true });
                }, 1000);
            } else {
                //show error
                Toast.error('خطایی رخ داده است!', 'top')
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: colors.primary }]}>
            <ZiToast />
            <View style={{ marginHorizontal: ScaledSize(20) }}>
                {/* Start Header */}
                <FormHeader />
                {/* End Header */}
                <Formik
                    validate={(values) => {
                        const errors = {};
                        if (values.name === "") {
                            errors.name = "وارد کردن نام اجباری می‌باشد";
                        } else if (values.name.length < 4) {
                            errors.name = "طول نام حداقل باید ۴ کاراکتر باشد";
                        }
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
                        if (values.confPassword === "") {
                            errors.confPassword = "وارد کردن تکرار کلمه عبور اجباری است."
                        } else if (values.confPassword.length < 6) {
                            errors.confPassword = "تکرار کلمه عبور باید بیش از 6 کارکتر باشد."
                        }
                        return errors;
                    }}
                    initialValues={{
                        name: "",
                        email: "",
                        password: "",
                        confPassword: "",
                    }}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        handleUserRegistration(values)
                        Keyboard.dismiss()
                        resetForm()
                        setTimeout(() => {
                            setSubmitting(false)
                        }, 3000);
                    }}>
                    {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
                        <View style={{ paddingTop: ScaledSize(10) }}>
                            <InputField
                                placeholder="نام و نام خانوادگی"
                                value={values.name}
                                onChange={handleChange("name")}
                                onBlur={handleBlur("name")}
                            />
                            <ErrorMessage name='name'>
                                {message => <SubmitError message={message} />}
                            </ErrorMessage>
                            {/* ------ */}
                            <InputField
                                placeholder="ایمیل"
                                value={values.email}
                                onChange={handleChange('email')}
                                onBlur={handleBlur("email")}
                            />
                            <ErrorMessage name='email'>
                                {message => <SubmitError message={message} />}
                            </ErrorMessage>
                            {/* -------- */}
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
                            {/* ----- */}
                            <InputField
                                secureTextEntry={true}
                                placeholder="تکرار رمز عبور"
                                value={values.confPassword}
                                onChange={handleChange("confPassword")}
                                onBlur={handleBlur("confPassword")}
                            />
                            <ErrorMessage name='confPassword'>
                                {message => <SubmitError message={message} />}
                            </ErrorMessage>
                            {/* --- */}
                            <TouchableOpacity disabled={isSubmitting} onPress={handleSubmit}>
                                <SubmitBtn title={isSubmitting ? (
                                    <SubmitLoading />
                                ) : "ثبت نام"} />
                            </TouchableOpacity>
                            {/* Submit btn */}
                        </View>
                    )}
                </Formik>
                {/* End inputs */}
                <TouchableOpacity onPress={() => navigation.navigate("login")}>
                    <TransferText title="حساب کاربری دارید؟ وارد شوید!" />
                </TouchableOpacity>
                {/* Go to Login */}
            </View>
            {/* Register Content */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
});