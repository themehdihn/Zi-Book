import React from 'react'
import ZiText from './ZiBookText'
import { ScaledSize, ScaledWidth, ScaledHeight } from "../../utils/responsive"

export default function SubmitError({ message }) {
    return (
        <ZiText fontFamily="IRANYekanXFaNum-Regular" size="10" styles={{ color: "#f42e25", marginTop: ScaledSize(5) }}>
            {message}
        </ZiText>
    )
}
