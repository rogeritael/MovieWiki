import { useNavigation } from "@react-navigation/native";
import { GoBackContainer } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../styles/theme";

export function GoBack(){
    const navigation = useNavigation()

    return(
        <GoBackContainer onPress={() => navigation.goBack()}>
            <Ionicons
                name="chevron-back"
                color={theme.colors.white}
                size={theme.metrics.px(28)}
            />
        </GoBackContainer>
    )
}