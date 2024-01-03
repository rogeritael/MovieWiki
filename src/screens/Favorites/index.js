import { ScreenScrollContainer } from "../../components/Container";
import { FavoritesContainer } from "./styles";
import { CustomText } from '../../components/CustomText'
import { useEffect } from "react";
import { useFavorites } from "../../services/hooks";

export function Favorites({ navigation }){
    const { getFavorites } = useFavorites()

    async function callGetFavorites(){
        const favorites = await getFavorites()
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            callGetFavorites()
        })

        return unsubscribe
    }, [])
    
    return (
        <ScreenScrollContainer addPadding>
            <CustomText size={28}>
                Favoritos
            </CustomText>
        </ScreenScrollContainer>
    )
}