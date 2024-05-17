import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Button, ScrollView, Dimensions, Text, StatusBar, TextInput, TouchableWithoutFeedback, Image, ScrollViewBase, TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import ZiText from '../components/modules/ZiBookText'
import { ScaledSize, ScaledWidth, ScaledHeight } from "../utils/responsive"
import { Icon } from '../components/modules/AppIcon';
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileBox from '../components/templates/Profile/ProfileBox';
import Theme from '../components/templates/Profile/Theme/Theme';
import Setting from '../components/templates/Profile/Setting';
import MoreItems from '../components/templates/Profile/MoreItems';
import Header from '../components/modules/Header';
import CopyRight from '../components/templates/Profile/CopyRight';
import { Profile } from '../redux/store/users';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    const profileInfo = async () => {
      const storedName = await AsyncStorage.getItem('name');
      const storedPhone = await AsyncStorage.getItem('phone');
      const storedUrl = await AsyncStorage.getItem('url');

      if (storedName) setName(storedName);
      if (storedPhone) setPhone(storedPhone);
      if (storedUrl) setUrl(storedUrl);
    };
    profileInfo();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: ScaledSize(25),
          marginHorizontal: ScaledSize(20)
        }}>
        <ProfileBox name={name} phone={phone} url={url} />
        <Theme />
        <Setting />
        <MoreItems />

        <TouchableOpacity onPress={() => navigation.navigate('profilestack')}>
          <CopyRight />
        </TouchableOpacity>
      </ScrollView>
      {/* User Info */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },

});