import { HeroContainer, HeroImageBackground, HeroGradient, ButtonsView } from "./styles";
import { colors } from '../../styles/colors'
import { CustomText } from "../CustomText";
import { Logo } from "../Logo";
import { Tag } from "../Tag";
import { IconButton } from "../IconButton";
import { PlayButton } from "../PlayButton";
import { useFavorites } from "../../services/hooks";
import { useEffect, useMemo, useState } from "react";

export function Hero({ item, onDetailPage }){
    const { image_url, title, subtitle, type } = item
    const { addFavorites, getFavorites, removeFavorite } = useFavorites()
    const [loading, setLoading] = useState(true)
    const [isFavorite, setIsFavorite] = useState(false)

    async function checkIsFavorite(){
        setLoading(true)
        const favorites = await getFavorites()
        const isInFavorites = favorites.filter(
            (fv) => fv.id === item.id && fv.type === item.type
        )

        if(isInFavorites.length > 0) setIsFavorite(true)

        setLoading(false)
    }

    async function addDataToFavorite(){
        await addFavorites(item)
        checkIsFavorite()
    }

    async function removeDataToFavorite(){
        await removeFavorite(item)
        checkIsFavorite()
    }

    useEffect(() => {
        checkIsFavorite()
    }, [])

    return(
        <HeroContainer>
            <HeroImageBackground source={{ uri: image_url }}>
                <HeroGradient colors={[colors.dark, 'transparent', colors.dark]} >
                    {
                        !onDetailPage && <Logo size="small" />
                    }
                    <Tag  mt={onDetailPage ? 224 : 200}>{type}</Tag>
                    <CustomText size={28} mt={12}>{title}</CustomText>
                    <CustomText size={18} weight="400">{subtitle}</CustomText>

                    <ButtonsView>
                        <IconButton
                            onPress={() => isFavorite ? removeDataToFavorite() : addDataToFavorite()}
                            label={isFavorite ? 'Remove Favoritos' : 'Add Favoritos'}
                            iconName={isFavorite ? 'remove-circle-outline' : 'add-circle-outline'}
                        />
                        <PlayButton />
                        {
                            !onDetailPage && <IconButton label="Saiba mais" iconName="information-circle-outline" />
                        }
                        
                    </ButtonsView>
                </HeroGradient>
            </HeroImageBackground>
        </HeroContainer>
    )
}