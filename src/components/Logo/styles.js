import styled from "styled-components/native";

export const LogoImage = styled.Image`
    width: ${({ size, theme }) => theme.metrics.px(size)}px;
    height: ${({ size, theme }) => theme.metrics.px(size)}px;
`