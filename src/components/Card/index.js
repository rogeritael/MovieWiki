import { CardContainer, CardImage } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { useDataStore } from "../../services/stores/dataStore"

export function Card({ item }){
    const { setSelectedData } = useDataStore()
    const navigation = useNavigation()

    function onSelectItem(){
        setSelectedData(item)
        navigation.navigate('detail')
    }

    return(
        <CardContainer onPress={() => onSelectItem()}>
            <CardImage source={{ uri: item.image_url }}/>
        </CardContainer>
    )
}