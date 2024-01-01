import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: ${({ theme }) => theme.metrics.px(36)}px;
    width: ${({ theme }) => theme.metrics.px(100)}px;
    border-radius: ${({ theme }) => theme.metrics.px(8)}px;
    background-color: ${({ theme }) => theme.colors.white};
`