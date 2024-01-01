import { Ionicons } from "@expo/vector-icons";
import { CustomText } from "../CustomText";
import { ButtonContainer } from "./styles";
import { theme } from "../../styles/theme";

export function IconButton({ iconName, label, onPress }){
    return(
        <ButtonContainer onPress={onPress}>
            <Ionicons name={iconName} size={theme.metrics.px(24)} color={theme.colors.white}/>
            <CustomText weight='500' size={10} mt={6}>{label}</CustomText>
        </ButtonContainer>
    )
}