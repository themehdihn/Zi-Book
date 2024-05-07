import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import {  useTheme } from '@react-navigation/native';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../utils/responsive"
import { Icon } from './AppIcon';

export default function GoBack() {
    const { colors, dark } = useTheme();
  

    return (
        <View>
            <Icon
                name="zi-right"
                size={25}
                color={colors.text}
                style={{
                    marginRight: ScaledSize(10),
                }}
            />
        </View>
    )
}
