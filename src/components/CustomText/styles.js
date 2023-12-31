import styled from "styled-components/native";

export const Title = styled.Text`
    color: ${({ color }) => color || '#fff'};
    font-size: 24px;
    font-weight: bold;
    margin-top: 12px;
`