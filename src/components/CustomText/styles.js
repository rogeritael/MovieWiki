import styled from "styled-components/native";

export const Title = styled.Text`
    font-family: 'SourceSans700';
    font-size: ${({ theme }) => theme.metrics.px(24)};
    color: ${({ theme }) => theme.colors.light || '#fff'};
    margin-top: ${({ theme }) => theme.metrics.px(12)};;
`