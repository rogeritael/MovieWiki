//youtube -> https://www.youtube.com/watch?v=8I396-7DYCw [27:56]
import { Dimensions, PixelRatio } from "react-native"

const { width, height } = Dimensions.get('window')

const prototypeWidth = 375;

const px = (valueInPx) => {
    const widthPercent = ( valueInPx / prototypeWidth ) * 100
    const screenPixels = PixelRatio.roundToNearestPixel((
        (width * parseFloat(widthPercent)) / 100
    ))

    return screenPixels
}

export const metrics = {
    px,
}