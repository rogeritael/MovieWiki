import { FlatList } from "react-native";
import { Card } from "../Card";
import { ListContainer } from "./styles";
import { CustomText } from "../CustomText";
import { theme } from "../../styles/theme";

export function HomeList({ data, title }){
    return(
        <ListContainer>
            <CustomText ml={24} size={18}>{title}</CustomText>
            <FlatList
                horizontal
                data={data}
                renderItem={({ item }) => <Card item={item}/>}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{
                    paddingLeft: theme.metrics.px(24),
                    paddingTop: theme.metrics.px(12) 
                }}
            />
        </ListContainer>
    )
}