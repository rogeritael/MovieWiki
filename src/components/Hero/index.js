import { HeroContainer, HeroImageBackground, HeroGradient, ButtonsView } from "./styles";
import { colors } from '../../styles/colors'
import { CustomText } from "../CustomText";
import { Logo } from "../Logo";
import { Tag } from "../Tag";
import { IconButton } from "../IconButton";
import { PlayButton } from "../PlayButton";

export function Hero({ item }){
    const { imageUrl, title, subtitle, type } = item

    return(
        <HeroContainer>
            <HeroImageBackground source={{ uri: imageUrl }}>
                <HeroGradient colors={[colors.dark, 'transparent', colors.dark]} >
                    <Logo size="small" />
                    <Tag  mt={200}>{type}</Tag>
                    <CustomText size={28} mt={12}>{title}</CustomText>
                    <CustomText size={18} weight="400">{subtitle}</CustomText>

                    <ButtonsView>
                        <IconButton label="Favoritos" iconName="add-circle-outline" />
                        <PlayButton />
                        <IconButton label="Saiba mais" iconName="information-circle-outline" />
                    </ButtonsView>
                </HeroGradient>
            </HeroImageBackground>
        </HeroContainer>
    )
}