import styled from "styled-components/native";

export const Title = styled.Text`
    font-family: ${({ theme, weight }) => weight? `SourceSans${weight}` : 'SourceSans700'};
    font-size: ${({ theme, size }) => theme.metrics.px(size || 24)}px;
    color: ${({ theme, color }) => color || theme.colors.light};
    margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
    margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
    margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
    margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
`