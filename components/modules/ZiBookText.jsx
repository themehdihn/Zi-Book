import React from 'react'
import { Text } from 'react-native'
import { ScaledSize } from "../../utils/responsive"

export default function AppText({ children, size, fontFamily, styles,ellipsis,ellipsizeMode,onLayout }) {
    return (
        <Text onLayout={onLayout} ellipsizeMode={ellipsizeMode} numberOfLines={ellipsis} style={[{ fontFamily, fontSize: ScaledSize(size) }, styles]}>
            {children}
        </Text>
    )
}
