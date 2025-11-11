import styled from "styled-components";

export const PageContainer = styled.div`
    background-color: ${props => props.theme.colors.background};
    min-height: 90vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`