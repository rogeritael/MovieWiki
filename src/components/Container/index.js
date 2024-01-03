import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: ${({ dir }) => dir || 'column'};
    align-items: ${({ align }) => align || 'flex-start'};
    justify-content: ${({ justify }) => justify || 'flex-start'};
    background-color: ${({ bg, theme }) => theme.colors[bg || 'dark']};
    width: ${({ w, theme }) => (w ? `${theme.metrics.px(w)}px` : '100%')};
    height: ${({ h, theme }) => (h ? `${theme.metrics.px(h)}px` : '100%')};
`

export const ScreenScrollContainer = styled.ScrollView.attrs(
    ({ theme, addPadding }) => ({
        contentContainerStyle: addPadding ?
            {
                paddingHorizontal: theme.metrics.px(24),
                paddingVertical: theme.metrics.px(48)
            } : {}
    })
)`
    background-color: ${({ bg, theme }) => theme.colors[bg || 'dark']};
`