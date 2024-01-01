import { LogoImage } from "./styles";
import logoImage from '../../../assets/LogoSplash.png'

const sizes = {
    small: 28,
    large: 64
}

export function Logo({ size }){
    return(
        <LogoImage source={logoImage} size={sizes[size || 'large']} />
    )
}