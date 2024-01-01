import { CardContainer, CardImage } from "./styles"
import { useNavigation } from "@react-navigation/native"

export function Card({ item }){
    const navigation = useNavigation()

    return(
        <CardContainer onPress={() => navigation.navigate('detail')}>
            <CardImage source={{ uri: item.image_url }}/>
        </CardContainer>
    )
}