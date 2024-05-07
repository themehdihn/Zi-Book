import React from 'react'
import { View, StyleSheet } from 'react-native'
import ZiText from '../../../modules/ZiBookText'
import { Icon } from '../../../modules/AppIcon';
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../../../utils/responsive"
import { useTheme } from '@react-navigation/native';

export default function SearchBox() {
    const { dark, colors } = useTheme();

    return (
        <View style={[styles.search_box, { backgroundColor: colors.searchbox, borderWidth: dark ? 0 : ScaledSize(1), }]}>
            <Icon
                name="search1"
                size={20}
                color="#888d93"
            />
            <ZiText fontFamily="IRANYekanXFaNum-Regular" size="12" styles={{ color: "#888d93", marginLeft: ScaledSize(10) }}>جستجو در زیبوک</ZiText>
        </View>
    )
}

const styles = StyleSheet.create({
    search_box: {
        width: "100%",
        height: ScaledSize(45),
        paddingLeft: ScaledSize(20),
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: ScaledSize(8),
        borderColor: "#f2f2f2",
        marginTop: ScaledSize(10)
    },
});
