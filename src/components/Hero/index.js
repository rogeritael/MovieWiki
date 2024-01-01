import { HeroContainer, HeroImageBackground, HeroGradient, ButtonsView } from "./styles";
import { colors } from '../../styles/colors'
import { CustomText } from "../CustomText";
import { Logo } from "../Logo";
import { Tag } from "../Tag";
import { IconButton } from "../IconButton";
import { PlayButton } from "../PlayButton";

export function Hero(){
    return(
        <HeroContainer>
            <HeroImageBackground source={{ uri: 'https://forbes.com.br/wp-content/uploads/2021/04/ForbesLife_StarWars7_160421_Divulgac%CC%A7ao-768x512.jpg' }}>
                <HeroGradient colors={[colors.dark, 'transparent', colors.dark]} >
                    <Logo size="small" />
                    <Tag  mt={200}>Filme</Tag>
                    <CustomText size={28} mt={12}>Episódio I</CustomText>
                    <CustomText size={18} weight="400">A Ameaça Fantasma</CustomText>

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