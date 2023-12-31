import { Title } from "./styles";

export function CustomText({ children, color }){
    return(
        <Title color={color}>
            {children}
        </Title>
    )
}