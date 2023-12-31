import { FlatList } from "react-native";
import { Card } from "../Card";

const mock = [
    {
        id: 0,
        image_url: 'https://sm.ign.com/t/ign_br/screenshot/default/darth-vader_5yvm.1200.jpg'
    },
    {
        id: 1,
        image_url: 'https://t.ctcdn.com.br/xj1bh94bEtMiyzl2G36mmgtos3Q=/1920x1080/smart/i722748.jpeg'
    }
]

export function HomeList(){
    return(
        <FlatList
            horizontal
            data={mock}
            renderItem={({ item }) => <Card item={item}/>}
            keyExtractor={(item) => item.id}
        />
    )
}