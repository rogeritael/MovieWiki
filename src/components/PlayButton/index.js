import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../styles/theme";
import { ButtonContainer } from "./styles";
import { CustomText } from "../CustomText";

export function PlayButton(){
    return (
        <ButtonContainer>
            <Ionicons
                name="play"
                size={theme.metrics.px(12)}
                color={theme.colors.black}
            />
            <CustomText size={14} color={theme.colors.black}>
                Play
            </CustomText>
        </ButtonContainer>
    )
}