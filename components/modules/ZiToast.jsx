import React from 'react'
import ToastManager, { Toast } from 'toastify-react-native'
import { ScaledSize } from '../../utils/responsive'

export default function ZiToast() {
    return (
        <ToastManager
            textStyle={{
                fontFamily: "IRANYekanXFaNum-Medium",
                fontSize: ScaledSize(15)
            }}
        />
    )
}
