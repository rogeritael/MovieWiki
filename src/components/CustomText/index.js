import { Title } from "./styles";

export function CustomText({ children, ...props }){
    return(
        <Title {...props}>
            {children}
        </Title>
    )
}