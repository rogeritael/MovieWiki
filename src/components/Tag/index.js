import { CustomText } from "../CustomText";
import { TagContainer } from "./styles";

export function Tag({ children, ...props }){
    return(
        <TagContainer {...props}>
            <CustomText size={14}>
                {children}
            </CustomText>
        </TagContainer>
    )
}